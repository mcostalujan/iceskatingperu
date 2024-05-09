export class ServiceDefinition {
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

  static fromObject(object: any): ServiceDefinition {
    const serviceDef: ServiceDefinition = {};

    if (object) {
      serviceDef.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      serviceDef.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      serviceDef.updatedBy = object.updatedBy ?? undefined;
      serviceDef.createdBy = object.createdBy ?? undefined;
      serviceDef.enabled = object.enabled ?? undefined;
      serviceDef.serviceDefId = object.serviceDefId ?? undefined;
      serviceDef.serviceTypeId = object.serviceTypeId ?? undefined;
      serviceDef.serviceDefRelId = object.serviceDefRelId ?? undefined;
      serviceDef.columnDescription = object.columnDescription ?? undefined;
      serviceDef.columnName = object.columnName ?? undefined;
    }

    return serviceDef;
  }
}
