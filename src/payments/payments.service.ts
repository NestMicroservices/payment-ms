import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  createPaymentSession() {
    return 'This action adds a new paymentSession';
  }
}
