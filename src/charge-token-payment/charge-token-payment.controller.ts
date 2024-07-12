import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChargeTokenPaymentService } from './charge-token-payment.service';
import { CreateChargeTokenPaymentDto } from './dto/create-charge-token-payment.dto';
import { UpdateChargeTokenPaymentDto } from './dto/update-charge-token-payment.dto';

@Controller('charge-token-payment')
export class ChargeTokenPaymentController {
  constructor(private readonly chargeTokenPaymentService: ChargeTokenPaymentService) {}

  @Post()
  create(@Body() createChargeTokenPaymentDto: CreateChargeTokenPaymentDto) {
    return this.chargeTokenPaymentService.create(createChargeTokenPaymentDto);
  }

  @Get()
  findAll() {
    return this.chargeTokenPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chargeTokenPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChargeTokenPaymentDto: UpdateChargeTokenPaymentDto) {
    return this.chargeTokenPaymentService.update(+id, updateChargeTokenPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chargeTokenPaymentService.remove(+id);
  }
}
