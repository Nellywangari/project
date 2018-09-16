import { OrderProvider } from './../../providers/order/order';
import { Component, NgZone, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { MapsAPILoader } from '@agm/core';
import {} from 'google-maps';
import * as firebase from 'firebase';



/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  selectedProduct;
  public latitude: number;
  public longitude: number;
  public zoom: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderService: OrderProvider, private view: ViewController, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    this.selectedProduct = this.navParams.get('data');
    console.log(this.selectedProduct.lat, this.selectedProduct.lng);

    //set current position
    this.setProductPosition();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  makeOrder() {

  }

  setProductPosition() {
    this.latitude = this.selectedProduct.lat;
    this.longitude = this.selectedProduct.lng;
    this.zoom = 12;
  }

  orderProduct() {

    const product_id = this.selectedProduct.id;
    const product_name= this.selectedProduct.name;
    const buyer_id = firebase.auth().currentUser.uid;
    const seller_id = this.selectedProduct.user_id;
    const quantity = this.selectedProduct.units;
    const price = this.selectedProduct.price
    const accepted = false;
    const rejected=false;

    this.orderService.pushOrders(product_id,product_name,buyer_id,seller_id,quantity,price,accepted,rejected).then((res:any)=>{
      //navigate to a page showing your order status
      this.navCtrl.push("OrdersPage");
    })

  }

  

}
