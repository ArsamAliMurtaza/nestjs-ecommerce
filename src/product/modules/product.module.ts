import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
