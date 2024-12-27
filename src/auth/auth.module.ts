import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModelSchema } from './models/auth.model';

@Module({
	controllers: [AuthController],
	imports: [MongooseModule.forFeature([{ name: AuthModule.name, schema: AuthModelSchema }])],
})
export class AuthModule {}
