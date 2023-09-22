// company.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Company } from './schema/company.model';
import { CreateCompanyDto, UpdateCompanyDto } from './schema/company.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(createCompanyDto.password, 10);
    const createdCompany = new this.companyModel({
      _id: new mongoose.Types.ObjectId(),
      ...createCompanyDto,
      password: hashedPassword,
    });
    return createdCompany.save();
  }

  async updateCompany(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const objectId = new mongoose.Types.ObjectId(id);
    const updatedCompany = await this.companyModel.findByIdAndUpdate(
      objectId,
      updateCompanyDto,
      { new: true },
    );
    if (!updatedCompany) {
      throw new NotFoundException('Company not found');
    }
    return updatedCompany;
  }

  async deleteCompany(id: string): Promise<void> {
    const objectId = new mongoose.Types.ObjectId(id);
    const deletedCompany = await this.companyModel.findByIdAndRemove(objectId);
    if (!deletedCompany) {
      throw new NotFoundException('Company not found');
    }
  }

  async getCompanyById(id: string): Promise<Company> {
    const objectId = new mongoose.Types.ObjectId(id);
    const company = await this.companyModel.findById(objectId);
    if (!company) {
      throw new NotFoundException('Company not found');
    }
    return company;
  }

  async comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }
}
