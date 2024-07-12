import { Module } from '@nestjs/common';
import { ChargeCryptogramPaymentService } from './charge-cryptogram-payment.service';
import { ChargeCryptogramPaymentController } from './charge-cryptogram-payment.controller';

@Module({
  controllers: [ChargeCryptogramPaymentController],
  providers: [ChargeCryptogramPaymentService],
})
export class ChargeCryptogramPaymentModule {}
