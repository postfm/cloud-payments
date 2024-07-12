import { Module } from '@nestjs/common';
import { ChargeTokenPaymentService } from './charge-token-payment.service';
import { ChargeTokenPaymentController } from './charge-token-payment.controller';

@Module({
  controllers: [ChargeTokenPaymentController],
  providers: [ChargeTokenPaymentService],
})
export class ChargeTokenPaymentModule {}
