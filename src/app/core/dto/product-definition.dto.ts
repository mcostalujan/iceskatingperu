class ProductDefinitionDTO {
  productDefId?: string;
  productTypeId?: string;
  productDefRelId?: string;
  columnDescription?: string;
  columnName?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  enabled?: string;

  static fromObject(object: any): ProductDefinitionDTO {
    const productDef: ProductDefinitionDTO = {};

    if (object) {
      productDef.productDefId = object.productDefId || undefined;
      productDef.productTypeId = object.productTypeId || undefined;
      productDef.productDefRelId = object.productDefRelId || undefined;
      productDef.columnDescription = object.columnDescription || undefined;
      productDef.columnName = object.columnName || undefined;
      productDef.createdAt = object.createdAt || undefined;
      productDef.createdBy = object.createdBy || undefined;
      productDef.updatedAt = object.updatedAt || undefined;
      productDef.updatedBy = object.updatedBy || undefined;
      productDef.enabled = object.enabled || undefined;
    }

    return productDef;
  }
}
