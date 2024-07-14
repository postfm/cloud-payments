import { CURRENCIES } from './../constants';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ModelResponseRdo {
  @IsInt()
  @IsOptional()
  ReasonCode: number;

  @IsString()
  @IsOptional()
  PublicId: string;

  @IsString()
  @IsOptional()
  TerminalUrl: string;

  @IsInt()
  TransactionId: number;

  @IsInt()
  Amount: number;

  @IsString()
  Currency: typeof CURRENCIES;

  @IsInt()
  @IsOptional()
  CurrencyCode: number;

  @IsInt()
  PaymentAmount: number;

  @IsString()
  PaymentCurrency: typeof CURRENCIES;

  @IsInt()
  @IsOptional()
  PaymentCurrencyCode: number;

  @IsString()
  @IsOptional()
  InvoiceId: string;

  @IsString()
  @IsOptional()
  AccountId: string;

  @IsString()
  @IsOptional()
  Description: string;

  @IsDate()
  @IsOptional()
  CreatedDate: Date;

  @IsDate()
  @IsOptional()
  CreatedDateIso: Date;

  @IsBoolean()
  TestMode: true;

  @IsString()
  @IsOptional()
  IpAddress: '123.123.123.123';

  @IsString()
  @IsOptional()
  IpCountry: 'CN';

  @IsString()
  @IsOptional()
  IpCity: 'Beijing';

  @IsString()
  @IsOptional()
  IpRegion: 'Beijing';

  @IsString()
  @IsOptional()
  IpDistrict: 'Beijing';

  @IsLatitude()
  @IsOptional()
  IpLatitude: number;

  @IsLongitude()
  @IsOptional()
  IpLongitude: number;

  @IsString()
  CardFirstSix: string;

  @IsString()
  CardLastFour: string;

  @IsString()
  CardExpDate: string;

  @IsString()
  CardType: string;

  @IsString()
  @IsOptional()
  IssuerBankCountry: string;

  @IsOptional()
  @IsString()
  Issuer: string;

  @IsOptional()
  @IsNumber()
  CardTypeCode: number;

  @IsString()
  Status: string;

  @IsInt()
  @IsOptional()
  StatusCode: number;

  @IsString()
  @IsOptional()
  CultureName: 'ru';
  @IsString()
  @IsOptional()
  Reason: 'InsufficientFunds';
  @IsString()
  @IsOptional()
  CardHolderMessage: 'Недостаточно средств на карте';

  @IsInt()
  @IsOptional()
  Type: number;

  @IsBoolean()
  @IsOptional()
  Refunded: boolean;

  @IsString()
  @IsOptional()
  Name: string;

  @IsString()
  @IsOptional()
  Token: string;

  @IsString()
  @IsOptional()
  GatewayName: string;

  @IsBoolean()
  @IsOptional()
  ApplePay: boolean;

  @IsBoolean()
  @IsOptional()
  AndroidPay: boolean;

  @IsString()
  @IsOptional()
  WalletType: string;

  @IsInt()
  @IsOptional()
  TotalFee: number;
}
