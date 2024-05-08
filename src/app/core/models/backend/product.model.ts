class Product {
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  flexBoolean0?: boolean;
  flexBoolean1?: boolean;
  flexBoolean2?: boolean;
  flexBoolean3?: boolean;
  flexBoolean4?: boolean;
  flexBoolean5?: boolean;
  flexBoolean6?: boolean;
  flexBoolean7?: boolean;
  flexBoolean8?: boolean;
  flexBoolean9?: boolean;
  flexFloat0?: number;
  flexFloat1?: number;
  flexFloat2?: number;
  flexFloat3?: number;
  flexFloat4?: number;
  flexFloat5?: number;
  flexFloat6?: number;
  flexFloat7?: number;
  flexFloat8?: number;
  flexFloat9?: number;
  flexInt0?: number;
  flexInt1?: number;
  flexInt2?: number;
  flexInt3?: number;
  flexInt4?: number;
  flexInt5?: number;
  flexInt6?: number;
  flexInt7?: number;
  flexInt8?: number;
  flexInt9?: number;
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
  productId?: number;
  productDefRelId?: number;
  productTypeId?: number;

  static fromObject(object: any): Product {
    const product: Product = {};

    if (object) {
      product.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      product.createdBy = object.createdBy ?? undefined;
      product.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      product.updatedBy = object.updatedBy ?? undefined;
      product.flexBoolean0 = object.flexBoolean0 ?? undefined;
      product.flexBoolean1 = object.flexBoolean1 ?? undefined;
      product.flexBoolean2 = object.flexBoolean2 ?? undefined;
      product.flexBoolean3 = object.flexBoolean3 ?? undefined;
      product.flexBoolean4 = object.flexBoolean4 ?? undefined;
      product.flexBoolean5 = object.flexBoolean5 ?? undefined;
      product.flexBoolean6 = object.flexBoolean6 ?? undefined;
      product.flexBoolean7 = object.flexBoolean7 ?? undefined;
      product.flexBoolean8 = object.flexBoolean8 ?? undefined;
      product.flexBoolean9 = object.flexBoolean9 ?? undefined;
      product.flexFloat0 = object.flexFloat0 ?? undefined;
      product.flexFloat1 = object.flexFloat1 ?? undefined;
      product.flexFloat2 = object.flexFloat2 ?? undefined;
      product.flexFloat3 = object.flexFloat3 ?? undefined;
      product.flexFloat4 = object.flexFloat4 ?? undefined;
      product.flexFloat5 = object.flexFloat5 ?? undefined;
      product.flexFloat6 = object.flexFloat6 ?? undefined;
      product.flexFloat7 = object.flexFloat7 ?? undefined;
      product.flexFloat8 = object.flexFloat8 ?? undefined;
      product.flexFloat9 = object.flexFloat9 ?? undefined;
      product.flexInt0 = object.flexInt0 ?? undefined;
      product.flexInt1 = object.flexInt1 ?? undefined;
      product.flexInt2 = object.flexInt2 ?? undefined;
      product.flexInt3 = object.flexInt3 ?? undefined;
      product.flexInt4 = object.flexInt4 ?? undefined;
      product.flexInt5 = object.flexInt5 ?? undefined;
      product.flexInt6 = object.flexInt6 ?? undefined;
      product.flexInt7 = object.flexInt7 ?? undefined;
      product.flexInt8 = object.flexInt8 ?? undefined;
      product.flexInt9 = object.flexInt9 ?? undefined;
      product.flexString0 = object.flexString0 ?? undefined;
      product.flexString1 = object.flexString1 ?? undefined;
      product.flexString2 = object.flexString2 ?? undefined;
      product.flexString3 = object.flexString3 ?? undefined;
      product.flexString4 = object.flexString4 ?? undefined;
      product.flexString5 = object.flexString5 ?? undefined;
      product.flexString6 = object.flexString6 ?? undefined;
      product.flexString7 = object.flexString7 ?? undefined;
      product.flexString8 = object.flexString8 ?? undefined;
      product.flexString9 = object.flexString9 ?? undefined;
      product.productId = object.productId ?? undefined;
      product.productDefRelId = object.productDefRelId ?? undefined;
      product.productTypeId = object.productTypeId ?? undefined;
    }

    return product;
  }
}
