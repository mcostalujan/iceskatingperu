class ProductTypeDto {
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  enabled?: string;
  identifierCode?: string;
  identifierDescription?: string;
  productTypeId?: string;

  static fromObject(json: any): ProductTypeDto {
    const productType = new ProductTypeDto();
    productType.createdAt = json.createdAt ?? undefined;
    productType.updatedAt = json.updatedAt ?? undefined;
    productType.updatedBy = json.updatedBy ?? undefined;
    productType.createdBy = json.createdBy ?? undefined;
    productType.enabled = json.enabled ?? undefined;
    productType.identifierCode = json.identifierCode ?? undefined;
    productType.identifierDescription = json.identifierDescription ?? undefined;
    productType.productTypeId = json.productTypeId ?? undefined;
    return productType;
  }
}
