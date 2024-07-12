import { Test, TestingModule } from '@nestjs/testing';
import { ChargeCryptogramPaymentController } from './charge-cryptogram-payment.controller';
import { ChargeCryptogramPaymentService } from './charge-cryptogram-payment.service';

describe('ChargeCryptogramPaymentController', () => {
  let controller: ChargeCryptogramPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeCryptogramPaymentController],
      providers: [ChargeCryptogramPaymentService],
    }).compile();

    controller = module.get<ChargeCryptogramPaymentController>(ChargeCryptogramPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
