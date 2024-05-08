class TicketDefinition {
  ticketDefId?: number;
  ticketTypeId?: number;
  ticketDefRelId?: number;
  columnDescription?: string;
  columnName?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  enabled?: boolean;

  static fromObject(object: any): TicketDefinition {
    const ticketDef: TicketDefinition = {};

    if (object) {
      ticketDef.ticketDefId = object.ticketDefId ?? undefined;
      ticketDef.ticketTypeId = object.ticketTypeId ?? undefined;
      ticketDef.ticketDefRelId = object.ticketDefRelId ?? undefined;
      ticketDef.columnDescription = object.columnDescription ?? undefined;
      ticketDef.columnName = object.columnName ?? undefined;
      ticketDef.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      ticketDef.createdBy = object.createdBy ?? undefined;
      ticketDef.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      ticketDef.updatedBy = object.updatedBy ?? undefined;
      ticketDef.enabled = object.enabled ?? undefined;
    }

    return ticketDef;
  }
}
