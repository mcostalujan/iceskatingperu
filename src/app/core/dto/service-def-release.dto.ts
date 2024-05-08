class ServiceDefReleaseDto {
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  enabled?: string;
  serviceDefRelId?: string;
  serviceTypeId?: string;
  releaseNumber?: string;

  static fromObject(object: any): ServiceDefReleaseDto {
    const serviceDefRelDto: ServiceDefReleaseDto = {};

    if (object) {
      serviceDefRelDto.createdAt = object.createdAt ?? undefined;
      serviceDefRelDto.updatedAt = object.updatedAt ?? undefined;
      serviceDefRelDto.updatedBy = object.updatedBy ?? undefined;
      serviceDefRelDto.createdBy = object.createdBy ?? undefined;
      serviceDefRelDto.enabled = object.enabled ?? undefined;
      serviceDefRelDto.serviceDefRelId = object.serviceDefRelId ?? undefined;
      serviceDefRelDto.serviceTypeId = object.serviceTypeId ?? undefined;
      serviceDefRelDto.releaseNumber = object.releaseNumber ?? undefined;
    }
    return serviceDefRelDto;
  }
}
