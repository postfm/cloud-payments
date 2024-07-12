import { Test, TestingModule } from '@nestjs/testing';
import { AuthorizeTokenPaymentController } from './authorize-token-payment.controller';
import { AuthorizeTokenPaymentService } from './authorize-token-payment.service';

describe('AuthorizeTokenPaymentController', () => {
  let controller: AuthorizeTokenPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorizeTokenPaymentController],
      providers: [AuthorizeTokenPaymentService],
    }).compile();

    controller = module.get<AuthorizeTokenPaymentController>(AuthorizeTokenPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
