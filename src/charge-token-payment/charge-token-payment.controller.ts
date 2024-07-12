import { Controller, Post, Body } from '@nestjs/common';
import { ChargeTokenPaymentService } from './charge-token-payment.service';
import { ChargeTokenPaymentDto } from './dto/charge-token-payment.dto';

@Controller('charge-token-payment')
export class ChargeTokenPaymentController {
  constructor(
    private readonly chargeTokenPaymentService: ChargeTokenPaymentService,
  ) {}

  @Post()
  create(@Body() chargeTokenPaymentDto: ChargeTokenPaymentDto) {
    return this.chargeTokenPaymentService.create(chargeTokenPaymentDto);
  }
}
