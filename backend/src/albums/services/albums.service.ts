import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album, AlbumDocument } from '../schemas/album.schema';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { UpdateAlbumDto } from '../dto/update-album.dto';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
  ) {}

  async list(): Promise<Album[]> {
    return this.albumModel.find().exec();
  }

  async get(albumId: string): Promise<Album> {
    return this.albumModel.findById(albumId).exec();
  }

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const createdAlbum = new this.albumModel(createAlbumDto);
    return createdAlbum.save();
  }

  async update(
    albumId: string,
    updateAlbumDto: UpdateAlbumDto,
  ): Promise<Album> {
    return this.albumModel.findByIdAndUpdate(albumId, updateAlbumDto, {
      new: true,
    });
  }

  async delete(albumId: string): Promise<Album> {
    return this.albumModel.findByIdAndRemove(albumId);
  }
}
