class ProductDto {
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  flexBoolean0?: string;
  flexBoolean1?: string;
  flexBoolean2?: string;
  flexBoolean3?: string;
  flexBoolean4?: string;
  flexBoolean5?: string;
  flexBoolean6?: string;
  flexBoolean7?: string;
  flexBoolean8?: string;
  flexBoolean9?: string;
  flexFloat0?: string;
  flexFloat1?: string;
  flexFloat2?: string;
  flexFloat3?: string;
  flexFloat4?: string;
  flexFloat5?: string;
  flexFloat6?: string;
  flexFloat7?: string;
  flexFloat8?: string;
  flexFloat9?: string;
  flexInt0?: string;
  flexInt1?: string;
  flexInt2?: string;
  flexInt3?: string;
  flexInt4?: string;
  flexInt5?: string;
  flexInt6?: string;
  flexInt7?: string;
  flexInt8?: string;
  flexInt9?: string;
  flexString0?: string;
  flexString1?: string;
  flexString2?: string;
  flexString3?: string;
  flexString4?: string;
  flexString5?: string;
  flexString6?: string;
  flexString7?: string;
  flexString8?: string;
  flexString9?: string;
  productId?: string;
  productDefRelId?: string;
  productTypeId?: string;

  static fromObject(object: any): ProductDto {
    const productDto: ProductDto = {};

    if (object) {
      productDto.createdAt = object.createdAt ?? undefined;
      productDto.createdBy = object.createdBy ?? undefined;
      productDto.updatedAt = object.updatedAt ?? undefined;
      productDto.updatedBy = object.updatedBy ?? undefined;
      productDto.flexBoolean0 = object.flexBoolean0 ?? undefined;
      productDto.flexBoolean1 = object.flexBoolean1 ?? undefined;
      productDto.flexBoolean2 = object.flexBoolean2 ?? undefined;
      productDto.flexBoolean3 = object.flexBoolean3 ?? undefined;
      productDto.flexBoolean4 = object.flexBoolean4 ?? undefined;
      productDto.flexBoolean5 = object.flexBoolean5 ?? undefined;
      productDto.flexBoolean6 = object.flexBoolean6 ?? undefined;
      productDto.flexBoolean7 = object.flexBoolean7 ?? undefined;
      productDto.flexBoolean8 = object.flexBoolean8 ?? undefined;
      productDto.flexBoolean9 = object.flexBoolean9 ?? undefined;
      productDto.flexFloat0 = object.flexFloat0 ?? undefined;
      productDto.flexFloat1 = object.flexFloat1 ?? undefined;
      productDto.flexFloat2 = object.flexFloat2 ?? undefined;
      productDto.flexFloat3 = object.flexFloat3 ?? undefined;
      productDto.flexFloat4 = object.flexFloat4 ?? undefined;
      productDto.flexFloat5 = object.flexFloat5 ?? undefined;
      productDto.flexFloat6 = object.flexFloat6 ?? undefined;
      productDto.flexFloat7 = object.flexFloat7 ?? undefined;
      productDto.flexFloat8 = object.flexFloat8 ?? undefined;
      productDto.flexFloat9 = object.flexFloat9 ?? undefined;
      productDto.flexInt0 = object.flexInt0 ?? undefined;
      productDto.flexInt1 = object.flexInt1 ?? undefined;
      productDto.flexInt2 = object.flexInt2 ?? undefined;
      productDto.flexInt3 = object.flexInt3 ?? undefined;
      productDto.flexInt4 = object.flexInt4 ?? undefined;
      productDto.flexInt5 = object.flexInt5 ?? undefined;
      productDto.flexInt6 = object.flexInt6 ?? undefined;
      productDto.flexInt7 = object.flexInt7 ?? undefined;
      productDto.flexInt8 = object.flexInt8 ?? undefined;
      productDto.flexInt9 = object.flexInt9 ?? undefined;
      productDto.flexString0 = object.flexString0 ?? undefined;
      productDto.flexString1 = object.flexString1 ?? undefined;
      productDto.flexString2 = object.flexString2 ?? undefined;
      productDto.flexString3 = object.flexString3 ?? undefined;
      productDto.flexString4 = object.flexString4 ?? undefined;
      productDto.flexString5 = object.flexString5 ?? undefined;
      productDto.flexString6 = object.flexString6 ?? undefined;
      productDto.flexString7 = object.flexString7 ?? undefined;
      productDto.flexString8 = object.flexString8 ?? undefined;
      productDto.flexString9 = object.flexString9 ?? undefined;
      productDto.productId = object.productId ?? undefined;
      productDto.productDefRelId = object.productDefRelId ?? undefined;
      productDto.productTypeId = object.productTypeId ?? undefined;
    }

    return productDto;
  }
}
