import { Test, TestingModule } from '@nestjs/testing';
import { AuthorizeTokenPaymentService } from './authorize-token-payment.service';

describe('AuthorizeTokenPaymentService', () => {
  let service: AuthorizeTokenPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorizeTokenPaymentService],
    }).compile();

    service = module.get<AuthorizeTokenPaymentService>(AuthorizeTokenPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
