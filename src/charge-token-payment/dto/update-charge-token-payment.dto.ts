import { PartialType } from '@nestjs/mapped-types';
import { CreateChargeTokenPaymentDto } from './create-charge-token-payment.dto';

export class UpdateChargeTokenPaymentDto extends PartialType(CreateChargeTokenPaymentDto) {}
