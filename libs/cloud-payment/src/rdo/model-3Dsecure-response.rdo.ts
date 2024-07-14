import { IsBoolean, IsInt, IsString } from 'class-validator';

export class Model3DSecureResponseRdo {
  @IsInt()
  TransactionId: number;

  @IsString()
  PaReq: string;

  @IsString()
  AcsUrl: string;

  @IsBoolean()
  IFrameIsAllowed: boolean;

  @IsString()
  ThreeDsCallbackId: string;
}
