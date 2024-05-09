export class TicketTypeDto {
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  enabled?: string;
  identifierCode?: string;
  identifierDescription?: string;
  ticketTypeId?: string;

  static fromObject(object: any): TicketTypeDto {
    const ticketTypeDto: TicketTypeDto = {};

    if (object) {
      ticketTypeDto.createdAt = object.createdAt ?? undefined;
      ticketTypeDto.createdBy = object.createdBy ?? undefined;
      ticketTypeDto.updatedAt = object.updatedAt ?? undefined;
      ticketTypeDto.updatedBy = object.updatedBy ?? undefined;
      ticketTypeDto.enabled = object.enabled ?? undefined;
      ticketTypeDto.identifierCode = object.identifierCode ?? undefined;
      ticketTypeDto.identifierDescription =
        object.identifierDescription ?? undefined;
      ticketTypeDto.ticketTypeId = object.ticketTypeId ?? undefined;
    }

    return ticketTypeDto;
  }
}
