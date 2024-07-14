import { ValidateNested } from 'class-validator';
import { BaseResponseRdo } from './base-response.rdo';
import { Model3DSecureResponseRdo } from './model-3Dsecure-response.rdo';
import { Type } from 'class-transformer';

export class With3DSecureResponseRdo extends BaseResponseRdo {
  @ValidateNested()
  @Type(() => Model3DSecureResponseRdo)
  Model: Model3DSecureResponseRdo;
}
