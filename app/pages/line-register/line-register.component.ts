import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

type UnPromise<T> = T extends Promise<infer X>? X : T;

@Component({
  selector: 'app-line-register',
  templateUrl: './line-register.component.html',
  styleUrls: ['./line-register.component.css']
})
export class LineRegisterComponent implements OnInit {

  public  os: ReturnType<typeof liff.getOS>;  
  public  profile: UnPromise<ReturnType<typeof liff.getProfile>>;

  constructor() { }

  ngOnInit() {

//    liff.init({liffId:'1653761629-AMDmoZ6p'}).then(()=>{
//
//      this.os=liff.getOS();
//
//      if(liff.isLoggedIn()){
//
//        liff.getProfile().then( profile =>{
//          this.profile = profile;
//        }).catch(console.error);
//
//      } else{
//        liff.login()
//      }
//
//    }).catch(console.error);

  }

  init_liff() {

  }
}
