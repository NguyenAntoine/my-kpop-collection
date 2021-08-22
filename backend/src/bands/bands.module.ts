import { Module } from '@nestjs/common';
import { BandsController } from './controllers/bands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Band, BandSchema } from './schemas/band.schema';
import { BandsService } from './services/bands.service';
import { ResourceException } from '../shared/resource.exception';
import { Idol, IdolSchema } from '../idols/schemas/idol.schema';
import { Album, AlbumSchema } from '../albums/schemas/album.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Band.name, schema: BandSchema },
      { name: Album.name, schema: AlbumSchema },
      { name: Idol.name, schema: IdolSchema },
    ]),
  ],
  controllers: [BandsController],
  providers: [BandsService, ResourceException],
})
export class BandsModule {}
