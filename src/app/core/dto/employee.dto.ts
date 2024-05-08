class EmployeeDto {
  employeeId?: string;
  updatedAt?: string;
  createdAt?: string;
  updatedBy?: string;
  identificationNumber?: string;
  createdBy?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  userId?: string;

  static fromObject(object: any): EmployeeDto {
    const employeeDto: EmployeeDto = {};

    if (object) {
      employeeDto.employeeId = object.employeeId ?? undefined;
      employeeDto.identificationNumber =
        object.identificationNumber ?? undefined;
      employeeDto.email = object.email ?? undefined;
      employeeDto.firstName = object.firstName ?? undefined;
      employeeDto.lastName = object.lastName ?? undefined;
      employeeDto.createdAt = object.createdAt ?? undefined;
      employeeDto.createdBy = object.createdBy ?? undefined;
      employeeDto.updatedAt = object.updatedAt ?? undefined;
      employeeDto.updatedBy = object.updatedBy ?? undefined;
      employeeDto.userId = object.userId ?? undefined;
    }

    return employeeDto;
  }
}
