import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/top-api?authSource=admin'),
		AuthModule,
		TopPageModule,
		ProductModule,
		ReviewModule,
	],
})
export class AppModule {}
