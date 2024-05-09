export class OrderDefRelease {
  createdAt?: Date;
  createdBy?: string;
  enabled?: boolean;
  orderDefRelId?: number;
  releaseNumber?: number;
  updatedAt?: Date;
  updatedBy?: string;

  static fromObject(object: any): OrderDefRelease {
    const orderDefRel: OrderDefRelease = {};

    if (object) {
      orderDefRel.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      orderDefRel.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      orderDefRel.updatedBy = object.updatedBy ?? undefined;
      orderDefRel.createdBy = object.createdBy ?? undefined;
      orderDefRel.enabled = object.enabled ?? undefined;
      orderDefRel.orderDefRelId = object.productDefRelId ?? undefined;
      orderDefRel.releaseNumber = object.releaseNumber ?? undefined;
    }
    return orderDefRel;
  }
}
