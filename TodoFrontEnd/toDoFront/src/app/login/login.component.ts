import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/service/data.service';
import {  User } from 'src/interfaces/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userInfo:any;
  constructor(private router:Router,private dataService:DataService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,Validators.required),
    });
   }

  ngOnInit() {
  }
  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && (this.loginForm.get(controlName).touched ||this.loginForm.get(controlName).dirty);
  }
loginUser(form,e){
  if(this.loginForm.valid){
    this.dataService.loginUser(this.loginForm.value)
    .subscribe((userunfo: User[]) => {
      this.userInfo = userunfo;
      this.router.navigate(['/Home']);
    },err => {
      console.log('API  not Sent');
      console.log(err);
    });
    
  }else{

  }
}
}
