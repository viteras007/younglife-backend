import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  weight: number;

  @Prop()
  height: number;

  @Prop()
  qtmeals: number;

  @Prop()
  goal: number;
  // 0 - lost weight, 1 - maintain weight, 2 - gain weight
}

export const UserSchema = SchemaFactory.createForClass(User);
