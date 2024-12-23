import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { IAuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	@Post('register')
	public async reqister(@Body() dto: IAuthDto) {}

	@HttpCode(200)
	@Post('login')
	public async login(@Body() dto: IAuthDto) {}
}
