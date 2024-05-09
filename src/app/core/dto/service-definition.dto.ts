export class ServiceDefinitionDto {
  serviceDefId?: string;
  serviceTypeId?: string;
  serviceDefRelId?: string;
  columnDescription?: string;
  columnName?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  enabled?: string;

  static fromObject(object: any): ServiceDefinitionDto {
    const serviceDefDto: ServiceDefinitionDto = {};

    if (object) {
      serviceDefDto.createdAt = object.createdAt ?? undefined;
      serviceDefDto.updatedAt = object.updatedAt ?? undefined;
      serviceDefDto.updatedBy = object.updatedBy ?? undefined;
      serviceDefDto.createdBy = object.createdBy ?? undefined;
      serviceDefDto.enabled = object.enabled ?? undefined;
      serviceDefDto.serviceDefId = object.serviceDefId ?? undefined;
      serviceDefDto.serviceTypeId = object.serviceTypeId ?? undefined;
      serviceDefDto.serviceDefRelId = object.serviceDefRelId ?? undefined;
      serviceDefDto.columnDescription = object.columnDescription ?? undefined;
      serviceDefDto.columnName = object.columnName ?? undefined;
    }
    return serviceDefDto;
  }
}
