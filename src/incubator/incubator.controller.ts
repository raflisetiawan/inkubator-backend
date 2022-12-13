import { Controller, Get, Param } from '@nestjs/common';
import { IncubatorService } from './incubator.service';
import { Incubator as IncubatorModel } from '@prisma/client';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import {IncubatorDto} from './dto/incubator.dto';

@Controller('incubator')
export class IncubatorController {
    constructor(private readonly incubatorService: IncubatorService,) {}
    @Get()
    async getAllIncubator(){
      return this.incubatorService.incubators({})
    }

    @Get(':id')
    async getIncubatorById(@Param('id') id: string): Promise<IncubatorModel> {
      return this.incubatorService.incubator({ id: Number(id) });
    }

    @Post('create')
  async createIncubator(
    @Body() createIncubatorDto: IncubatorDto,
  ): Promise<IncubatorModel> {
    return this.incubatorService.createIncubator(createIncubatorDto);
  }

  @Put('update/:id')
  async updateIncubator(@Param('id') id: string, @Body() updateIncubatorDto: IncubatorDto): Promise<IncubatorModel> {
    return this.incubatorService.updateIncubator({
      where: { id: Number(id) },
      data: updateIncubatorDto,
    });
  }

  @Delete('remove/:id')
  async removeIncubator(@Param('id') id: string): Promise<IncubatorModel> {
    return this.incubatorService.deleteIncbator({ id: Number(id) });
  }
}
