import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './schemas/cart.schema';
import { CheckoutService } from './checkout.service';
import { EmailService } from './email.service';
import { UserService } from 'src/user/services/user.service';
import { UserModule } from 'src/user/modules/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cart', schema: CartSchema }]),
    UserModule,
  ],
  controllers: [CartController],
  providers: [CartService, CheckoutService, EmailService],
})
export class CartModule {}
