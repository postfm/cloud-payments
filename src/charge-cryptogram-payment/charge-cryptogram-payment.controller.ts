import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChargeCryptogramPaymentService } from './charge-cryptogram-payment.service';
import { CreateChargeCryptogramPaymentDto } from './dto/create-charge-cryptogram-payment.dto';
import { UpdateChargeCryptogramPaymentDto } from './dto/update-charge-cryptogram-payment.dto';

@Controller('charge-cryptogram-payment')
export class ChargeCryptogramPaymentController {
  constructor(private readonly chargeCryptogramPaymentService: ChargeCryptogramPaymentService) {}

  @Post()
  create(@Body() createChargeCryptogramPaymentDto: CreateChargeCryptogramPaymentDto) {
    return this.chargeCryptogramPaymentService.create(createChargeCryptogramPaymentDto);
  }

  @Get()
  findAll() {
    return this.chargeCryptogramPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chargeCryptogramPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChargeCryptogramPaymentDto: UpdateChargeCryptogramPaymentDto) {
    return this.chargeCryptogramPaymentService.update(+id, updateChargeCryptogramPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chargeCryptogramPaymentService.remove(+id);
  }
}
