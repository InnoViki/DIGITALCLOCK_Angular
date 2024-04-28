import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  key:string = "encryptKey";

  constructor() { }

  encryptService(username:any,password:any){
    return CryptoJS.AES.encrypt(username+password,this.key);
     
  }
}
