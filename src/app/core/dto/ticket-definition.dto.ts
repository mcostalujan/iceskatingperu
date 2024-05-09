export class TicketDefinitionDto {
  ticketDefId?: string;
  ticketTypeId?: string;
  ticketDefRelId?: string;
  columnDescription?: string;
  columnName?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  enabled?: string;

  static fromObject(object: any): TicketDefinitionDto {
    const ticketDefDto: TicketDefinitionDto = {};

    if (object) {
      ticketDefDto.ticketDefId = object.ticketDefId ?? undefined;
      ticketDefDto.ticketTypeId = object.ticketTypeId ?? undefined;
      ticketDefDto.ticketDefRelId = object.ticketDefRelId ?? undefined;
      ticketDefDto.columnDescription = object.columnDescription ?? undefined;
      ticketDefDto.columnName = object.columnName ?? undefined;
      ticketDefDto.createdAt = object.createdAt ?? undefined;
      ticketDefDto.createdBy = object.createdBy ?? undefined;
      ticketDefDto.updatedAt = object.updatedAt ?? undefined;
      ticketDefDto.updatedBy = object.updatedBy ?? undefined;
      ticketDefDto.enabled = object.enabled ?? undefined;
    }

    return ticketDefDto;
  }
}
