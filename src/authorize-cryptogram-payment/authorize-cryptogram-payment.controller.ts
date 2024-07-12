import { Controller, Post, Body } from '@nestjs/common';
import { AuthorizeCryptogramPaymentService } from './authorize-cryptogram-payment.service';
import { AuthorizeCryptogramPaymentDto } from './dto/authorize-cryptogram-payment.dto';

@Controller('authorize-cryptogram-payment')
export class AuthorizeCryptogramPaymentController {
  constructor(
    private readonly authorizeCryptogramPaymentService: AuthorizeCryptogramPaymentService,
  ) {}

  @Post()
  create(
    @Body()
    authorizeCryptogramPaymentDto: AuthorizeCryptogramPaymentDto,
  ) {
    return this.authorizeCryptogramPaymentService.create(
      authorizeCryptogramPaymentDto,
    );
  }
}
