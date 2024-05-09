export class RoleHasPrivilegesDto {
  createdAt?: string;
  createdBy?: string;
  enabled?: string;
  privilegedId?: string;
  roleId?: string;
  updatedAt?: string;
  updatedBy?: string;

  static fromObject(object: any): RoleHasPrivilegesDto {
    const rolHasPrivileges: RoleHasPrivilegesDto = {};

    if (object) {
      rolHasPrivileges.createdAt = object.createdAt ?? undefined;
      rolHasPrivileges.createdBy = object.createdBy ?? undefined;
      rolHasPrivileges.updatedAt = object.updatedAt ?? undefined;
      rolHasPrivileges.updatedBy = object.updatedBy ?? undefined;
      rolHasPrivileges.enabled = object.enabled ?? undefined;
      rolHasPrivileges.roleId = object.roleId ?? undefined;
      rolHasPrivileges.privilegedId = object.privilegedId ?? undefined;
    }

    return rolHasPrivileges;
  }
}
