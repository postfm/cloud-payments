import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorizeTokenPaymentService } from './authorize-token-payment.service';
import { CreateAuthorizeTokenPaymentDto } from './dto/create-authorize-token-payment.dto';
import { UpdateAuthorizeTokenPaymentDto } from './dto/update-authorize-token-payment.dto';

@Controller('authorize-token-payment')
export class AuthorizeTokenPaymentController {
  constructor(private readonly authorizeTokenPaymentService: AuthorizeTokenPaymentService) {}

  @Post()
  create(@Body() createAuthorizeTokenPaymentDto: CreateAuthorizeTokenPaymentDto) {
    return this.authorizeTokenPaymentService.create(createAuthorizeTokenPaymentDto);
  }

  @Get()
  findAll() {
    return this.authorizeTokenPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorizeTokenPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorizeTokenPaymentDto: UpdateAuthorizeTokenPaymentDto) {
    return this.authorizeTokenPaymentService.update(+id, updateAuthorizeTokenPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorizeTokenPaymentService.remove(+id);
  }
}
