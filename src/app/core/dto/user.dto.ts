export class UserDto {
  lastLogin?: string;
  updatedBy?: string;
  jwt_token?: string;
  credentialsNonExpired?: string;
  roles?: string[];
  userId?: string;
  enabled?: string;
  authorities?: string[];
  createdAt?: string;
  password?: string;
  createdBy?: string;
  accountNonExpired?: string;
  email?: string;
  accountNonLocked?: string;
  updatedAt?: string;
  username?: string;

  static fromObject(object: any): UserDto {
    const userDto = new UserDto();

    if (object) {
      const fieldMap: { [key: string]: keyof UserDto } = {
        lastLogin: 'lastLogin',
        updatedBy: 'updatedBy',
        'jwt-token': 'jwt_token',
        credentialsNonExpired: 'credentialsNonExpired',
        roles: 'roles',
        userId: 'userId',
        enabled: 'enabled',
        authorities: 'authorities',
        createdAt: 'createdAt',
        password: 'password',
        createdBy: 'createdBy',
        accountNonExpired: 'accountNonExpired',
        email: 'email',
        accountNonLocked: 'accountNonLocked',
        updatedAt: 'updatedAt',
        username: 'username',
      };

      for (const key in fieldMap) {
        if (fieldMap.hasOwnProperty(key) && object.hasOwnProperty(key)) {
          userDto[fieldMap[key]] = object[key];
        }
      }
    }
    return userDto;
  }
}
