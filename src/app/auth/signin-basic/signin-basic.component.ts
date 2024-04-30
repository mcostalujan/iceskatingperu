import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service_new';
import { UserModelV2 } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-signin-basic',
  templateUrl: './signin-basic.component.html',
  styleUrls: ['./signin-basic.component.scss'],
})
export class SigninBasicComponent implements OnInit, OnDestroy {
  // KeenThemes mock, change it to:
  defaultAuth: any = {
    username: '11111111',
    password: 'password123',
  };
  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  translateService: TranslateService;
  fieldTextType!: boolean;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translateService = translate;
    this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: [
        this.defaultAuth.username,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(11), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  submit() {
    this.hasError = false;
    const loginSubscr = this.authService
      .login(this.f['username'].value, this.f['password'].value)
      .pipe(first())
      .subscribe((user: UserModelV2 | undefined) => {
        console.log(JSON.stringify(user));
        if (user) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.hasError = true;
        }
      });
    this.unsubscribe.push(loginSubscr);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  getTranslatedMessage(key: string): string {
    let translatedMessage = ''; // Initialize with an empty string

    this.translateService.get(key).subscribe((res: string) => {
      translatedMessage = res; // Assign the translated value
    });

    console.log(translatedMessage);
    return translatedMessage; // Return the translated message (may still be empty if not yet available)
  }
}
