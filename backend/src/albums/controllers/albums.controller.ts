import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlbumsService } from '../services/albums.service';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { Album } from '../schemas/album.schema';
import { ResourceException } from '../../shared/resource.exception';
import { UpdateAlbumDto } from '../dto/update-album.dto';
import { Roles, Unprotected } from 'nest-keycloak-connect';

const ALBUM_NOT_FOUND = 'Album does not exist !';

@Controller('albums')
export class AlbumsController {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly resourceException: ResourceException,
  ) {}

  @Get()
  @Unprotected()
  async list(): Promise<Album[]> {
    return this.albumsService.list();
  }

  @Get(':albumId')
  @Unprotected()
  async getCustomer(@Param('albumId') albumId) {
    const album = await this.albumsService.get(albumId);
    this.resourceException.checkIfExists(album, ALBUM_NOT_FOUND);
    return album;
  }

  @Post()
  @Roles('admin')
  async create(@Body() createAlbumDto: CreateAlbumDto) {
    await this.albumsService.create(createAlbumDto);
  }

  @Put(':albumId')
  @Roles('admin')
  async update(
    @Param('albumId') albumId,
    @Body() updateAlbumDto: UpdateAlbumDto,
  ) {
    const album = await this.albumsService.update(albumId, updateAlbumDto);
    this.resourceException.checkIfExists(album, ALBUM_NOT_FOUND);
    return album;
  }

  @Delete(':albumId')
  @Roles('admin')
  async delete(@Param('albumId') albumId) {
    const album = await this.albumsService.delete(albumId);
    this.resourceException.checkIfExists(album, ALBUM_NOT_FOUND);
    return album;
  }
}
