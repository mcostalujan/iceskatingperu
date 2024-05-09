export class CustomerDto {
  address1?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  birthstring?: string;
  createdAt?: string;
  createdBy?: string;
  customerId?: string;
  email?: string;
  fullAddress?: string;
  fullName?: string;
  identificationNumber?: string;
  lastName1?: string;
  lastName2?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;
  phoneNumber?: string;
  phonePrefix?: string;
  sex?: string;
  totalOrders?: string;
  totalSpend?: string;
  totalTickets?: string;
  updatedAt?: string;
  updatedBy?: string;
  userId?: string;

  static fromObject(object: any): CustomerDto {
    const customerDto: CustomerDto = {};

    if (object) {
      customerDto.address1 = object.address1 ?? undefined;
      customerDto.address2 = object.address2 ?? undefined;
      customerDto.address3 = object.address3 ?? undefined;
      customerDto.address4 = object.address4 ?? undefined;
      customerDto.address5 = object.address5 ?? undefined;
      customerDto.birthstring = object.birthstring ?? undefined;
      customerDto.createdAt = object.createdAt ?? undefined;
      customerDto.createdBy = object.createdBy ?? undefined;
      customerDto.customerId = object.customerId ?? undefined;
      customerDto.email = object.email ?? undefined;
      customerDto.fullAddress = object.fullAddress ?? undefined;
      customerDto.fullName = object.fullName ?? undefined;
      customerDto.identificationNumber = object.identificationNumber ?? undefined;
      customerDto.lastName1 = object.lastName1 ?? undefined;
      customerDto.lastName2 = object.lastName2 ?? undefined;
      customerDto.name1 = object.name1 ?? undefined;
      customerDto.name2 = object.name2 ?? undefined;
      customerDto.name3 = object.name3 ?? undefined;
      customerDto.name4 = object.name4 ?? undefined;
      customerDto.phoneNumber = object.phoneNumber ?? undefined;
      customerDto.phonePrefix = object.phonePrefix ?? undefined;
      customerDto.sex = object.sex ?? undefined;
      customerDto.totalOrders = object.totalOrders ?? undefined;
      customerDto.totalSpend = object.totalSpend ?? undefined;
      customerDto.totalTickets = object.totalTickets ?? undefined;
      customerDto.updatedAt = object.updatedAt ?? undefined;
      customerDto.updatedBy = object.updatedBy ?? undefined;
      customerDto.userId = object.userId ?? undefined;
    }

    return customerDto;
  }
}
