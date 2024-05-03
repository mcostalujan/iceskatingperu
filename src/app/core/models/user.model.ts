import { UserDto } from '../dto/user.dto';

export class UserModelV2 {
  lastLogin?: Date;
  updatedBy?: string;
  jwt_token?: string;
  credentialsNonExpired?: string;
  roles?: string[];
  userId?: string;
  enabled?: string;
  authorities?: any[];
  createdAt?: Date;
  password?: string;
  createdBy?: string;
  accountNonExpired?: string;
  email?: string;
  accountNonLocked?: string;
  updatedAt?: Date;
  username?: string;

  static fromUserDtoToUserModelV2(userDto: UserDto): UserModelV2 {
    const userModelV2 = new UserModelV2();
    userModelV2.lastLogin = userDto.lastLogin
      ? new Date(userDto.lastLogin)
      : undefined;
    userModelV2.updatedBy = userDto.updatedBy;
    userModelV2.jwt_token = userDto.jwt_token;
    userModelV2.credentialsNonExpired = userDto.credentialsNonExpired;
    userModelV2.roles = userDto.roles;
    userModelV2.userId = userDto.userId;
    userModelV2.enabled = userDto.enabled;
    userModelV2.authorities = userDto.authorities;
    userModelV2.createdAt = userDto.createdAt
      ? new Date(userDto.createdAt)
      : undefined;
    userModelV2.password = userDto.password;
    userModelV2.createdBy = userDto.createdBy;
    userModelV2.accountNonExpired = userDto.accountNonExpired;
    userModelV2.email = userDto.email;
    userModelV2.accountNonLocked = userDto.accountNonLocked;
    userModelV2.updatedAt = userDto.updatedAt
      ? new Date(userDto.updatedAt)
      : undefined;
    userModelV2.username = userDto.username;
    return userModelV2;
  }
}
