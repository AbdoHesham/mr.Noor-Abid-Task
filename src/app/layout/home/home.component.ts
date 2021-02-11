import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Name;
  CardNumber;
  SecurityCode: any;
  Expiration: any;
  CartItems: [];
  constructor() { }

  ngOnInit(): void {
    this. getFromLocalStorage()
    // this.Name=JSON.parse(localStorage.getItem('CartItems')).Name;
    // this.CardNumber=JSON.parse(localStorage.getItem('CartItems')).CardNumber;
    // this.Expiration=JSON.parse(localStorage.getItem('CartItems')).Expiration;
    // this.SecurityCode=JSON.parse(localStorage.getItem('CartItems')).SecurityCode;

  }
  getFromLocalStorage(){
    this.CartItems = JSON.parse(localStorage.getItem('CartItems'))

  }

}
