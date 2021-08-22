import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Band, BandDocument } from '../schemas/band.schema';
import { Model } from 'mongoose';
import { CreateBandDto } from '../dto/create-band.dto';
import { UpdateBandDto } from '../dto/update-band.dto';

@Injectable()
export class BandsService {
  constructor(@InjectModel(Band.name) private bandModel: Model<BandDocument>) {}

  async list(): Promise<Band[]> {
    // TODO : Cannot populate idols into bands array
    return this.bandModel.find().populate('idols').populate('albums').exec();
  }

  async get(bandId: string): Promise<Band> {
    return this.bandModel
      .findById(bandId)
      .populate('idols')
      .populate('albums')
      .exec();
  }

  async create(createBandDto: CreateBandDto): Promise<Band> {
    const createdBand = new this.bandModel(createBandDto);
    return createdBand.save();
  }

  async update(bandId: string, updateBandDto: UpdateBandDto): Promise<Band> {
    return this.bandModel.findByIdAndUpdate(bandId, updateBandDto, {
      new: true,
    });
  }

  async delete(bandId: string): Promise<Band> {
    return this.bandModel.findByIdAndRemove(bandId);
  }
}
