class ServiceTypeDto {
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  identifierCode?: string;
  identifierDescription?: string;
  enabled?: string;
  serviceTypeId?: string;

  static fromObject(json: any): ServiceTypeDto {
    const serviceType = new ServiceTypeDto();
    serviceType.createdAt = json.createdAt ?? undefined;
    serviceType.updatedAt = json.updatedAt ?? undefined;
    serviceType.updatedBy = json.updatedBy ?? undefined;
    serviceType.createdBy = json.createdBy ?? undefined;
    serviceType.enabled = json.enabled ?? undefined;
    serviceType.identifierCode = json.identifierCode ?? undefined;
    serviceType.identifierDescription = json.identifierDescription ?? undefined;
    serviceType.serviceTypeId = json.serviceTypeId ?? undefined;
    return serviceType;
  }
}
