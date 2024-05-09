export class Role {
  createdAt?: Date;
  createdBy?: string;
  description?: string;
  enabled?: boolean;
  name?: string;
  roleId?: number;
  updatedBy?: string;
  updatedAt?: Date;

  static fromObject(object: any): Role {
    const role: Role = {};

    if (object) {
      role.createdBy = object.createdBy ?? undefined;
      role.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      role.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      role.updatedBy = object.updatedBy ?? undefined;
      role.description = object.description ?? undefined;
      role.roleId = object.roleId ?? undefined;
      role.enabled = object.enabled ?? undefined;
      role.name = object.name ?? undefined;
    }

    return role;
  }
}
