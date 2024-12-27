import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TopPageModelDocument = HydratedDocument<TopPageModel>;
export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}
@Schema()
export class HHData {
	@Prop()
	count: number;
	@Prop()
	juniorSalary: string;
	@Prop()
	middleSalary: string;
	@Prop()
	seniorSalary: number;
}
export class TopPageAdvantages {
	@Prop()
	title: string;
	@Prop()
	description: string;
}
@Schema({ timestamps: true })
export class TopPageModel {
	@Prop({ type: Types.ObjectId, required: true, auto: true })
	_id: Types.ObjectId;
	@Prop({ enum: TopLevelCategory })
	firstLevelCategory: TopLevelCategory;
	@Prop()
	secondCategory: string;
	@Prop({ unique: true })
	alias: string;
	@Prop()
	title: string;
	@Prop()
	category: string;
	@Prop({ type: () => HHData })
	hh?: HHData;
	@Prop({ type: () => [TopPageAdvantages] })
	advantages: TopPageAdvantages[];
	@Prop()
	seoText: string;
	@Prop()
	tagsTitle: string;
	@Prop({ type: () => [String] })
	tags: string[];
}
export const TopPageModelSchema = SchemaFactory.createForClass(TopPageModel);
