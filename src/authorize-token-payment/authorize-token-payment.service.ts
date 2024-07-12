import { Injectable } from '@nestjs/common';
import { AuthorizeTokenPaymentDto } from './dto/authorize-token-payment.dto';

@Injectable()
export class AuthorizeTokenPaymentService {
  create(authorizeTokenPaymentDto: AuthorizeTokenPaymentDto) {
    return 'This action adds a new authorizeTokenPayment';
  }
}
