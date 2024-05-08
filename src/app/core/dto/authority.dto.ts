class AuthorityDto {
  createdAt?: string;
  createdBy?: string;
  description?: string;
  enabled?: string;
  name?: string;
  authorityId?: string;
  updatedAt?: string;
  updatedBy?: string;

  static fromObject(object: any): AuthorityDto {
    const authorityDto: AuthorityDto = {};

    if (object) {
      authorityDto.createdAt = object.createdAt ?? undefined;
      authorityDto.createdBy = object.createdBy ?? undefined;
      authorityDto.updatedAt = object.updatedAt ?? undefined;
      authorityDto.updatedBy = object.updatedBy ?? undefined;
      authorityDto.description = object.description ?? undefined;
      authorityDto.enabled = object.enabled ?? undefined;
      authorityDto.name = object.name ?? undefined;
      authorityDto.authorityId = object.authorityId ?? undefined;
    }

    return authorityDto;
  }
}
