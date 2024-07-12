import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorizeCryptogramPaymentService } from './authorize-cryptogram-payment.service';
import { CreateAuthorizeCryptogramPaymentDto } from './dto/create-authorize-cryptogram-payment.dto';
import { UpdateAuthorizeCryptogramPaymentDto } from './dto/update-authorize-cryptogram-payment.dto';

@Controller('authorize-cryptogram-payment')
export class AuthorizeCryptogramPaymentController {
  constructor(private readonly authorizeCryptogramPaymentService: AuthorizeCryptogramPaymentService) {}

  @Post()
  create(@Body() createAuthorizeCryptogramPaymentDto: CreateAuthorizeCryptogramPaymentDto) {
    return this.authorizeCryptogramPaymentService.create(createAuthorizeCryptogramPaymentDto);
  }

  @Get()
  findAll() {
    return this.authorizeCryptogramPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorizeCryptogramPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorizeCryptogramPaymentDto: UpdateAuthorizeCryptogramPaymentDto) {
    return this.authorizeCryptogramPaymentService.update(+id, updateAuthorizeCryptogramPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorizeCryptogramPaymentService.remove(+id);
  }
}
