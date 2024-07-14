import { ValidateNested } from 'class-validator';
import { BaseResponseRdo } from './base-response.rdo';
import { ModelSuccessResponseRdo } from './model-success-response.rdo';
import { Type } from 'class-transformer';

export class SuccessResponseRdo extends BaseResponseRdo {
  @ValidateNested()
  @Type(() => ModelSuccessResponseRdo)
  Model: ModelSuccessResponseRdo;
}
