import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DietsController } from './diets.controller';
import { DietsService } from './diets.service';
import { Diet, DietSchema } from './entities/diet.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Diet.name, schema: DietSchema }]),
  ],
  controllers: [DietsController],
  providers: [DietsService],
})
export class DietsModule {}
