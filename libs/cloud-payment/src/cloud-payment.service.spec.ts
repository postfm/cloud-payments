import { Test, TestingModule } from '@nestjs/testing';
import { CloudPaymentService } from './cloud-payment.service';

describe('CloudPaymentService', () => {
  let service: CloudPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CloudPaymentService],
    }).compile();

    service = module.get<CloudPaymentService>(CloudPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
