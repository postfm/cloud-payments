import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoidPaymentService } from './void-payment.service';
import { CreateVoidPaymentDto } from './dto/create-void-payment.dto';
import { UpdateVoidPaymentDto } from './dto/update-void-payment.dto';

@Controller('void-payment')
export class VoidPaymentController {
  constructor(private readonly voidPaymentService: VoidPaymentService) {}

  @Post()
  create(@Body() createVoidPaymentDto: CreateVoidPaymentDto) {
    return this.voidPaymentService.create(createVoidPaymentDto);
  }

  @Get()
  findAll() {
    return this.voidPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voidPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoidPaymentDto: UpdateVoidPaymentDto) {
    return this.voidPaymentService.update(+id, updateVoidPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voidPaymentService.remove(+id);
  }
}
