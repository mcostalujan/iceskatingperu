class ServiceDefReleaseDto {
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  enabled?: string;
  serviceDefRelId?: string;
  serviceTypeId?: string;
  releaseNumber?: string;

  static fromObject(json: any): ServiceDefReleaseDto {
    const serviceDefRel = new ServiceDefReleaseDto();
    serviceDefRel.createdAt = json.createdAt ?? undefined;
    serviceDefRel.updatedAt = json.updatedAt ?? undefined;
    serviceDefRel.updatedBy = json.updatedBy ?? undefined;
    serviceDefRel.createdBy = json.createdBy ?? undefined;
    serviceDefRel.enabled = json.enabled ?? undefined;
    serviceDefRel.serviceDefRelId = json.serviceDefRelId ?? undefined;
    serviceDefRel.serviceTypeId = json.serviceTypeId ?? undefined;
    serviceDefRel.releaseNumber = json.releaseNumber ?? undefined;
    return serviceDefRel;
  }
}
