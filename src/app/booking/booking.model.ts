import { Rental } from '../rental/rental.model';

export class Booking {
  static readonly DATE_FORMATE = 'Y/MM/DD';

  _id: string;
  startAt: string;
  endAt: string;
  totalPrice: number;
  guests: number;
  days: number;
  createdAt: string;
  rental: Rental;
}