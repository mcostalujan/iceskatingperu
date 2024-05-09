import { UserDto } from '../../dto/user.dto';
import { Authority } from './authority.model';
import { Role } from './role.model';

export class UserModelV2 {
  userId?: number;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  createdAt?: Date;
  createdBy?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  lastLogin?: Date;
  password?: string;
  updatedAt?: Date;
  updatedBy?: string;
  username?: string;
  roles?: Role[];
  authorities?: Authority[];
  jwt_token?: string;

  static fromObject(object: any): UserModelV2 {
    const user: UserModelV2 = {};

    if (object) {
      user.createdBy = object.createdBy ?? undefined;
      user.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      user.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      user.updatedBy = object.updatedBy ?? undefined;
      user.userId = object.userId ?? undefined;
      user.accountNonExpired = object.accountNonExpired ?? undefined;
      user.accountNonLocked = object.accountNonLocked ?? undefined;
      user.credentialsNonExpired = object.credentialsNonExpired ?? undefined;
      user.email = object.email ?? undefined;
      user.enabled = object.enabled ?? undefined;
      user.lastLogin = object.lastLogin ?? undefined;
      user.password = object.password ?? undefined;
      user.updatedAt = object.updatedAt ?? undefined;
      user.roles = object.roles ?? undefined;
      user.authorities = object.authorities ?? undefined;
    }

    return user;
  }

  static fromUserDtoToUserModelV2(userDto: UserDto, roles: Role[], authorities: Authority[]): UserModelV2 {
    const user = new UserModelV2();
    user.createdAt = userDto.createdAt
      ? new Date(userDto.createdAt)
      : undefined;
    user.createdBy = userDto.createdBy;
    user.updatedAt = userDto.updatedAt
      ? new Date(userDto.updatedAt)
      : undefined;
    user.updatedBy = userDto.updatedBy;
    user.lastLogin = userDto.lastLogin
      ? new Date(userDto.lastLogin)
      : undefined;
    user.jwt_token = userDto.jwt_token;
    user.credentialsNonExpired = stringToBoolean(userDto.credentialsNonExpired);
    user.roles = roles;
    user.userId = stringToNumber(userDto.userId);
    user.enabled = stringToBoolean(userDto.enabled);
    user.authorities = authorities;
    user.password = userDto.password;
    user.accountNonExpired = stringToBoolean(userDto.accountNonExpired);
    user.email = userDto.email;
    user.accountNonLocked = stringToBoolean(userDto.accountNonLocked);
    user.username = userDto.username;
    return user;
  }
}

const stringToBoolean = (value: string | undefined): boolean => {
  try {
    if (value == undefined) return false;
    return value.toLowerCase() === 'true' || value === '1';
  } catch (error) {
    return false;
  }
};

const stringToNumber = (input: string | undefined): number => {
  if (input == undefined)
    throw new Error(
      `Invalid input: "${input}" cannot be converted to a number.`
    );

  const parsedNumber = Number(input);
  if (isNaN(parsedNumber)) {
    throw new Error(
      `Invalid input: "${input}" cannot be converted to a number.`
    );
  }

  return parsedNumber;
};
