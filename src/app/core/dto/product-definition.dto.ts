export class ProductDefinitionDto {
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

  static fromObject(object: any): ProductDefinitionDto {
    const productDefDto: ProductDefinitionDto = {};

    if (object) {
      const productDefDto = new ProductDefinitionDto();
      productDefDto.productDefId = object.productDefId ?? undefined;
      productDefDto.productTypeId = object.productTypeId ?? undefined;
      productDefDto.productDefRelId = object.productDefRelId ?? undefined;
      productDefDto.columnDescription = object.columnDescription ?? undefined;
      productDefDto.columnName = object.columnName ?? undefined;
      productDefDto.createdAt = object.createdAt ?? undefined;
      productDefDto.createdBy = object.createdBy ?? undefined;
      productDefDto.updatedAt = object.updatedAt ?? undefined;
      productDefDto.updatedBy = object.updatedBy ?? undefined;
      productDefDto.enabled = object.enabled ?? undefined;
    }
    return productDefDto;
  }
}
