import { Test, TestingModule } from '@nestjs/testing';
import { AuthorizeCryptogramPaymentService } from './authorize-cryptogram-payment.service';

describe('AuthorizeCryptogramPaymentService', () => {
  let service: AuthorizeCryptogramPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorizeCryptogramPaymentService],
    }).compile();

    service = module.get<AuthorizeCryptogramPaymentService>(AuthorizeCryptogramPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
