import { ValidateNested } from 'class-validator';
import { BaseResponseRdo } from './base-response.rdo';
import { ModelResponseRdo } from './model-response.rdo';
import { Type } from 'class-transformer';

export class FailResponseRdo extends BaseResponseRdo {
  @ValidateNested()
  @Type(() => ModelResponseRdo)
  Model: ModelResponseRdo;
}
