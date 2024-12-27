import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProductModelDocument = HydratedDocument<ProductModel>;

@Schema()
class ProductCharacteristic {
	@Prop()
	name: string;
	@Prop()
	value: string;
}
@Schema({ timestamps: true })
export class ProductModel {
	@Prop({ type: Types.ObjectId, required: true, auto: true })
	_id: Types.ObjectId;
	@Prop()
	image: string;
	@Prop()
	title: string;
	@Prop()
	price: number;
	@Prop()
	oldPrice: number;
	@Prop()
	credit: number;
	@Prop()
	calculatedRating: number;
	@Prop()
	description: string;
	@Prop()
	advantages: string;
	@Prop()
	disAdvantages: string;
	@Prop({ type: () => [String] })
	categories: string[];
	@Prop({ type: () => [String] })
	tags: string[];
	@Prop({ type: () => [ProductCharacteristic], _id: false })
	characteristics: ProductCharacteristic[];
}
export const ProductModelSchema = SchemaFactory.createForClass(ProductModel);
