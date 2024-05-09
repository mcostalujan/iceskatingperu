export class ServiceType {
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  identifierCode?: string;
  identifierDescription?: string;
  enabled?: boolean;
  serviceTypeId?: number;

  static fromObject(object: any): ServiceType {
    const serviceType: ServiceType = {};

    if (object) {
      serviceType.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      serviceType.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      serviceType.updatedBy = object.updatedBy ?? undefined;
      serviceType.createdBy = object.createdBy ?? undefined;
      serviceType.enabled = object.enabled ?? undefined;
      serviceType.identifierCode = object.identifierCode ?? undefined;
      serviceType.identifierDescription =
        object.identifierDescription ?? undefined;
      serviceType.serviceTypeId = object.serviceTypeId ?? undefined;
    }
    return serviceType;
  }
}
