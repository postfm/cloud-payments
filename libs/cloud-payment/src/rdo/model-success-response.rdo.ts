import { IsDate, IsDateString, IsString } from 'class-validator';
import { ModelResponseRdo } from './model-response.rdo';

export class ModelSuccessResponseRdo extends ModelResponseRdo {
  @IsDate()
  AuthDate: Date;

  @IsDateString()
  AuthDateIso: string;

  @IsString()
  AuthCode: string;

  @IsString()
  CardProduct: string;

  @IsString()
  CardCategory: string;
}
