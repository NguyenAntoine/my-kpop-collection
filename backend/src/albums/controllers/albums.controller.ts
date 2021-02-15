import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlbumsService } from '../services/albums.service';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { Album } from '../schemas/album.schema';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  async create(@Body() createAlbumDto: CreateAlbumDto) {
    await this.albumsService.create(createAlbumDto);
  }

  @Get()
  async findAll(): Promise<Album[]> {
    return this.albumsService.findAll();
  }
}
