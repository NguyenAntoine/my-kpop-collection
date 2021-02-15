import { Body, Controller, Get, Post } from '@nestjs/common';
import { BandsService } from '../services/bands.service';
import { CreateBandDto } from '../dto/create-band.dto';
import { Band } from '../schemas/band.schema';

@Controller('bands')
export class BandsController {
  constructor(private readonly bandsService: BandsService) {}

  @Post()
  async create(@Body() createBandDto: CreateBandDto) {
    await this.bandsService.create(createBandDto);
  }

  @Get()
  async findAll(): Promise<Band[]> {
    return this.bandsService.findAll();
  }
}
