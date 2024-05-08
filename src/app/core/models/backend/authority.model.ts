class Authority {
  createdAt?: Date;
  createdBy?: string;
  description?: string;
  enabled?: boolean;
  name?: string;
  authorityId?: number;
  updatedAt?: Date;
  updatedBy?: string;

  static fromObject(object: any): Authority {
    const authority: Authority = {};

    if (object) {
      authority.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      authority.createdBy = object.createdBy ?? undefined;

      authority.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      authority.updatedBy = object.updatedBy ?? undefined;
      authority.description = object.description ?? undefined;
      authority.enabled = object.enabled ?? undefined;
      authority.name = object.name ?? undefined;
      authority.authorityId = object.authorityId ?? undefined;
    }

    return authority;
  }
}
