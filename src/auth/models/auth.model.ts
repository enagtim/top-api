import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type AuthModelDocument = HydratedDocument<AuthModel>;
@Schema({ timestamps: true })
export class AuthModel {
	@Prop({ type: Types.ObjectId, required: true, auto: true })
	_id: Types.ObjectId;
	@Prop({ unique: true })
	email: string;
	@Prop()
	passwordHash: string;
}
export const AuthModelSchema = SchemaFactory.createForClass(AuthModel);
