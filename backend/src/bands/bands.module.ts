import { Module } from '@nestjs/common';
import { BandsController } from './controllers/bands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Band, BandSchema } from './schemas/band.schema';
import { BandsService } from './services/bands.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Band.name, schema: BandSchema }]),
  ],
  controllers: [BandsController],
  providers: [BandsService],
})
export class BandsModule {}
