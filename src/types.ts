// Entities

export interface Band {
  name: string;
  id: string;
  date: number;
  location: string;
  description_blurb: string;
  imgUrl: string;
  ticketTypes: Tickets;
}

export type Bands = Band[];

export interface CreditCard<DateType> {
  cardholder: string;
  cardNumber: string;
  cvv: string;
  expiry: DateType;
}

export type TicketType = 'general' | 'vip' | 'meet-and-greet';

export interface Ticket {
  type: TicketType;
  name: string;
  description: string;
  cost: number;
}

export type Tickets = Ticket[];

export interface FormData<DateType> {
  ticket: Record<string, number>;
  cc: CreditCard<DateType>;
}
