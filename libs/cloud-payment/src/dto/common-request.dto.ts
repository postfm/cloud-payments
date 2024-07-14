import { CURRENCIES } from '../constants';
import { PayerDto } from './payer.dto';

export class CommonRequestDto {
  Amount: number; //	Обязательный	Cумма платежа в валюте, разделитель точка. Количество не нулевых знаков после точки – 2
  Currency?: typeof CURRENCIES; //	Необязательный	Валюта: RUB/USD/EUR/GBP (см. справочник). Если параметр не передан, то по умолчанию принимает значение RUB
  AccountId: string; //	Обязательный	Идентификатор пользователя
  IpAddress?: string; //	Необязательный	IP-адрес плательщика
  InvoiceId?: string; //	Необязательный	Номер счета или заказа
  Description?: string; //	Необязательный	Назначение платежа в свободной форме
  Email?: string; //	Необязательный	E-mail плательщика, на который будет отправлена квитанция об оплате
  Payer?: PayerDto; //	Необязательный	Доп. поле, куда передается информация о плательщике. Используйте следующие параметры: FirstName, LastName, MiddleName, Birth, Street, Address, City, Country, Phone, Postcode
  JsonData?: string; //	Необязательный	Любые другие данные, которые будут связаны с транзакцией, в том числе инструкции для создания подписки или формирования онлайн-чека должны обёртываться в объект cloudpayments. Мы зарезервировали названия следующих параметров и отображаем их содержимое в реестре операций, выгружаемом в Личном Кабинете: name, firstName, middleName, lastName, nick, phone, address, comment, birthDate.
}
