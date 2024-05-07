class ProductDefRelease {
  createdAt?: Date;
  updatedAt?: Date;
  updatedBy?: string;
  createdBy?: string;
  enabled?: boolean;
  productDefRelId?: number;
  productTypeId?: number;
  releaseNumber?: number;

  static fromObject(json: any): ProductDefRelease {
    const productDefRel = new ProductDefRelease();
    productDefRel.createdAt = json.createdAt
      ? new Date(json.createdAt)
      : undefined;
    productDefRel.updatedAt = json.updatedAt
      ? new Date(json.updatedAt)
      : undefined;
    productDefRel.updatedBy = json.updatedBy ?? undefined;
    productDefRel.createdBy = json.createdBy ?? undefined;
    productDefRel.enabled = json.enabled ?? undefined;
    productDefRel.productDefRelId = json.productDefRelId ?? undefined;
    productDefRel.productTypeId = json.productTypeId ?? undefined;
    productDefRel.releaseNumber = json.releaseNumber ?? undefined;
    return productDefRel;
  }
}
