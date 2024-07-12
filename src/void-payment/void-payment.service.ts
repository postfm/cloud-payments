import { Injectable } from '@nestjs/common';
import { VoidPaymentDto } from './dto/void-payment.dto';

@Injectable()
export class VoidPaymentService {
  create(voidPaymentDto: VoidPaymentDto) {
    return 'This action adds a new voidPayment';
  }
}
