export class ProductDefinition {
  productDefId?: string;
  productTypeId?: string;
  productDefRelId?: string;
  columnDescription?: string;
  columnName?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  enabled?: string;

  static fromObject(object: any): ProductDefinition {
    const productDef: ProductDefinition = {};

    if (object) {
      productDef.productDefId = object.productDefId ?? undefined;
      productDef.productTypeId = object.productTypeId ?? undefined;
      productDef.productDefRelId = object.productDefRelId ?? undefined;
      productDef.columnDescription = object.columnDescription ?? undefined;
      productDef.columnName = object.columnName ?? undefined;
      productDef.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      productDef.createdBy = object.createdBy ?? undefined;
      productDef.updatedAt = object.updatedAt
        ? new Date(object.createdAt)
        : undefined;
      productDef.updatedBy = object.updatedBy ?? undefined;
      productDef.enabled = object.enabled ?? undefined;
    }
    return productDef;
  }
}
