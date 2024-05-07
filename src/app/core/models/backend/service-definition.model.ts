class ServiceDefinition {
  serviceDefId?: number;
  serviceTypeId?: number;
  serviceDefRelId?: number;
  columnDescription?: string;
  columnName?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  enabled?: boolean;

  static fromObject(json: any): ServiceDefinition {
    const serviceDef = new ServiceDefinition();
    serviceDef.createdAt = json.createdAt
      ? new Date(json.createdAt)
      : undefined;
    serviceDef.updatedAt = json.updatedAt
      ? new Date(json.updatedAt)
      : undefined;
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
