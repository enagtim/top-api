import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { IReviewDto } from './dto/review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}
	@Post('create')
	public async create(@Body() dto: IReviewDto) {
		return this.reviewService.create(dto);
	}
	@Delete(':id')
	public async delete(@Param('id') id: string): Promise<void> {
		this.reviewService.delete(id);
	}
	@Get('byProduct/:product_id')
	public async getByProduct(@Param('product_id') product_id: string) {
		return this.reviewService.findByProductId(product_id);
	}
}
