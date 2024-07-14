import { CommonRequestDto } from './common-request.dto';

export class TokenRequestDto extends CommonRequestDto {
  TrInitiatorCode: number; //	Обязательный	Признак инициатора списания денежных средств.
  // Возможные значения:
  // 0 - транзакция инициирована ТСП на основе ранее сохраненных учетных данных;
  // 1 - транзакция инициирована держателем карты (клиентом) на основе ранее сохраненных учетных данных.
  // ВАЖНО! В случае, если транзакция инициирована ТСП, необходимо дополнительно в запросе указать параметр PaymentScheduled с корректным значением.
  PaymentScheduled?: number; //	Необязательный	Признак оплаты по расписанию на основе ранее сохраненных учетных данных.
  // Возможные значения:
  // 0 - без расписания;
  // 1 - по расписанию.
  // ВАЖНО! В случае, если при запросе данный параметр не указан, по умолчанию будет использоваться значение 0.
  Token: string; //	Обязательный	Токен
}
