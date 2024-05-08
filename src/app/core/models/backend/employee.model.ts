class Employee {
  employeeId?: number;
  updatedAt?: Date;
  createdAt?: Date;
  updatedBy?: string;
  identificationNumber?: string;
  createdBy?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  userId?: number;

  static fromObject(object: any): Employee {
    const employee: Employee = {};

    if (object) {
      employee.employeeId = object.employeeId ?? undefined;
      employee.identificationNumber = object.identificationNumber ?? undefined;
      employee.email = object.email ?? undefined;
      employee.firstName = object.firstName ?? undefined;
      employee.lastName = object.lastName ?? undefined;
      employee.createdAt = object.createdAt
        ? new Date(object.createdAt)
        : undefined;
      employee.createdBy = object.createdBy ?? undefined;
      employee.updatedAt = object.updatedAt
        ? new Date(object.updatedAt)
        : undefined;
      employee.updatedBy = object.updatedBy ?? undefined;
      employee.userId = object.userId ?? undefined;
    }

    return employee;
  }
}
