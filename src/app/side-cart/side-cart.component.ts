import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EarlinkService } from '../service/earlink.service';
import { ORDERDATA,orderData } from '../models/data.model';
import { InfoBilling, ShowingCart } from '../models/models';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.scss']
})
export class SideCartComponent implements OnInit {
  EarlinkCoreData: ORDERDATA = orderData;
  // showingCart: ShowingCart = {
  //   productInternet: {
  //     PlanName: "",
  //     recurringAmount: "",
  //   },
  //   productVoice: {},
  // }
  // infoBilling: InfoBilling = {
  //   addressLine1: "",
  //   addressLine2: "",
  //   attentionInCareOf: "",
  //   city: "",
  //   state: "",
  //   zipCode:  "",
  // }
  totalMonthly: number = 0;
  totalOnce: number = 0
  transactionIdRequestCounter = 0
  agentId!: string;
   //-------error-------------//
   ErrorMessage: string = "";
   answerWithError: boolean = false;
  constructor(private earlinkService: EarlinkService, private router: Router,) { }

  ngOnInit(): void {

    this.earlinkService.currentCartForm$.subscribe((data:ORDERDATA) => {
      this.EarlinkCoreData = data;
      //this.showingCart = this.EarlinkCoreData.showingCart
      //this.infoBilling = this.EarlinkCoreData.infoBilling
      this.agentId= this.EarlinkCoreData.agentId
      this.earlinkService.setTransactionIdHeaders(this.EarlinkCoreData.transactionId);

      if (data.transactionId == '' && this.transactionIdRequestCounter==0) {
        this.transactionIdRequestCounter++
        setTimeout(() => {
          this.earlinkService.getLocalStorage();
          this.EarlinkCoreData = data;
        }, 2000);
      }
    });

  }

  resetCart() {

    if (confirm('Are you sure you want to reset your cart?')) {
      localStorage.clear();
      localStorage.setItem('displayCart', 'false')
      const agentId = this.EarlinkCoreData.agentId
      const zip = this.EarlinkCoreData.serviceZip
      const dnis = this.EarlinkCoreData.dnis
      const callKey = ''
      const email = this.EarlinkCoreData.email
      const phone = this.EarlinkCoreData.phone
      const firstName = this.EarlinkCoreData.firstName
      const lastName =  this.EarlinkCoreData.lastName
      const city = this.EarlinkCoreData.serviceCity
      const address = this.EarlinkCoreData.addressLine1
      const state = this.EarlinkCoreData.serviceState
      window.location.replace(`address?firstName=${firstName}&lastName=${lastName}&addressLine1=${address}&address2=&city=${city}&state=${state}&zip=${zip}&agentId=${agentId}&&dnis=${dnis}&ani=&email=${email}&phone=${phone}`);
    }
  }

  changeAddressInfo(template: any) {


    if (template == 'address 1') {
      this.EarlinkCoreData.firstName = 'Cesar'
      this.EarlinkCoreData.lastName = 'Vega'
      this.EarlinkCoreData.email = 'cvega@infsalesgroup.com'
      this.EarlinkCoreData.phone = '3053265854'
      this.EarlinkCoreData.serviceCity = 'Augusta'
      this.EarlinkCoreData.serviceState = 'GA'
      this.EarlinkCoreData.serviceZip = '30904'


    } else if (template == 'address 2') {
      this.EarlinkCoreData.firstName = 'Yanay'
      this.EarlinkCoreData.lastName = 'Viera'
      this.EarlinkCoreData.email = 'Yanay@infsalesgroup.com'
      this.EarlinkCoreData.phone = '7864541245'
      this.EarlinkCoreData.serviceCity = 'Montgomery'
      this.EarlinkCoreData.serviceState = 'AL'
      this.EarlinkCoreData.serviceZip = '35107'

    } else if (template == 'address 3') {
      this.EarlinkCoreData.firstName = 'Milena'
      this.EarlinkCoreData.lastName = 'Fonseca'
      this.EarlinkCoreData.email = 'Fonseca@infsalesgroup.com'
      this.EarlinkCoreData.phone = '30548745478'
      this.EarlinkCoreData.serviceCity = 'FOWLERVILLE'
      this.EarlinkCoreData.serviceState = 'MI'
      this.EarlinkCoreData.serviceZip = '48336'

    } else if (template == 'address 4') {
      this.EarlinkCoreData.firstName = 'Jessell'
      this.EarlinkCoreData.lastName = 'Bassett'
      this.EarlinkCoreData.email = 'Bassett@infsalesgroup.com'
      this.EarlinkCoreData.phone = '5614567895'

      this.EarlinkCoreData.serviceCity = 'Miami'
      this.EarlinkCoreData.serviceState = 'FL'
      this.EarlinkCoreData.serviceZip = '33131'

    }

  }
messages = [
  {
    messageDescription: "Your quoted price includes a Paperless Billing discount of $2.50. If you prefer a paper bill in the mail, you can switch by visiting the Fidium Insider Customer Portal at Fidium.net after your service is installed. If you make the switch to receiving a paper bill you will no longer receive the discount.",
    messageType: "Coaching Tip"
  },
  {
    messageDescription: "Your quoted price includes an Auto-Pay discount of $2.50. Please visit the Fidium Insider Customer Portal after installation to enroll in Auto-Pay to keep this $2.50 discount. This discount will apply to the first full billing cycle after you enroll.",
    messageType: "Coaching Tip"
  }
];
}

