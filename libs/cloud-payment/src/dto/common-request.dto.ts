import {
  IsEmail,
  IsJSON,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CURRENCIES } from '../constants';
import { PayerDto } from './payer.dto';
import { Type } from 'class-transformer';

export class CommonRequestDto {
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  Amount: number; //	Обязательный	Cумма платежа в валюте, разделитель точка. Количество не нулевых знаков после точки – 2

  @IsString()
  @IsOptional()
  Currency?: typeof CURRENCIES; //	Необязательный	Валюта: RUB/USD/EUR/GBP (см. справочник). Если параметр не передан, то по умолчанию принимает значение RUB

  @IsString()
  AccountId: string; //	Обязательный	Идентификатор пользователя

  @IsString()
  @IsOptional()
  IpAddress?: string; //	Необязательный	IP-адрес плательщика

  @IsString()
  @IsOptional()
  InvoiceId?: string; //	Необязательный	Номер счета или заказа

  @IsString()
  @IsOptional()
  Description?: string; //	Необязательный	Назначение платежа в свободной форме

  @IsEmail()
  @IsOptional()
  Email?: string; //	Необязательный	E-mail плательщика, на который будет отправлена квитанция об оплате

  @ValidateNested()
  @Type(() => PayerDto)
  @IsOptional()
  Payer?: PayerDto; //	Необязательный	Доп. поле, куда передается информация о плательщике. Используйте следующие параметры: FirstName, LastName, MiddleName, Birth, Street, Address, City, Country, Phone, Postcode

  @IsJSON()
  @IsOptional()
  JsonData?: string; //	Необязательный	Любые другие данные, которые будут связаны с транзакцией, в том числе инструкции для создания подписки или формирования онлайн-чека должны обёртываться в объект cloudpayments. Мы зарезервировали названия следующих параметров и отображаем их содержимое в реестре операций, выгружаемом в Личном Кабинете: name, firstName, middleName, lastName, nick, phone, address, comment, birthDate.
}
