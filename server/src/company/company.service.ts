import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async getCompanies() {
    const user = await this.prisma.user.findUnique({
      where: { id: 1 },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return await this.prisma.company.findMany();
  }
}
