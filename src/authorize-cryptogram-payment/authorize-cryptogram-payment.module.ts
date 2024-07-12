import { Module } from '@nestjs/common';
import { AuthorizeCryptogramPaymentService } from './authorize-cryptogram-payment.service';
import { AuthorizeCryptogramPaymentController } from './authorize-cryptogram-payment.controller';

@Module({
  controllers: [AuthorizeCryptogramPaymentController],
  providers: [AuthorizeCryptogramPaymentService],
})
export class AuthorizeCryptogramPaymentModule {}
