class OrderDefinitionDto {
  columnDescription?: string;
  columnName?: string;
  createdAt?: string;
  createdBy?: string;
  enabled?: string;
  orderDefId?: string;
  orderDefRel?: string;
  updatedAt?: string;
  updatedBy?: string;

  static fromObject(object: any): OrderDefinitionDto {
    const orderDefDto: OrderDefinitionDto = {};

    if (object) {
      orderDefDto.createdBy = object.createdBy ?? undefined;
      orderDefDto.createdAt = object.createdAt ?? undefined;
      orderDefDto.updatedAt = object.updatedAt ?? undefined;
      orderDefDto.updatedBy = object.updatedBy ?? undefined;
      orderDefDto.columnDescription = object.columnDescription ?? undefined;
      orderDefDto.columnName = object.columnName ?? undefined;
      orderDefDto.enabled = object.enabled ?? undefined;
      orderDefDto.orderDefId = object.orderDefId ?? undefined;
      orderDefDto.orderDefRel = object.orderDefRel ?? undefined;
    }

    return orderDefDto;
  }
}
