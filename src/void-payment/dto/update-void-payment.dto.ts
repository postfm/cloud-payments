import { PartialType } from '@nestjs/mapped-types';
import { CreateVoidPaymentDto } from './create-void-payment.dto';

export class UpdateVoidPaymentDto extends PartialType(CreateVoidPaymentDto) {}
