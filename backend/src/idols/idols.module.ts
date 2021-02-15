import { Module } from '@nestjs/common';
import { IdolsController } from './controllers/idols.controller';
import { IdolsService } from './services/idols.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Idol, IdolSchema } from './schemas/idol.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Idol.name, schema: IdolSchema }]),
  ],
  controllers: [IdolsController],
  providers: [IdolsService],
})
export class IdolsModule {}
