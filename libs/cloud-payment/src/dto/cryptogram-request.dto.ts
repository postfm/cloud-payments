import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { LANGUAGES } from '../constants';
import { CommonRequestDto } from './common-request.dto';

export class CryptogramRequestDto extends CommonRequestDto {
  @IsString()
  CardCryptogramPacket: string; //	Обязательный	Криптограмма платежных данных

  @IsString()
  @IsOptional()
  Name?: string; //	Необязательный	Имя держателя карты латиницей

  @IsString()
  @IsOptional()
  PaymentUrl?: string; //	Необязательный	Адрес сайта, с которого совершается вызов скрипта checkout

  @IsString()
  @IsOptional()
  CultureName?: typeof LANGUAGES; //	Необязательный	Язык уведомлений. Возможные значения: "ru-RU", "en-US". (см. справочник)

  @IsBoolean()
  @IsOptional()
  SaveCard?: boolean; //	Необязательный	Признак сохранения карточного токена для проведения оплаты по сохранённой карте (см. Оплата по токену (рекарринг)).
  // Возможные значения: true - после успешной оплаты будет возвращён карточный токен, false - токен не будет возвращаться (по-умолчанию)
  // Параметр SaveCard обрабатывается только при включении настройки "Сохранение токена карты" в Личном Кабинете. При включении настройки "Сохранять принудительно", параметр SaveCard будет игнорироваться.
}
