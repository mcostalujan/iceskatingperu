class ProductDefReleaseDto {
  createdAt?: string;
  updatedAt?: string;
  updatedBy?: string;
  createdBy?: string;
  enabled?: string;
  productDefRelId?: string;
  productTypeId?: string;
  releaseNumber?: string;

  static fromObject(json: any): ProductDefReleaseDto {
    const productDefRel = new ProductDefReleaseDto();
    productDefRel.createdAt = json.createdAt ?? undefined;
    productDefRel.updatedAt = json.updatedAt ?? undefined;
    productDefRel.updatedBy = json.updatedBy ?? undefined;
    productDefRel.createdBy = json.createdBy ?? undefined;
    productDefRel.enabled = json.enabled ?? undefined;
    productDefRel.productDefRelId = json.productDefRelId ?? undefined;
    productDefRel.productTypeId = json.productTypeId ?? undefined;
    productDefRel.releaseNumber = json.releaseNumber ?? undefined;
    return productDefRel;
  }
}
