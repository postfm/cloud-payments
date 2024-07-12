import { Injectable } from '@nestjs/common';
import { CreateVoidPaymentDto } from './dto/create-void-payment.dto';
import { UpdateVoidPaymentDto } from './dto/update-void-payment.dto';

@Injectable()
export class VoidPaymentService {
  create(createVoidPaymentDto: CreateVoidPaymentDto) {
    return 'This action adds a new voidPayment';
  }

  findAll() {
    return `This action returns all voidPayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voidPayment`;
  }

  update(id: number, updateVoidPaymentDto: UpdateVoidPaymentDto) {
    return `This action updates a #${id} voidPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} voidPayment`;
  }
}
