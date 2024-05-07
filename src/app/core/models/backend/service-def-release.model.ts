class ServiceDefRelease {
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  enabled?: boolean;
  serviceDefRelId?: number;
  serviceTypeId?: number;
  releaseNumber?: number;

  static fromObject(json: any): ServiceDefRelease {
    const serviceDefRel = new ServiceDefRelease();
    serviceDefRel.createdAt = json.createdAt
      ? new Date(json.createdAt)
      : undefined;
    serviceDefRel.updatedAt = json.updatedAt
      ? new Date(json.updatedAt)
      : undefined;
    serviceDefRel.updatedBy = json.updatedBy ?? undefined;
    serviceDefRel.createdBy = json.createdBy ?? undefined;
    serviceDefRel.enabled = json.enabled ?? undefined;
    serviceDefRel.serviceDefRelId = json.serviceDefRelId ?? undefined;
    serviceDefRel.serviceTypeId = json.serviceTypeId ?? undefined;
    serviceDefRel.releaseNumber = json.releaseNumber ?? undefined;
    return serviceDefRel;
  }
}
