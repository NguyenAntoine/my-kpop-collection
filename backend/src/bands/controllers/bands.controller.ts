import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BandsService } from '../services/bands.service';
import { CreateBandDto } from '../dto/create-band.dto';
import { Band } from '../schemas/band.schema';
import { UpdateBandDto } from '../dto/update-band.dto';
import { ResourceException } from '../../shared/resource.exception';
import { Roles, Unprotected } from 'nest-keycloak-connect';

const BAND_NOT_FOUND = 'Band does not exist !';

@Controller('bands')
export class BandsController {
  constructor(
    private readonly bandsService: BandsService,
    private readonly resourceException: ResourceException,
  ) {}

  @Get()
  @Unprotected()
  async list(): Promise<Band[]> {
    return this.bandsService.list();
  }

  @Get(':bandId')
  @Unprotected()
  async getCustomer(@Param('bandId') bandId) {
    const band = await this.bandsService.get(bandId);
    this.resourceException.checkIfExists(band, BAND_NOT_FOUND);
    return band;
  }

  @Post()
  @Roles('admin')
  async create(@Body() createBandDto: CreateBandDto) {
    await this.bandsService.create(createBandDto);
  }

  @Put(':bandId')
  @Roles('admin')
  async update(@Param('bandId') bandId, @Body() updateBandDto: UpdateBandDto) {
    const band = await this.bandsService.update(bandId, updateBandDto);
    this.resourceException.checkIfExists(band, BAND_NOT_FOUND);
    return band;
  }

  @Delete(':bandId')
  @Roles('admin')
  async delete(@Param('bandId') bandId) {
    const band = await this.bandsService.delete(bandId);
    this.resourceException.checkIfExists(band, BAND_NOT_FOUND);
    return band;
  }
}
