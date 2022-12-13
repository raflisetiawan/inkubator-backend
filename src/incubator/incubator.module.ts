import { Module } from '@nestjs/common';
import { IncubatorController } from './incubator.controller';
import { IncubatorService } from './incubator.service';

@Module({
    providers: [IncubatorService],
    controllers: [IncubatorController],
    exports: [IncubatorService]
})
export class IncubatorModule {}
