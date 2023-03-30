import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StrapiService } from '../strapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
public loginform: FormGroup;

constructor(private detail: FormBuilder, private authservice: StrapiService, private route: Router ){
  this.loginform = this.detail.group({
    identifier: '',
    password: ''
  })
}
  onSubmit() : void {
    // console.log(this.loginform.value , "details");
    // this._http.submitForm(this.loginform.value).subscribe(resp=>{
    //   console.log(resp, 'RESP')
    // })
    console.log(this.loginform.value, 'hi');
    
    this.authservice.submitForm(this.loginform.value).subscribe((resp:any)=>{
      console.log(resp, 'X');
      localStorage.setItem('access-token', resp.jwt)
      this.route.navigate(['/about']);
    })
  }

}
  