class TicketDefRelease {
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  enabled?: boolean;
  releaseNumber?: number;
  ticketDefRelId?: number;
  ticketTypeId?: number;

  static fromObject(object: any): TicketDefRelease {
    const ticketDefRelease: TicketDefRelease = {};

    if (object) {
      ticketDefRelease.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      ticketDefRelease.createdBy = object.createdBy ?? undefined;
      ticketDefRelease.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      ticketDefRelease.updatedBy = object.updatedBy ?? undefined;
      ticketDefRelease.enabled = object.enabled ?? undefined;
      ticketDefRelease.releaseNumber = object.releaseNumber ?? undefined;
      ticketDefRelease.ticketDefRelId = object.ticketDefRelId ?? undefined;
      ticketDefRelease.ticketTypeId = object.ticketTypeId ?? undefined;
    }

    return ticketDefRelease;
  }
}
