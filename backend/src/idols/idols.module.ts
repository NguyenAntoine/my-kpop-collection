import { Module } from '@nestjs/common';
import { IdolsController } from './controllers/idols.controller';
import { IdolsService } from './services/idols.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Idol, IdolSchema } from './schemas/idol.schema';
import { ResourceException } from '../shared/resource.exception';
import { Band, BandSchema } from '../bands/schemas/band.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Idol.name, schema: IdolSchema },
      { name: Band.name, schema: BandSchema },
    ]),
  ],
  controllers: [IdolsController],
  providers: [IdolsService, ResourceException],
})
export class IdolsModule {}
