export class ServiceDefRelease {
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  enabled?: boolean;
  serviceDefRelId?: number;
  serviceTypeId?: number;
  releaseNumber?: number;

  static fromObject(object: any): ServiceDefRelease {
    const serviceDefRel: ServiceDefRelease = {};

    if (object) {
      serviceDefRel.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      serviceDefRel.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      serviceDefRel.updatedBy = object.updatedBy ?? undefined;
      serviceDefRel.createdBy = object.createdBy ?? undefined;
      serviceDefRel.enabled = object.enabled ?? undefined;
      serviceDefRel.serviceDefRelId = object.serviceDefRelId ?? undefined;
      serviceDefRel.serviceTypeId = object.serviceTypeId ?? undefined;
      serviceDefRel.releaseNumber = object.releaseNumber ?? undefined;
    }
    return serviceDefRel;
  }
}
