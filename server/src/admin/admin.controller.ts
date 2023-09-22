import { Controller } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('admin')
export class AdminController {
  constructor(private prisma: PrismaService) {}

  async getCompanies() {
    return await this.prisma.company.findMany();
  }
}
