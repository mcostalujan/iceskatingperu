class ProductTypeDto {
  createdAt?: string;
  updatedAt?: string;
  updatedBy?: string;
  createdBy?: string;
  enabled?: string;
  identifierCode?: string;
  identifierDescription?: string;
  productTypeId?: string;

  static fromObject(object: any): ProductTypeDto {
    const productTypeDto: ProductTypeDto = {};

    if (object) {
      productTypeDto.createdAt = object.createdAt ?? undefined;
      productTypeDto.updatedAt = object.updatedAt ?? undefined;
      productTypeDto.updatedBy = object.updatedBy ?? undefined;
      productTypeDto.createdBy = object.createdBy ?? undefined;
      productTypeDto.enabled = object.enabled ?? undefined;
      productTypeDto.identifierCode = object.identifierCode ?? undefined;
      productTypeDto.identifierDescription =
        object.identifierDescription ?? undefined;
      productTypeDto.productTypeId = object.productTypeId ?? undefined;
    }
    return productTypeDto;
  }
}
