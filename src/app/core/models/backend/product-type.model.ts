class ProductType {
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  enabled?: boolean;
  identifierCode?: string;
  identifierDescription?: string;
  productTypeId?: number;

  static fromObject(json: any): ProductType {
    const productType = new ProductType();
    productType.createdAt = json.createdAt
      ? new Date(json.createdAt)
      : undefined;
    productType.updatedAt = json.updatedAt
      ? new Date(json.updatedAt)
      : undefined;
    productType.updatedBy = json.updatedBy ?? undefined;
    productType.createdBy = json.createdBy ?? undefined;
    productType.enabled = json.enabled ?? undefined;
    productType.identifierCode = json.identifierCode ?? undefined;
    productType.identifierDescription = json.identifierDescription ?? undefined;
    productType.productTypeId = json.productTypeId ?? undefined;
    return productType;
  }
}
