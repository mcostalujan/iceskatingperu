export class TicketDefReleaseDto {
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  enabled?: string;
  releaseNumber?: string;
  ticketDefRelId?: string;
  ticketTypeId?: string;

  static fromObject(object: any): TicketDefReleaseDto {
    const ticketDefReleaseDto: TicketDefReleaseDto = {};

    if (object) {
      ticketDefReleaseDto.createdAt = object.createdAt ?? undefined;
      ticketDefReleaseDto.createdBy = object.createdBy ?? undefined;
      ticketDefReleaseDto.updatedAt = object.updatedAt ?? undefined;
      ticketDefReleaseDto.updatedBy = object.updatedBy ?? undefined;
      ticketDefReleaseDto.enabled = object.enabled ?? undefined;
      ticketDefReleaseDto.releaseNumber = object.releaseNumber ?? undefined;
      ticketDefReleaseDto.ticketDefRelId = object.ticketDefRelId ?? undefined;
      ticketDefReleaseDto.ticketTypeId = object.ticketTypeId ?? undefined;
    }

    return ticketDefReleaseDto;
  }
}
