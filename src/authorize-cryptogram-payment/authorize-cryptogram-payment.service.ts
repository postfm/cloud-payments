import { Injectable } from '@nestjs/common';
import { CreateAuthorizeCryptogramPaymentDto } from './dto/create-authorize-cryptogram-payment.dto';
import { UpdateAuthorizeCryptogramPaymentDto } from './dto/update-authorize-cryptogram-payment.dto';

@Injectable()
export class AuthorizeCryptogramPaymentService {
  create(createAuthorizeCryptogramPaymentDto: CreateAuthorizeCryptogramPaymentDto) {
    return 'This action adds a new authorizeCryptogramPayment';
  }

  findAll() {
    return `This action returns all authorizeCryptogramPayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authorizeCryptogramPayment`;
  }

  update(id: number, updateAuthorizeCryptogramPaymentDto: UpdateAuthorizeCryptogramPaymentDto) {
    return `This action updates a #${id} authorizeCryptogramPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} authorizeCryptogramPayment`;
  }
}
