import { Test, TestingModule } from '@nestjs/testing';
import { VoidPaymentService } from './void-payment.service';

describe('VoidPaymentService', () => {
  let service: VoidPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoidPaymentService],
    }).compile();

    service = module.get<VoidPaymentService>(VoidPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
