import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DietsService } from './diets.service';
import { CreateDietDto } from './dto/create-diet.dto';
import { UpdateDietDto } from './dto/update-diet.dto';

@UseGuards(JwtAuthGuard)
@Controller('diets')
export class DietsController {
  constructor(private readonly dietsService: DietsService) {}

  @Post()
  async create(@Body() createDietDto: CreateDietDto, @Req() req) {
    return this.dietsService.create(createDietDto, req.user);
  }

  @Get()
  findAll() {
    return this.dietsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dietsService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDietDto: UpdateDietDto) {
  //   return this.dietsService.update(id, updateDietDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dietsService.remove(id);
  }
}
