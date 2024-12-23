import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ITopPageModel } from './top-page.model';
import { IFindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
	@Post('create')
	public async create(@Body() dto: Omit<ITopPageModel, '_id'>) {}

	@Get(':id')
	public async get(@Param('id') id: string) {}

	@Delete(':id')
	public async delete(@Param('id') id: string) {}

	@Patch(':id')
	public async patch(@Param('id') id: string, @Body() dto: ITopPageModel) {}

	@HttpCode(200)
	@Post()
	public async find(@Body() dto: IFindTopPageDto) {}
}