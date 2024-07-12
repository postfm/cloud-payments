import { Controller, Post, Body } from '@nestjs/common';
import { AuthorizeTokenPaymentService } from './authorize-token-payment.service';
import { AuthorizeTokenPaymentDto } from './dto/authorize-token-payment.dto';

@Controller('authorize-token-payment')
export class AuthorizeTokenPaymentController {
  constructor(
    private readonly authorizeTokenPaymentService: AuthorizeTokenPaymentService,
  ) {}

  @Post()
  create(@Body() authorizeTokenPaymentDto: AuthorizeTokenPaymentDto) {
    return this.authorizeTokenPaymentService.create(authorizeTokenPaymentDto);
  }
}
