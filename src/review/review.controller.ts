import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { IReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	public async create(@Body() dto: Omit<IReviewModel, '_id'>) {}
	@Delete(':id')
	public async delete(@Param('id') id: string) {}

	@Get('byProduct/:productId')
	public async getByProduct(@Param('productId') productId: string) {}
}
