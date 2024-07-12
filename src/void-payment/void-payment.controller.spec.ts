import { Test, TestingModule } from '@nestjs/testing';
import { VoidPaymentController } from './void-payment.controller';
import { VoidPaymentService } from './void-payment.service';

describe('VoidPaymentController', () => {
  let controller: VoidPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoidPaymentController],
      providers: [VoidPaymentService],
    }).compile();

    controller = module.get<VoidPaymentController>(VoidPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
