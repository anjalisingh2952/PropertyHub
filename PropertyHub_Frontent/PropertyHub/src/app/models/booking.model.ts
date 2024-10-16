export interface Booking {

    propertyId: number;
   // property: Property; //optional
    buyerId: number;
    //buyer: User; //optional
   // status:string;
    status: BookingStatus;
    bookingDate: Date;
  }
  
  export enum BookingStatus {
    Confirmed = 0,
    Cancelled = 1,
    Pending = 2
  }