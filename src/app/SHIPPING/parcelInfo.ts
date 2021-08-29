interface SenderInformation {
  name: string,
  country: string,
  addres: string,
  city:string,
  state:string,
  pin: number,
  contact: string,
  phone: number,
  email: string,
  aler: boolean,
  saveAddressAsRef: boolean,
  asRef: string,
  receivingCountryTaxId:string    
}

interface ReceiverInformation {
  name: string,
  country: string,
  addres: string,
  city:string,
  state:string,
  pin: number,
  contact: string,
  phone: number,
  email: string,
  aler: boolean,
  saveAddressAsRef: boolean,
  asRef: string,
}

export interface ParcelDetails {
  senderAddress: {
    name: string,
    country: string,
    addres: string,
    city:string,
    state:string,
    pin: number,
    contact: string,
    phone: number,
    email: string,
    alert: boolean,
    saveAddressAsRef: boolean,
    asRef: string,
    receivingCountryTaxId:string
  },    
  receiverAddress: {
    name: string,
    country: string,
    addres: string,
    city:string,
    state:string,
    pin: number,
    contact: string,
    phone: number,
    email: string,
    alert: boolean,
    saveAddressAsRef: boolean,
    asRef: string
  }
}