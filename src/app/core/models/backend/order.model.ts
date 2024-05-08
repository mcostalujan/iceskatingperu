class Order {
  createdAt?: Date;
  createdBy?: string;
  customerId?: number;
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
  orderDefRelId?: number;
  orderId?: number;
  updatedAt?: Date;
  updatedBy?: string;

  static fromObject(object: any): Order {
    const order: Order = {};

    if (object) {
      order.createdBy = object.createdBy ?? undefined;
      order.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      order.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      order.updatedBy = object.updatedBy ?? undefined;
      order.flexBoolean0 = object.flexBoolean0 ?? undefined;
      order.flexBoolean1 = object.flexBoolean1 ?? undefined;
      order.flexBoolean2 = object.flexBoolean2 ?? undefined;
      order.flexBoolean3 = object.flexBoolean3 ?? undefined;
      order.flexBoolean4 = object.flexBoolean4 ?? undefined;
      order.flexBoolean5 = object.flexBoolean5 ?? undefined;
      order.flexBoolean6 = object.flexBoolean6 ?? undefined;
      order.flexBoolean7 = object.flexBoolean7 ?? undefined;
      order.flexBoolean8 = object.flexBoolean8 ?? undefined;
      order.flexBoolean9 = object.flexBoolean9 ?? undefined;
      order.flexFloat0 = object.flexFloat0 ?? undefined;
      order.flexFloat1 = object.flexFloat1 ?? undefined;
      order.flexFloat2 = object.flexFloat2 ?? undefined;
      order.flexFloat3 = object.flexFloat3 ?? undefined;
      order.flexFloat4 = object.flexFloat4 ?? undefined;
      order.flexFloat5 = object.flexFloat5 ?? undefined;
      order.flexFloat6 = object.flexFloat6 ?? undefined;
      order.flexFloat7 = object.flexFloat7 ?? undefined;
      order.flexFloat8 = object.flexFloat8 ?? undefined;
      order.flexFloat9 = object.flexFloat9 ?? undefined;
      order.flexInt0 = object.flexInt0 ?? undefined;
      order.flexInt1 = object.flexInt1 ?? undefined;
      order.flexInt2 = object.flexInt2 ?? undefined;
      order.flexInt3 = object.flexInt3 ?? undefined;
      order.flexInt4 = object.flexInt4 ?? undefined;
      order.flexInt5 = object.flexInt5 ?? undefined;
      order.flexInt6 = object.flexInt6 ?? undefined;
      order.flexInt7 = object.flexInt7 ?? undefined;
      order.flexInt8 = object.flexInt8 ?? undefined;
      order.flexInt9 = object.flexInt9 ?? undefined;
      order.flexString0 = object.flexString0 ?? undefined;
      order.flexString1 = object.flexString1 ?? undefined;
      order.flexString2 = object.flexString2 ?? undefined;
      order.flexString3 = object.flexString3 ?? undefined;
      order.flexString4 = object.flexString4 ?? undefined;
      order.flexString5 = object.flexString5 ?? undefined;
      order.flexString6 = object.flexString6 ?? undefined;
      order.flexString7 = object.flexString7 ?? undefined;
      order.flexString8 = object.flexString8 ?? undefined;
      order.flexString9 = object.flexString9 ?? undefined;
      order.orderId = object.orderId ?? undefined;
      order.orderDefRelId = object.orderDefRelId ?? undefined;
      order.customerId = object.customerId ?? undefined;
    }

    return order;
  }
}
