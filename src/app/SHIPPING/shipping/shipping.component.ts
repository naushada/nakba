import { Component, OnInit } from '@angular/core';
import { ParcelDetails } from '../parcelInfo';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl, FormArray } from '@angular/forms';
import { DbserviceService } from 'src/app/FRMWRK/SERVICE/POST/dbservice.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  newShipping!: FormGroup;
  public shippingInfo!:ParcelDetails;

  initialize() : void {
    this.newShipping = this.fb.group({
      serviceType:['']
    ,
      senderInformation: this.fb.group({
        name:[''],
        country:[''],
        city:[''],
        address:[''],
        state:[''],
        pin:[''],
        contact:[''],
        email:[''],
        alert:false
      }),
      receiverInformation: this.fb.group({
        name:[''],
        country:[''],
        city:[''],
        address:[''],
        state:[''],
        pin:[''],
        contact:[''],
        email:[''],
        alert:false
      })
      ,
      shipmentInformation: this.fb.group({

      }),
      shipmentOptions: this.fb.group({

      }),
     
      /* formArrayName is - aliases */
      //aliases:this.fb.array([this.fb.control])
    });
    /*
    this.newShipping = new FormGroup({
      serviceType: new FormControl(''),
      SenderAddress: new FormGroup({
        name: new FormControl(''),
        country: new FormControl(''),
        city: new FormControl(''),
        address: new FormControl(''),
        state: new FormControl(''),
        pin: new FormControl(''),
        contact: new FormControl(''),
        email: new FormControl(''),
        alert: new FormControl(false)
      }),
      ReceiverAddress: new FormGroup({
        name: new FormControl(''),
        country: new FormControl(''),
        city: new FormControl(''),
        address: new FormControl(''),
        state: new FormControl(''),
        pin: new FormControl(''),
        contact: new FormControl(''),
        email: new FormControl(''),
        alert: new FormControl(false)
        
      })
    });
    */

  }
 
  onSubmit() {
    console.log(this.newShipping.value);
    this.post.post_parcelInfo(this.newShipping.value).subscribe(data => {console.log(data)}, (error:any) => {console.log(error)});

    //this.coreService.get_parcelInfo().subscribe(data=>this.shippingInfo = data);
    //console.log(this.shippingInfo);
  }

  get aliases() {
    return(this.newShipping.get('aliases') as FormArray);
  }

  addAliases():void {
    this.aliases.push(this.fb.control(''));
  }


  constructor(private fb:FormBuilder, private post:DbserviceService) {
  }

  ngOnInit(): void {
    this.initialize();
  }

}
