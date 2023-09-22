import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Company extends Document {
  @Prop({ default: new Types.ObjectId() }) // Set a default ObjectId
  _id: Types.ObjectId; // Use Types.ObjectId for the _id field

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  website: string;

  @Prop([String])
  departments: string[];

  @Prop({ type: Number, default: null })
  numberOfUsers: number | null;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
