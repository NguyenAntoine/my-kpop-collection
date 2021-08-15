import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IdolsService } from '../services/idols.service';
import { CreateIdolDto } from '../dto/create-idol.dto';
import { Idol } from '../schemas/idol.schema';
import { ResourceException } from '../../shared/resource.exception';
import { UpdateIdolDto } from '../dto/update-idol.dto';
import { Roles, Unprotected } from 'nest-keycloak-connect';

const IDOL_NOT_FOUND = 'Idol does not exist !';

@Controller('idols')
export class IdolsController {
  constructor(
    private readonly idolsService: IdolsService,
    private readonly resourceException: ResourceException,
  ) {}

  @Get()
  @Unprotected()
  async list(): Promise<Idol[]> {
    return this.idolsService.list();
  }

  @Get(':idolId')
  @Unprotected()
  async getCustomer(@Param('idolId') idolId) {
    const idol = await this.idolsService.get(idolId);
    this.resourceException.checkIfExists(idol, IDOL_NOT_FOUND);
    return idol;
  }

  @Post()
  @Roles('admin')
  async create(@Body() createIdolDto: CreateIdolDto) {
    await this.idolsService.create(createIdolDto);
  }

  @Put(':idolId')
  @Roles('admin')
  async update(@Param('idolId') idolId, @Body() updateIdolDto: UpdateIdolDto) {
    const idol = await this.idolsService.update(idolId, updateIdolDto);
    this.resourceException.checkIfExists(idol, IDOL_NOT_FOUND);
    return idol;
  }

  @Delete(':idolId')
  @Roles('admin')
  async delete(@Param('idolId') idolId) {
    const idol = await this.idolsService.delete(idolId);
    this.resourceException.checkIfExists(idol, IDOL_NOT_FOUND);
    return idol;
  }
}
