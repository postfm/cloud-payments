import { Test, TestingModule } from '@nestjs/testing';
import { AuthorizeCryptogramPaymentController } from './authorize-cryptogram-payment.controller';
import { AuthorizeCryptogramPaymentService } from './authorize-cryptogram-payment.service';

describe('AuthorizeCryptogramPaymentController', () => {
  let controller: AuthorizeCryptogramPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorizeCryptogramPaymentController],
      providers: [AuthorizeCryptogramPaymentService],
    }).compile();

    controller = module.get<AuthorizeCryptogramPaymentController>(AuthorizeCryptogramPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
