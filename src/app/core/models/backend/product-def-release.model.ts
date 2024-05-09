export class ProductDefRelease {
  createdAt?: Date;
  updatedAt?: Date;
  updatedBy?: string;
  createdBy?: string;
  enabled?: boolean;
  productDefRelId?: number;
  productTypeId?: number;
  releaseNumber?: number;

  static fromObject(object: any): ProductDefRelease {
    const productDefRel: ProductDefRelease = {};

    if (object) {
      productDefRel.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      productDefRel.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      productDefRel.updatedBy = object.updatedBy ?? undefined;
      productDefRel.createdBy = object.createdBy ?? undefined;
      productDefRel.enabled = object.enabled ?? undefined;
      productDefRel.productDefRelId = object.productDefRelId ?? undefined;
      productDefRel.productTypeId = object.productTypeId ?? undefined;
      productDefRel.releaseNumber = object.releaseNumber ?? undefined;
    }
    return productDefRel;
  }
}
