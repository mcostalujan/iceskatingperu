class ServiceTypeDto {
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  identifierCode?: string;
  identifierDescription?: string;
  enabled?: string;
  serviceTypeId?: string;

  static fromObject(object: any): ServiceTypeDto {
    const serviceTypeDto: ServiceTypeDto = {};

    if (object) {
      serviceTypeDto.createdAt = object.createdAt ?? undefined;
      serviceTypeDto.updatedAt = object.updatedAt ?? undefined;
      serviceTypeDto.updatedBy = object.updatedBy ?? undefined;
      serviceTypeDto.createdBy = object.createdBy ?? undefined;
      serviceTypeDto.enabled = object.enabled ?? undefined;
      serviceTypeDto.identifierCode = object.identifierCode ?? undefined;
      serviceTypeDto.identifierDescription =
        object.identifierDescription ?? undefined;
      serviceTypeDto.serviceTypeId = object.serviceTypeId ?? undefined;
    }
    return serviceTypeDto;
  }
}
