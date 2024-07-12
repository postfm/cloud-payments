import { Test, TestingModule } from '@nestjs/testing';
import { ChargeTokenPaymentService } from './charge-token-payment.service';

describe('ChargeTokenPaymentService', () => {
  let service: ChargeTokenPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeTokenPaymentService],
    }).compile();

    service = module.get<ChargeTokenPaymentService>(ChargeTokenPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
