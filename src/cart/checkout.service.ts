import { Injectable } from '@nestjs/common';
import { CartService } from './cart.service';
import { EmailService } from './email.service';
import { UserService } from 'src/user/services/user.service';

@Injectable()
export class CheckoutService {
  constructor(
    private readonly cartService: CartService,
    private readonly emailService: EmailService,
    private readonly userService: UserService,
  ) {}

  async processCheckout(userId: string): Promise<void> {
    try {
      const userCart = await this.cartService.getCart(userId);

      if (!userCart || userCart.items.length === 0) {
        throw new Error('Cannot process an empty cart');
      }

      const totalPrice = this.cartService.calculateTotalPrice(userCart);

      const user = await this.userService.findUserById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      const userEmail = user.email;
      const emailSubject = 'Order Confirmation';
      const emailText = `Thank you for your order. Total price: $${totalPrice.toFixed(
        2,
      )}`;

      await this.emailService.sendEmail(userEmail, emailSubject, emailText);

      await this.cartService.clearCart(userId);
    } catch (error) {
      console.error('Error processing checkout:', error);
      throw error;
    }
  }
}
