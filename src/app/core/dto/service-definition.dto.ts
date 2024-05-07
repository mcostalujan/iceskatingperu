class ServiceDefinitionDto {
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

  static fromObject(json: any): ServiceDefinitionDto {
    const serviceDef = new ServiceDefinitionDto();
    serviceDef.createdAt = json.createdAt ?? undefined;
    serviceDef.updatedAt = json.updatedAt ?? undefined;
    serviceDef.updatedBy = json.updatedBy ?? undefined;
    serviceDef.createdBy = json.createdBy ?? undefined;
    serviceDef.enabled = json.enabled ?? undefined;
    serviceDef.serviceDefId = json.serviceDefId ?? undefined;
    serviceDef.serviceTypeId = json.serviceTypeId ?? undefined;
    serviceDef.serviceDefRelId = json.serviceDefRelId ?? undefined;
    serviceDef.columnDescription = json.columnDescription ?? undefined;
    serviceDef.columnName = json.columnName ?? undefined;
    return serviceDef;
  }
}
