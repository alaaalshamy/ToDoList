import { Component, OnInit, Input } from '@angular/core';
import { ToDoCart } from 'src/interfaces/interface';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
   _toDoList: ToDoCart[] = [];
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkOTM5ZDYxMDU0YWRiNjRlYTQ2NTMxZCIsImVtYWlsIjoiYWxhYWFsc2hhbXk5NEBvdXRsb29rLmNvbSIsInBhc3N3b3JkIjoidG9Eb1Bhc3N3b3JkNSIsIl9fdiI6MH0sImlhdCI6MTU2OTk1NTY5N30.uPZ5r-LBGfkUFRUBeLfkJ6Us_yRhDn-BiYUqj1zOfmI"
  postedBy="5d939d61054adb64ea46531d"
  constructor(private dataService: DataService) {
   }
  ngOnInit() {
    this.dataService.getUserCarts({postedBy:this.postedBy},this.token)
    .subscribe((cart: ToDoCart[]) => this._toDoList = cart);
  }
}
