import { Controller, Post, Body } from '@nestjs/common';
import { ChargeCryptogramPaymentService } from './charge-cryptogram-payment.service';
import { ChargeCryptogramPaymentDto } from './dto/charge-cryptogram-payment.dto';

@Controller('charge-cryptogram-payment')
export class ChargeCryptogramPaymentController {
  constructor(
    private readonly chargeCryptogramPaymentService: ChargeCryptogramPaymentService,
  ) {}

  @Post()
  create(@Body() chargeCryptogramPaymentDto: ChargeCryptogramPaymentDto) {
    return this.chargeCryptogramPaymentService.create(
      chargeCryptogramPaymentDto,
    );
  }
}
