class ProductType {
  createdAt?: Date;
  updatedAt?: Date;
  updatedBy?: string;
  createdBy?: string;
  enabled?: boolean;
  identifierCode?: string;
  identifierDescription?: string;
  productTypeId?: number;

  static fromObject(object: any): ProductType {
    const productType: ProductType = {};

    if (object) {
      productType.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      productType.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      productType.updatedBy = object.updatedBy ?? undefined;
      productType.createdBy = object.createdBy ?? undefined;
      productType.enabled = object.enabled ?? undefined;
      productType.identifierCode = object.identifierCode ?? undefined;
      productType.identifierDescription =
        object.identifierDescription ?? undefined;
      productType.productTypeId = object.productTypeId ?? undefined;
    }
    return productType;
  }
}
