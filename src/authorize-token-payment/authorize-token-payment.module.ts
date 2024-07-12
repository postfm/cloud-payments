import { Module } from '@nestjs/common';
import { AuthorizeTokenPaymentService } from './authorize-token-payment.service';
import { AuthorizeTokenPaymentController } from './authorize-token-payment.controller';

@Module({
  controllers: [AuthorizeTokenPaymentController],
  providers: [AuthorizeTokenPaymentService],
})
export class AuthorizeTokenPaymentModule {}
