import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Incubator, Prisma } from '@prisma/client';

@Injectable()
export class IncubatorService {
    constructor(private prisma: PrismaService) {}

    async incubator(
      incubatorWhereUniqueInput: Prisma.IncubatorWhereUniqueInput,
    ): Promise<Incubator | null> {
      return this.prisma.incubator.findUnique({
        where: incubatorWhereUniqueInput,
      });
    }
  
    async incubators(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.IncubatorWhereUniqueInput;
      where?: Prisma.IncubatorWhereInput;
      orderBy?: Prisma.IncubatorOrderByWithRelationInput;
    }): Promise<Incubator[]> {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.incubator.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    }
  
    async createIncubator(data: Prisma.IncubatorCreateInput): Promise<Incubator> {
      return this.prisma.incubator.create({
        data,
      });
    }
  
    async updateIncubator(params: {
      where: Prisma.IncubatorWhereUniqueInput;
      data: Prisma.IncubatorUpdateInput;
    }): Promise<Incubator> {
      const { where, data } = params;
      return this.prisma.incubator.update({
        data,
        where,
      });
    }
  
    async deleteIncbator(where: Prisma.IncubatorWhereUniqueInput): Promise<Incubator> {
      return this.prisma.incubator.delete({
        where,
      });
    }
  }

