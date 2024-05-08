class TicketType {
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  enabled?: boolean;
  identifierCode?: string;
  identifierDescription?: string;
  ticketTypeId?: number;

  static fromObject(object: any): TicketType {
    const ticketType: TicketType = {};

    if (object) {
      ticketType.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      ticketType.createdBy = object.createdBy ?? undefined;
      ticketType.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      ticketType.updatedBy = object.updatedBy ?? undefined;
      ticketType.enabled = object.enabled ?? undefined;
      ticketType.identifierCode = object.identifierCode ?? undefined;
      ticketType.identifierDescription =
        object.identifierDescription ?? undefined;
      ticketType.ticketTypeId = object.ticketTypeId ?? undefined;
    }

    return ticketType;
  }
}
