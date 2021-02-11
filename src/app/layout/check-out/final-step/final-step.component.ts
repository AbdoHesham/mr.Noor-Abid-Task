import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../../service/toast.service';


// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss']
})
export class FinalStepComponent implements OnInit {
  addcard: FormGroup;

  constructor(    private fb: FormBuilder,
    public toastService: ToastService
    // private toastr: ToastrService
    ) { }
    isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }


  ngOnInit(): void {

    this.addcard = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(4)]],
      CardNumber: ['', [Validators.required, Validators.minLength(12),Validators.maxLength(12)]],

      SecurityCode: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(3)]],
      Expiration : ['', [Validators.required, Validators.minLength(4),Validators.maxLength(4)]
    ] });
    console.log( this.addcard.valid)

  }

  //  validateExpiry (input) {
  //   // ensure basic format is correct
  //   if (input.match(/^(0\d|1[0-2])\/\d{2}$/)) {
  //     const {0: month, 1: year} = input.split("/");

  //     // get midnight of first day of the next month
  //     const expiry = new Date(20+year, month);
  //     const current = new Date();

  //     return expiry.getTime() > current.getTime();

  //   } else return false;
  // }

  showSuccess() {
    console.log("clicked")
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

addProduct( ) {

    let productItems = [];
    if (localStorage.getItem('CartItems')) {
      productItems = JSON.parse(localStorage.getItem('CartItems')); // get product list

    productItems.push(
      {
        Name:this.addcard.controls.Name.value,
        CardNumber: this.addcard.controls.CardNumber.value,
        SecurityCode: this.addcard.controls.CardNumber.value,
        Expiration: this.addcard.controls.Expiration.value,

      }
    );
    localStorage.setItem('CartItems', JSON.stringify(productItems));




}

else {
  productItems = JSON.parse(localStorage.getItem('CartItems')); // get product list

  productItems.push(
    {
      Name:this.addcard.controls.Name.value,
      CardNumber: this.addcard.controls.CardNumber.value,
      SecurityCode: this.addcard.controls.CardNumber.value,
      Expiration: this.addcard.controls.Expiration.value,

    }
  );
  localStorage.setItem('CartItems', JSON.stringify(productItems));
}


}
}
