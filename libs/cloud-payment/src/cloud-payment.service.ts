import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { PAYMENT_OPTIONS, Url } from './constants';
import { CryptogramRequestDto } from './dto/cryptogram-request.dto';
import { TokenRequestDto } from './dto/token-request.dto';
import { VoidRequestDto } from './dto/void-request.dto';
import { BaseResponseRdo } from './rdo/base-response.rdo';
import { With3DSecureResponseRdo } from './rdo/with-3dsecure-response.rdo';
import { FailResponseRdo } from './rdo/fail-response.rdo';
import { SuccessResponseRdo } from './rdo/success-response.rdo';

@Injectable()
export class CloudPaymentService {
  constructor(
    @Inject(PAYMENT_OPTIONS) private options: Record<string, any>,
    private readonly httpService: HttpService,
  ) {}

  private autorization() {
    const authorization = Buffer.from(
      `${this.options.publicId}:${this.options.secretApi}`,
      'utf-8',
    ).toString('base64');

    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
      Authorization: `Basic ${authorization}`,
    };

    if (this.options.requestId) {
      headers['X-Request-ID'] = this.options.requestId;
    }

    return headers;
  }

  chargeCryptogramPayment(
    data: CryptogramRequestDto,
  ): Observable<
    AxiosResponse<
      | BaseResponseRdo
      | With3DSecureResponseRdo
      | FailResponseRdo
      | SuccessResponseRdo
    >
  > {
    return this.httpService.post(
      `${this.options.endpoint}${Url.CardsCharge}`,
      data,
      {
        headers: this.autorization(),
      },
    );
  }

  authorizeCryptogramPayment(
    data: CryptogramRequestDto,
  ): Observable<
    AxiosResponse<
      | BaseResponseRdo
      | With3DSecureResponseRdo
      | FailResponseRdo
      | SuccessResponseRdo
    >
  > {
    return this.httpService.post(
      `${this.options.endpoint}${Url.CardsAuth}`,
      data,
      {
        headers: this.autorization(),
      },
    );
  }

  chargeTokenPayment(
    data: TokenRequestDto,
  ): Observable<
    AxiosResponse<
      | BaseResponseRdo
      | With3DSecureResponseRdo
      | FailResponseRdo
      | SuccessResponseRdo
    >
  > {
    return this.httpService.post(
      `${this.options.endpoint}${Url.TokensCharge}`,
      data,
      {
        headers: this.autorization(),
      },
    );
  }

  authorizeTokenPayment(
    data: TokenRequestDto,
  ): Observable<
    AxiosResponse<
      | BaseResponseRdo
      | With3DSecureResponseRdo
      | FailResponseRdo
      | SuccessResponseRdo
    >
  > {
    return this.httpService.post(
      `${this.options.endpoint}${Url.TokenAuth}`,
      data,
      {
        headers: this.autorization(),
      },
    );
  }

  voidPayment(
    data: VoidRequestDto,
  ): Observable<AxiosResponse<BaseResponseRdo>> {
    return this.httpService.post(`${this.options.endpoint}${Url.Void}`, data, {
      headers: this.autorization(),
    });
  }
}
