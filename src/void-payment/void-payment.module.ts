import { Module } from '@nestjs/common';
import { VoidPaymentService } from './void-payment.service';
import { VoidPaymentController } from './void-payment.controller';

@Module({
  controllers: [VoidPaymentController],
  providers: [VoidPaymentService],
})
export class VoidPaymentModule {}
