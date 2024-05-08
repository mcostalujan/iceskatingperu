class OrderDefReleaseDto {
  createdAt?: string;
  createdBy?: string;
  enabled?: string;
  orderDefRelId?: string;
  releaseNumber?: string;
  updatedAt?: string;
  updatedBy?: string;

  static fromObject(object: any): OrderDefReleaseDto {
    const orderDefRelDto: OrderDefReleaseDto = {};

    if (object) {
      orderDefRelDto.createdAt = object.createdAt ?? undefined;
      orderDefRelDto.updatedAt = object.updatedAt ?? undefined;
      orderDefRelDto.updatedBy = object.updatedBy ?? undefined;
      orderDefRelDto.createdBy = object.createdBy ?? undefined;
      orderDefRelDto.enabled = object.enabled ?? undefined;
      orderDefRelDto.orderDefRelId = object.productDefRelId ?? undefined;
      orderDefRelDto.releaseNumber = object.releaseNumber ?? undefined;
    }
    return orderDefRelDto;
  }
}
