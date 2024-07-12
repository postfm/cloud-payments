import { PartialType } from '@nestjs/mapped-types';
import { CreateChargeCryptogramPaymentDto } from './create-charge-cryptogram-payment.dto';

export class UpdateChargeCryptogramPaymentDto extends PartialType(CreateChargeCryptogramPaymentDto) {}
