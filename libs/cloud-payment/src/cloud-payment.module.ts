import { DynamicModule, Module } from '@nestjs/common';
import { CloudPaymentService } from './cloud-payment.service';
import { HttpModule } from '@nestjs/axios';

@Module({})
export class CloudPaymentModule {
  static forRoot(options: Record<string, any>): DynamicModule {
    return {
      module: CloudPaymentModule,
      imports: [HttpModule],
      providers: [
        {
          provide: 'PAYMENT_OPTIONS',
          useValue: options,
        },
        CloudPaymentService,
      ],
      exports: [CloudPaymentService],
    };
  }
}
