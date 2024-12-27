import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ProductModel } from 'src/product/product.model';

export type ReviewModelDocument = HydratedDocument<ReviewModel>;
@Schema({ timestamps: true })
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
	rating: number;
	@Prop({ type: Types.ObjectId, ref: ProductModel.name })
	product_id: Types.ObjectId;
}
export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);
