import { IsBoolean, IsString } from 'class-validator';

export class BaseResponseRdo {
  @IsBoolean()
  Success: boolean;

  @IsString()
  Message: string;
}
