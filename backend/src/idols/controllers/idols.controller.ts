import { Body, Controller, Get, Post } from '@nestjs/common';
import { IdolsService } from '../services/idols.service';
import { CreateIdolDto } from '../dto/create-idol.dto';
import { Idol } from '../schemas/idol.schema';

@Controller('idols')
export class IdolsController {
  constructor(private readonly idolsService: IdolsService) {}

  @Post()
  async create(@Body() createIdolDto: CreateIdolDto) {
    await this.idolsService.create(createIdolDto);
  }

  @Get()
  async findAll(): Promise<Idol[]> {
    return this.idolsService.findAll();
  }
}
