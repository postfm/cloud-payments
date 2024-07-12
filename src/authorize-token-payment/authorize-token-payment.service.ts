import { Injectable } from '@nestjs/common';
import { CreateAuthorizeTokenPaymentDto } from './dto/create-authorize-token-payment.dto';
import { UpdateAuthorizeTokenPaymentDto } from './dto/update-authorize-token-payment.dto';

@Injectable()
export class AuthorizeTokenPaymentService {
  create(createAuthorizeTokenPaymentDto: CreateAuthorizeTokenPaymentDto) {
    return 'This action adds a new authorizeTokenPayment';
  }

  findAll() {
    return `This action returns all authorizeTokenPayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authorizeTokenPayment`;
  }

  update(id: number, updateAuthorizeTokenPaymentDto: UpdateAuthorizeTokenPaymentDto) {
    return `This action updates a #${id} authorizeTokenPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} authorizeTokenPayment`;
  }
}
