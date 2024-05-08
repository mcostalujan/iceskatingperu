class Service {
  createdBy?: string;
  createdAt?: Date;
  enabled?: boolean;
  flexBoolean0?: boolean;
  flexBoolean1?: boolean;
  flexBoolean2?: boolean;
  flexBoolean3?: boolean;
  flexBoolean4?: boolean;
  flexBoolean5?: boolean;
  flexBoolean6?: boolean;
  flexBoolean7?: boolean;
  flexBoolean8?: boolean;
  flexBoolean9?: boolean;
  flexInt0?: number;
  flexInt1?: number;
  flexInt2?: number;
  flexInt3?: number;
  flexInt4?: number;
  flexInt5?: number;
  flexInt6?: number;
  flexInt7?: number;
  flexInt8?: number;
  flexInt9?: number;
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
  updatedAt?: Date;
  updatedBy?: string;
  flexFloat0?: number;
  flexFloat1?: number;
  flexFloat2?: number;
  flexFloat3?: number;
  flexFloat4?: number;
  flexFloat5?: number;
  flexFloat6?: number;
  flexFloat7?: number;
  flexFloat8?: number;
  flexFloat9?: number;
  serviceDefRelId?: number;
  serviceId?: number;
  serviceTypeId?: number;

  static fromObject(object: any): Service {
    const service: Service = {};

    if (object) {
      service.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      service.createdBy = object.createdBy ?? undefined;
      service.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      service.updatedBy = object.updatedBy ?? undefined;
      service.flexBoolean0 = object.flexBoolean0 ?? undefined;
      service.flexBoolean1 = object.flexBoolean1 ?? undefined;
      service.flexBoolean2 = object.flexBoolean2 ?? undefined;
      service.flexBoolean3 = object.flexBoolean3 ?? undefined;
      service.flexBoolean4 = object.flexBoolean4 ?? undefined;
      service.flexBoolean5 = object.flexBoolean5 ?? undefined;
      service.flexBoolean6 = object.flexBoolean6 ?? undefined;
      service.flexBoolean7 = object.flexBoolean7 ?? undefined;
      service.flexBoolean8 = object.flexBoolean8 ?? undefined;
      service.flexBoolean9 = object.flexBoolean9 ?? undefined;
      service.flexFloat0 = object.flexFloat0 ?? undefined;
      service.flexFloat1 = object.flexFloat1 ?? undefined;
      service.flexFloat2 = object.flexFloat2 ?? undefined;
      service.flexFloat3 = object.flexFloat3 ?? undefined;
      service.flexFloat4 = object.flexFloat4 ?? undefined;
      service.flexFloat5 = object.flexFloat5 ?? undefined;
      service.flexFloat6 = object.flexFloat6 ?? undefined;
      service.flexFloat7 = object.flexFloat7 ?? undefined;
      service.flexFloat8 = object.flexFloat8 ?? undefined;
      service.flexFloat9 = object.flexFloat9 ?? undefined;
      service.flexInt0 = object.flexInt0 ?? undefined;
      service.flexInt1 = object.flexInt1 ?? undefined;
      service.flexInt2 = object.flexInt2 ?? undefined;
      service.flexInt3 = object.flexInt3 ?? undefined;
      service.flexInt4 = object.flexInt4 ?? undefined;
      service.flexInt5 = object.flexInt5 ?? undefined;
      service.flexInt6 = object.flexInt6 ?? undefined;
      service.flexInt7 = object.flexInt7 ?? undefined;
      service.flexInt8 = object.flexInt8 ?? undefined;
      service.flexInt9 = object.flexInt9 ?? undefined;
      service.flexString0 = object.flexString0 ?? undefined;
      service.flexString1 = object.flexString1 ?? undefined;
      service.flexString2 = object.flexString2 ?? undefined;
      service.flexString3 = object.flexString3 ?? undefined;
      service.flexString4 = object.flexString4 ?? undefined;
      service.flexString5 = object.flexString5 ?? undefined;
      service.flexString6 = object.flexString6 ?? undefined;
      service.flexString7 = object.flexString7 ?? undefined;
      service.flexString8 = object.flexString8 ?? undefined;
      service.flexString9 = object.flexString9 ?? undefined;
      service.enabled = object.enabled ?? undefined;
      service.serviceId = object.serviceId ?? undefined;
      service.serviceDefRelId = object.serviceDefRelId ?? undefined;
      service.serviceTypeId = object.serviceTypeId ?? undefined;
    }

    return service;
  }
}
