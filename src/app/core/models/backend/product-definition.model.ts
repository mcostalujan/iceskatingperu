class ProductDefinition {
  productDefId?: number;
  productTypeId?: number;
  productDefRelId?: number;
  columnDescription?: string;
  columnName?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  enabled?: boolean;

  static fromObject(json: any): ProductDefinition {
      const productDef = new ProductDefinition();
      productDef.productDefId = json.productDefId ?? undefined;
      productDef.productTypeId = json.productTypeId ?? undefined;
      productDef.productDefRelId = json.productDefRelId ?? undefined;
      productDef.columnDescription = json.columnDescription ?? undefined;
      productDef.columnName = json.columnName ?? undefined;
      productDef.createdAt = json.createdAt ? new Date(json.createdAt) : undefined;
      productDef.createdBy = json.createdBy ?? undefined;
      productDef.updatedAt = json.updatedAt ? new Date(json.updatedAt) : undefined;
      productDef.updatedBy = json.updatedBy ?? undefined;
      productDef.enabled = json.enabled ?? undefined;
      return productDef;
  }
}
