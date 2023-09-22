// company.dto.ts

export class CreateCompanyDto {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  website: string;
  departments: string[];
  numberOfUsers: number | null;
}

export class UpdateCompanyDto {
  name?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  password?: string;
  website?: string;
  departments?: string[];
  numberOfUsers?: number | null;
}
