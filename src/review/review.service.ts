import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReviewModel, ReviewModelDocument } from './models/review.model';
import { Model } from 'mongoose';
import { IReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel.name) private readonly reviewModel: Model<ReviewModelDocument>,
	) {}
	public async create(dto: IReviewDto): Promise<ReviewModel> {
		const newReview = new this.reviewModel(dto);
		return newReview.save();
	}
	public async delete(id: string): Promise<void> {
		const result = await this.reviewModel.deleteOne({ _id: id }).exec();
		if (result.deletedCount === 0) {
			throw new NotFoundException(`Room with ID ${id} not found`);
		}
	}
	public async findByProductId(product_id: string): Promise<ReviewModel[]> {
		return this.reviewModel.find({ product_id: product_id }).exec();
	}
}
