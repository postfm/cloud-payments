import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorizeCryptogramPaymentDto } from './create-authorize-cryptogram-payment.dto';

export class UpdateAuthorizeCryptogramPaymentDto extends PartialType(CreateAuthorizeCryptogramPaymentDto) {}
