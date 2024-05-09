export class ProductDefReleaseDto {
  createdAt?: string;
  updatedAt?: string;
  updatedBy?: string;
  createdBy?: string;
  enabled?: string;
  productDefRelId?: string;
  productTypeId?: string;
  releaseNumber?: string;

  static fromObject(object: any): ProductDefReleaseDto {
    const productDefRelDto: ProductDefReleaseDto = {};

    if (object) {
      productDefRelDto.createdAt = object.createdAt ?? undefined;
      productDefRelDto.updatedAt = object.updatedAt ?? undefined;
      productDefRelDto.updatedBy = object.updatedBy ?? undefined;
      productDefRelDto.createdBy = object.createdBy ?? undefined;
      productDefRelDto.enabled = object.enabled ?? undefined;
      productDefRelDto.productDefRelId = object.productDefRelId ?? undefined;
      productDefRelDto.productTypeId = object.productTypeId ?? undefined;
      productDefRelDto.releaseNumber = object.releaseNumber ?? undefined;
    }
    return productDefRelDto;
  }
}
