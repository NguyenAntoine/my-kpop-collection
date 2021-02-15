import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Band, BandDocument } from '../schemas/band.schema';
import { Model } from 'mongoose';
import { CreateBandDto } from '../dto/create-band.dto';

@Injectable()
export class BandsService {
  constructor(@InjectModel(Band.name) private bandModel: Model<BandDocument>) {}

  async create(createBandDto: CreateBandDto): Promise<Band> {
    const createdBand = new this.bandModel(createBandDto);
    return createdBand.save();
  }

  async findAll(): Promise<Band[]> {
    return this.bandModel.find().exec();
  }
}
