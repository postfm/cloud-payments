import { Controller, Post, Body } from '@nestjs/common';
import { VoidPaymentService } from './void-payment.service';
import { VoidPaymentDto } from './dto/void-payment.dto';

@Controller('void-payment')
export class VoidPaymentController {
  constructor(private readonly voidPaymentService: VoidPaymentService) {}

  @Post()
  create(@Body() voidPaymentDto: VoidPaymentDto) {
    return this.voidPaymentService.create(voidPaymentDto);
  }
}
