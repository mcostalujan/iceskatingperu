class RoleDto {
  createdAt?: string;
  createdBy?: string;
  description?: string;
  enabled?: string;
  name?: string;
  roleId?: string;
  updatedBy?: string;
  updatedAt?: string;

  static fromObject(object: any): RoleDto {
    const roleDto: RoleDto = {};

    if (object) {
      roleDto.createdBy = object.createdBy ?? undefined;
      roleDto.createdAt = object.createdAt ?? undefined;
      roleDto.updatedAt = object.updatedAt ?? undefined;
      roleDto.updatedBy = object.updatedBy ?? undefined;
      roleDto.description = object.description ?? undefined;
      roleDto.roleId = object.roleId ?? undefined;
      roleDto.enabled = object.enabled ?? undefined;
      roleDto.name = object.name ?? undefined;
    }

    return roleDto;
  }
}
