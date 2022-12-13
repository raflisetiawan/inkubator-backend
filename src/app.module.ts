import { Module } from '@nestjs/common';
import { IncubatorModule } from './incubator/incubator.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [IncubatorModule, PrismaModule]
})
export class AppModule {}
