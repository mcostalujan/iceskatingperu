class OrderDefinition {
  columnDescription?: string;
  columnName?: string;
  createdAt?: Date;
  createdBy?: string;
  enabled?: boolean;
  orderDefId?: number;
  orderDefRel?: number;
  updatedAt?: Date;
  updatedBy?: string;

  static fromObject(object: any): OrderDefinition {
    const orderDef: OrderDefinition = {};

    if (object) {
      orderDef.createdBy = object.createdBy ?? undefined;
      orderDef.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      orderDef.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      orderDef.updatedBy = object.updatedBy ?? undefined;
      orderDef.columnDescription = object.columnDescription ?? undefined;
      orderDef.columnName = object.columnName ?? undefined;
      orderDef.enabled = object.enabled ?? undefined;
      orderDef.orderDefId = object.orderDefId ?? undefined;
      orderDef.orderDefRel = object.orderDefRel ?? undefined;
    }

    return orderDef;
  }
}
