class Customer {
  address1?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  birthDate?: Date;
  createdAt?: Date;
  createdBy?: string;
  customerId?: number;
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
  totalOrders?: number;
  totalSpend?: number;
  totalTickets?: number;
  updatedAt?: Date;
  updatedBy?: string;
  userId?: number;

  static fromObject(object: any): Customer {
    const customer: Customer = {};

    if (object) {
      customer.address1 = object.address1 ?? undefined;
      customer.address2 = object.address2 ?? undefined;
      customer.address3 = object.address3 ?? undefined;
      customer.address4 = object.address4 ?? undefined;
      customer.address5 = object.address5 ?? undefined;
      customer.birthDate = object.birthDate
        ? new Date(object.birthDate)
        : undefined;
      customer.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      customer.createdBy = object.createdBy ?? undefined;
      customer.customerId = object.customerId ?? undefined;
      customer.email = object.email ?? undefined;
      customer.fullAddress = object.fullAddress ?? undefined;
      customer.fullName = object.fullName ?? undefined;
      customer.identificationNumber = object.identificationNumber ?? undefined;
      customer.lastName1 = object.lastName1 ?? undefined;
      customer.lastName2 = object.lastName2 ?? undefined;
      customer.name1 = object.name1 ?? undefined;
      customer.name2 = object.name2 ?? undefined;
      customer.name3 = object.name3 ?? undefined;
      customer.name4 = object.name4 ?? undefined;
      customer.phoneNumber = object.phoneNumber ?? undefined;
      customer.phonePrefix = object.phonePrefix ?? undefined;
      customer.sex = object.sex ?? undefined;
      customer.totalOrders = object.totalOrders ?? undefined;
      customer.totalSpend = object.totalSpend ?? undefined;
      customer.totalTickets = object.totalTickets ?? undefined;
      customer.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      customer.updatedBy = object.updatedBy ?? undefined;
      customer.userId = object.userId ?? undefined;
    }

    return customer;
  }
}
