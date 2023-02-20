import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { CreateDietDto } from './dto/create-diet.dto';
import { UpdateDietDto } from './dto/update-diet.dto';
import { Diet, DietDocument } from './entities/diet.entity';

@Injectable()
export class DietsService {
  constructor(@InjectModel(Diet.name) private dietModel: Model<DietDocument>) {}

  async create(createDietDto: CreateDietDto, user: any) {
    const { altura, idade, peso, ...rest } = createDietDto;

    // Cálculo da TMB com a equação de Harris-Benedict
    const tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;

    // Fator de atividade física
    const fatorAtividade = 1.2;

    // Quantidade de calorias necessárias para manter o peso
    const necessidadeCalorica = tmb * fatorAtividade;

    // Distribuição de macronutrientes em porcentagem
    const porcentagemProteina = 0.2;
    const porcentagemGordura = 0.3;
    const porcentagemCarboidrato = 0.5;

    // Quantidade de calorias para cada macronutriente
    const caloriasProteina = necessidadeCalorica * porcentagemProteina;
    const caloriasGordura = necessidadeCalorica * porcentagemGordura;
    const caloriasCarboidrato = necessidadeCalorica * porcentagemCarboidrato;

    // Quantidade de gramas para cada macronutriente
    const gramasProteina = caloriasProteina / 4;
    const gramasGordura = caloriasGordura / 9;
    const gramasCarboidrato = caloriasCarboidrato / 4;

    const diet = {
      ...rest,
      calories: necessidadeCalorica,
      protein: gramasProteina,
      fat: gramasGordura,
      carbohydrate: gramasCarboidrato,
    };

    const data = Object.assign(diet, { user: user._id });
    const res = await this.dietModel.create(data);
    return res;
  }

  findAll() {
    return this.dietModel.find().populate('user');
  }

  findOne(id: string) {
    return this.dietModel
      .findById({
        _id: id,
      })
      .populate('user');
  }

  // update(id: string, updateDietDto: UpdateDietDto) {
  //   return `This action updates a #${id} diet`;
  // }

  remove(id: string) {
    return this.dietModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
