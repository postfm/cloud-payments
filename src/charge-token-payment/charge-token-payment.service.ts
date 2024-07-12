import { Injectable } from '@nestjs/common';
import { ChargeTokenPaymentDto } from './dto/charge-token-payment.dto';

@Injectable()
export class ChargeTokenPaymentService {
  create(chargeTokenPaymentDto: ChargeTokenPaymentDto) {
    return 'This action adds a new chargeTokenPayment';
  }
}
