export class RoleHasPrivileges {
  createdAt?: Date;
  createdBy?: string;
  enabled?: boolean;
  privilegedId?: number;
  roleId?: number;
  updatedAt?: Date;
  updatedBy?: string;

  static fromObject(object: any): RoleHasPrivileges {
    const rolHasPrivileges: RoleHasPrivileges = {};

    if (object) {
      rolHasPrivileges.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      rolHasPrivileges.createdBy = object.createdBy ?? undefined;
      rolHasPrivileges.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      rolHasPrivileges.updatedBy = object.updatedBy ?? undefined;
      rolHasPrivileges.enabled = object.enabled ?? undefined;
      rolHasPrivileges.roleId = object.roleId ?? undefined;
      rolHasPrivileges.privilegedId = object.privilegedId ?? undefined;
    }

    return rolHasPrivileges;
  }
}
