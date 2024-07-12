import { Injectable } from '@nestjs/common';
import { AuthorizeCryptogramPaymentDto } from './dto/authorize-cryptogram-payment.dto';

@Injectable()
export class AuthorizeCryptogramPaymentService {
  create(authorizeCryptogramPaymentDto: AuthorizeCryptogramPaymentDto) {
    return 'This action adds a new authorizeCryptogramPayment';
  }
}
