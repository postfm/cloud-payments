import { Injectable } from '@nestjs/common';
import { ChargeCryptogramPaymentDto } from './dto/charge-cryptogram-payment.dto';

@Injectable()
export class ChargeCryptogramPaymentService {
  create(chargeCryptogramPaymentDto: ChargeCryptogramPaymentDto) {
    return 'This action adds a new chargeCryptogramPayment';
  }
}
