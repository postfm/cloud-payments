import { Test, TestingModule } from '@nestjs/testing';
import { ChargeCryptogramPaymentService } from './charge-cryptogram-payment.service';

describe('ChargeCryptogramPaymentService', () => {
  let service: ChargeCryptogramPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeCryptogramPaymentService],
    }).compile();

    service = module.get<ChargeCryptogramPaymentService>(ChargeCryptogramPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
