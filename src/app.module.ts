import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChargeCryptogramPaymentModule } from './charge-cryptogram-payment/charge-cryptogram-payment.module';
import { AuthorizeCryptogramPaymentModule } from './authorize-cryptogram-payment/authorize-cryptogram-payment.module';
import { ChargeTokenPaymentModule } from './charge-token-payment/charge-token-payment.module';
import { AuthorizeTokenPaymentModule } from './authorize-token-payment/authorize-token-payment.module';
import { VoidPaymentModule } from './void-payment/void-payment.module';

@Module({
  imports: [ChargeCryptogramPaymentModule, AuthorizeCryptogramPaymentModule, ChargeTokenPaymentModule, AuthorizeTokenPaymentModule, VoidPaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
