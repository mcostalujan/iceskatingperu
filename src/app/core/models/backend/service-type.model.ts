class ServiceType {
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  identifierCode?: string;
  identifierDescription?: string;
  enabled?: boolean;
  serviceTypeId?: number;

  static fromObject(json: any): ServiceType {
    const serviceType = new ServiceType();
    serviceType.createdAt = json.createdAt
      ? new Date(json.createdAt)
      : undefined;
    serviceType.updatedAt = json.updatedAt
      ? new Date(json.updatedAt)
      : undefined;
    serviceType.updatedBy = json.updatedBy ?? undefined;
    serviceType.createdBy = json.createdBy ?? undefined;
    serviceType.enabled = json.enabled ?? undefined;
    serviceType.identifierCode = json.identifierCode ?? undefined;
    serviceType.identifierDescription = json.identifierDescription ?? undefined;
    serviceType.serviceTypeId = json.serviceTypeId ?? undefined;
    return serviceType;
  }
}
