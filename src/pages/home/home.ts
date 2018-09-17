import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  pages = [
    { pageName:'ChatsPage', title:'Chats',icon:'chatbubbles',id:"chatsTab"},
    { pageName:'OrdersPage', title:'Orders',icon:'book',id:"postsTab"},
    // { pageName:'DealsPage', title:'Deals',icon:'pricetags',id:"dealsTab"},
    // { pageName:'BuddiesPage', title:'Buddies',icon:'contacts',id:"buddiesTab"},

  ];

  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  onTabSelected(ev: any) {
    // if(ev.index === 2){

    // }
    // else 
    // {
    //   this.selectedTab = ev.index;
    //   this.superTabs.clearBadge(this.pages[ev.index].id);
    // }
  }

}
