import { Controller, Get, Param } from '@nestjs/common';
import { IncubatorService } from './incubator.service';
import { Incubator as IncubatorModel } from '@prisma/client';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { UpdateIncubatorDto } from './update-incubator.dto';

@Controller('incubator')
export class IncubatorController {
    constructor(private readonly incubatorService: IncubatorService,) {}
    @Get()
    findAll(): string {
      return 'This action returns all cats';
    }

    @Get(':id')
    async getPostById(@Param('id') id: string): Promise<IncubatorModel> {
      return this.incubatorService.incubator({ id: Number(id) });
    }

    @Post('create')
  async createIncubator(
    @Body() postData: { temperature: number; humidity: number; isFan: boolean,  ipAddress: string, },
  ): Promise<IncubatorModel> {
    const { temperature, humidity, isFan, ipAddress } = postData;
    return this.incubatorService.createIncubator({
      temperature,
      humidity,
      isFan,
      ipAddress
    });
  }
  @Put('update/:id')
  async updateIncubator(@Param('id') id: string, @Body() updateIncubatorDto: UpdateIncubatorDto): Promise<IncubatorModel> {
    return this.incubatorService.updateIncubator({
      where: { id: Number(id) },
      data: updateIncubatorDto,
    });
  }

  @Delete('remove/:id')
  async deletePost(@Param('id') id: string): Promise<IncubatorModel> {
    return this.incubatorService.deleteIncbator({ id: Number(id) });
  }
}
