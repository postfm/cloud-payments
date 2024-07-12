import { Injectable } from '@nestjs/common';
import { CreateChargeCryptogramPaymentDto } from './dto/create-charge-cryptogram-payment.dto';
import { UpdateChargeCryptogramPaymentDto } from './dto/update-charge-cryptogram-payment.dto';

@Injectable()
export class ChargeCryptogramPaymentService {
  create(createChargeCryptogramPaymentDto: CreateChargeCryptogramPaymentDto) {
    return 'This action adds a new chargeCryptogramPayment';
  }

  findAll() {
    return `This action returns all chargeCryptogramPayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chargeCryptogramPayment`;
  }

  update(id: number, updateChargeCryptogramPaymentDto: UpdateChargeCryptogramPaymentDto) {
    return `This action updates a #${id} chargeCryptogramPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} chargeCryptogramPayment`;
  }
}
