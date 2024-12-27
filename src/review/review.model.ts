import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ReviewModelDocument = HydratedDocument<ReviewModel>;
@Schema()
export class ReviewModel {
	@Prop({ type: Types.ObjectId, required: true, auto: true })
	_id: Types.ObjectId;
	@Prop()
	name: string;
	@Prop()
	title: string;
	@Prop()
	description: string;
	@Prop()
	rating: string;
	@Prop()
	createdAt: Date;
}
export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);
