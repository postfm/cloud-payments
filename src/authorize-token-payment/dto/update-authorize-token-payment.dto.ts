import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorizeTokenPaymentDto } from './create-authorize-token-payment.dto';

export class UpdateAuthorizeTokenPaymentDto extends PartialType(CreateAuthorizeTokenPaymentDto) {}
