import { Test, TestingModule } from '@nestjs/testing';
import { ChargeTokenPaymentController } from './charge-token-payment.controller';
import { ChargeTokenPaymentService } from './charge-token-payment.service';

describe('ChargeTokenPaymentController', () => {
  let controller: ChargeTokenPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeTokenPaymentController],
      providers: [ChargeTokenPaymentService],
    }).compile();

    controller = module.get<ChargeTokenPaymentController>(ChargeTokenPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
