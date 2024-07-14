import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudPaymentModule } from '@app/cloud-payment';
import { ENDPOINT, PUBLIC_ID, SECRET_API } from './client-options';

@Module({
  imports: [
    CloudPaymentModule.forRoot({
      publicId: PUBLIC_ID,
      secretApi: SECRET_API,
      endpoint: ENDPOINT,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
