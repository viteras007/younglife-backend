import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/entities/user.schema';

export type DietDocument = HydratedDocument<Diet>;

@Schema({
  timestamps: true,
})
export class Diet {
  @Prop()
  calories: number;

  @Prop()
  protein: number;

  @Prop()
  carbohydrate: number;

  @Prop()
  fat: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const DietSchema = SchemaFactory.createForClass(Diet);
