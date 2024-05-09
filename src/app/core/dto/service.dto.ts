export class ServiceDto {
  createdBy?: string;
  createdAt?: string;
  enabled?: string;
  flexBoolean0?: string;
  flexBoolean1?: string;
  flexBoolean2?: string;
  flexBoolean3?: string;
  flexBoolean4?: string;
  flexBoolean5?: string;
  flexBoolean6?: string;
  flexBoolean7?: string;
  flexBoolean8?: string;
  flexBoolean9?: string;
  flexInt0?: string;
  flexInt1?: string;
  flexInt2?: string;
  flexInt3?: string;
  flexInt4?: string;
  flexInt5?: string;
  flexInt6?: string;
  flexInt7?: string;
  flexInt8?: string;
  flexInt9?: string;
  flexString0?: string;
  flexString1?: string;
  flexString2?: string;
  flexString3?: string;
  flexString4?: string;
  flexString5?: string;
  flexString6?: string;
  flexString7?: string;
  flexString8?: string;
  flexString9?: string;
  updatedAt?: string;
  updatedBy?: string;
  flexFloat0?: string;
  flexFloat1?: string;
  flexFloat2?: string;
  flexFloat3?: string;
  flexFloat4?: string;
  flexFloat5?: string;
  flexFloat6?: string;
  flexFloat7?: string;
  flexFloat8?: string;
  flexFloat9?: string;
  serviceDefRelId?: string;
  serviceId?: string;
  serviceTypeId?: string;

  static fromObject(object: any): ServiceDto {
    const serviceDto: ServiceDto = {};

    if (object) {
      serviceDto.createdAt = object.createdAt ?? undefined;
      serviceDto.createdBy = object.createdBy ?? undefined;
      serviceDto.updatedAt = object.updatedAt ?? undefined;
      serviceDto.updatedBy = object.updatedBy ?? undefined;
      serviceDto.flexBoolean0 = object.flexBoolean0 ?? undefined;
      serviceDto.flexBoolean1 = object.flexBoolean1 ?? undefined;
      serviceDto.flexBoolean2 = object.flexBoolean2 ?? undefined;
      serviceDto.flexBoolean3 = object.flexBoolean3 ?? undefined;
      serviceDto.flexBoolean4 = object.flexBoolean4 ?? undefined;
      serviceDto.flexBoolean5 = object.flexBoolean5 ?? undefined;
      serviceDto.flexBoolean6 = object.flexBoolean6 ?? undefined;
      serviceDto.flexBoolean7 = object.flexBoolean7 ?? undefined;
      serviceDto.flexBoolean8 = object.flexBoolean8 ?? undefined;
      serviceDto.flexBoolean9 = object.flexBoolean9 ?? undefined;
      serviceDto.flexFloat0 = object.flexFloat0 ?? undefined;
      serviceDto.flexFloat1 = object.flexFloat1 ?? undefined;
      serviceDto.flexFloat2 = object.flexFloat2 ?? undefined;
      serviceDto.flexFloat3 = object.flexFloat3 ?? undefined;
      serviceDto.flexFloat4 = object.flexFloat4 ?? undefined;
      serviceDto.flexFloat5 = object.flexFloat5 ?? undefined;
      serviceDto.flexFloat6 = object.flexFloat6 ?? undefined;
      serviceDto.flexFloat7 = object.flexFloat7 ?? undefined;
      serviceDto.flexFloat8 = object.flexFloat8 ?? undefined;
      serviceDto.flexFloat9 = object.flexFloat9 ?? undefined;
      serviceDto.flexInt0 = object.flexInt0 ?? undefined;
      serviceDto.flexInt1 = object.flexInt1 ?? undefined;
      serviceDto.flexInt2 = object.flexInt2 ?? undefined;
      serviceDto.flexInt3 = object.flexInt3 ?? undefined;
      serviceDto.flexInt4 = object.flexInt4 ?? undefined;
      serviceDto.flexInt5 = object.flexInt5 ?? undefined;
      serviceDto.flexInt6 = object.flexInt6 ?? undefined;
      serviceDto.flexInt7 = object.flexInt7 ?? undefined;
      serviceDto.flexInt8 = object.flexInt8 ?? undefined;
      serviceDto.flexInt9 = object.flexInt9 ?? undefined;
      serviceDto.flexString0 = object.flexString0 ?? undefined;
      serviceDto.flexString1 = object.flexString1 ?? undefined;
      serviceDto.flexString2 = object.flexString2 ?? undefined;
      serviceDto.flexString3 = object.flexString3 ?? undefined;
      serviceDto.flexString4 = object.flexString4 ?? undefined;
      serviceDto.flexString5 = object.flexString5 ?? undefined;
      serviceDto.flexString6 = object.flexString6 ?? undefined;
      serviceDto.flexString7 = object.flexString7 ?? undefined;
      serviceDto.flexString8 = object.flexString8 ?? undefined;
      serviceDto.flexString9 = object.flexString9 ?? undefined;
      serviceDto.enabled = object.enabled ?? undefined;
      serviceDto.serviceId = object.serviceId ?? undefined;
      serviceDto.serviceDefRelId = object.serviceDefRelId ?? undefined;
      serviceDto.serviceTypeId = object.serviceTypeId ?? undefined;
    }

    return serviceDto;
  }
}
