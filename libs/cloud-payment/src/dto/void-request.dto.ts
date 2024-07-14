import { IsInt } from 'class-validator';

export class VoidRequestDto {
  @IsInt()
  TransactionId: number; //Обязательный	Номер транзакции в системе
}
