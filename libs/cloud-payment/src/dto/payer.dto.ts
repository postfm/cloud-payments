import { IsDate, IsString } from 'class-validator';

export class PayerDto {
  @IsString()
  FirstName: string;

  @IsString()
  LastName: string;

  @IsString()
  MiddleName: string;

  @IsDate()
  Birth: Date;

  @IsString()
  Address: string;

  @IsString()
  Street: string;

  @IsString()
  City: string;

  @IsString()
  Country: string;

  @IsString()
  Phone: string;

  @IsString()
  Postcode: string;
}
