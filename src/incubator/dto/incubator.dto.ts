import { IsString, IsInt, IsNotEmpty, IsBoolean } from 'class-validator';

export class IncubatorDto{
    @IsInt()
    @IsNotEmpty()
    temperature: number

    @IsInt()
    @IsNotEmpty()
    humidity: number

    @IsString()
    @IsNotEmpty()
    ipAddress: string

    @IsBoolean()
    @IsNotEmpty()
    isFan: boolean
}