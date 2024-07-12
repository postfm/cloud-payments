import { Injectable } from '@nestjs/common';
import { CreateChargeTokenPaymentDto } from './dto/create-charge-token-payment.dto';
import { UpdateChargeTokenPaymentDto } from './dto/update-charge-token-payment.dto';

@Injectable()
export class ChargeTokenPaymentService {
  create(createChargeTokenPaymentDto: CreateChargeTokenPaymentDto) {
    return 'This action adds a new chargeTokenPayment';
  }

  findAll() {
    return `This action returns all chargeTokenPayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chargeTokenPayment`;
  }

  update(id: number, updateChargeTokenPaymentDto: UpdateChargeTokenPaymentDto) {
    return `This action updates a #${id} chargeTokenPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} chargeTokenPayment`;
  }
}
