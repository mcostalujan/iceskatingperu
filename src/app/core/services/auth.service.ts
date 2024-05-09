import { Role } from './../models/backend/role.model';
import { UserModelV2 } from 'src/app/core/models/backend/user.model';
import { UserService } from './user.service';
import { UserModel } from '../models/user.model_backup';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription, forkJoin } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { AuthHTTPService } from './auth-http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ResponseModel } from '../models/response.model';
import { UserDto } from '../dto/user.dto';
import { RoleDto } from '../dto/role.dto';
import { AuthorityDto } from '../dto/authority.dto';
import { Authority } from '../models/backend/authority.model';
export type UserType = UserModelV2 | undefined;

@Injectable({
  providedIn: 'root',
})
export class AuthServiceV2 implements OnDestroy {
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  // public fields
  currentUser$: Observable<UserType>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<UserType>;
  isLoadingSubject: BehaviorSubject<boolean>;

  get currentUserValue(): UserType {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: UserType) {
    this.currentUserSubject.next(user);
  }

  constructor(
    private authHttpService: AuthHTTPService,
    private userService: UserService,
    private router: Router
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserType>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    const subscr = this.getUserByToken().subscribe();
    this.unsubscribe.push(subscr);
  }

  // public methods
  login(username: string, password: string): Observable<UserType> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.login(username, password).pipe(
      map((auth: ResponseModel) => {
        const result = this.setAuthFromLocalStorage(
          UserDto.fromObject(auth.resultData.user)
        );
        // const loginResponse = UserModelV2.fromUserDtoToUserModelV2(UserDto.fromObject(auth));
        return result;
      }),
      switchMap(() => this.getUserByToken()),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  logout() {
    // localStorage.removeItem(this.authLocalStorageToken);
    // this.router.navigate(['/auth/logout-basic'], {
    //   queryParams: {},
    // }).then(() => {
    //   document.location.reload();
    // });

    localStorage.removeItem(this.authLocalStorageToken);
    this.router.navigate(['/auth/logout-basic'], {
      queryParams: {},
    });
  }

  getUserByToken(): Observable<UserType> {
    const auth = this.getAuthFromLocalStorage();
    if (!auth) {
      return of(undefined);
    }

    this.isLoadingSubject.next(true);
    return this.authHttpService.getUserByToken(auth).pipe(
      switchMap((responseModel: ResponseModel): Observable<UserType> => {
        if (
          !responseModel.resultData.user ||
          !responseModel.resultData.user.roles ||
          !responseModel.resultData.user.authorities
        ) {
          this.logout();
          return of(undefined);
        }

        const userId = responseModel.resultData.user.userId;

        return forkJoin({
          roles: this.userService.getRolesByUser(userId),
          authorities: this.userService.getAuthoritiesByUser(userId),
        }).pipe(
          map(({ roles, authorities }) => {
            const user = UserModelV2.fromUserDtoToUserModelV2(
              UserDto.fromObject(responseModel.resultData.user),
              roles.map((roleDto: any) => Role.fromObject(roleDto)),
              authorities.map((authorityDto: any) =>
                Authority.fromObject(authorityDto)
              )
            );
            console.log(user);
            this.currentUserSubject.next(user);
            return user;
          }),
          catchError((error) => {
            console.error('Error fetching roles/authorities:', error);
            this.logout();
            return of(undefined);
          })
        );
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  // need create new user then login
  registration(user: UserModel): Observable<any> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.createUser(user).pipe(
      map(() => {
        this.isLoadingSubject.next(false);
      }),
      switchMap(() => this.login(user.email, user.password)),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  forgotPassword(email: string): Observable<boolean> {
    this.isLoadingSubject.next(true);
    return this.authHttpService
      .forgotPassword(email)
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }

  // private methods
  private setAuthFromLocalStorage(auth: UserDto): boolean {
    // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (auth && auth.jwt_token) {
      localStorage.setItem(
        this.authLocalStorageToken,
        JSON.stringify(auth.jwt_token)
      );
      return true;
    }
    return false;
  }

  private getAuthFromLocalStorage(): string | undefined {
    try {
      const lsValue = localStorage.getItem(this.authLocalStorageToken);
      if (!lsValue) {
        return undefined;
      }

      const authData = lsValue.toString();
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
