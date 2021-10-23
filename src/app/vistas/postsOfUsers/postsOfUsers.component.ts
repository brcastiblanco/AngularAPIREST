import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../servicios/api/api.service";

import { ListapostI } from "../../modelos/listapost.interface";
import { ListauserI } from "../../modelos/listauser.interface";

@Component({
  selector: 'app-postsOfUsers',
  templateUrl: './postsOfUsers.component.html',
  styleUrls: ['./postsOfUsers.component.scss']
})
export class postsOfUsersComponent implements OnInit {

  posts:ListapostI[];
  users:ListauserI[];
  userSelected:string = "";
  userFilter:any;
  pageActual:number = 1;
  itemsUsers = [{"name": "ID usuario","value": "id"},{"name": "Nombre","value": "name"},{"name": "Nombre usuario","value": "username"},{"name": "Correo","value": "email"},{"name": "Ciudad","value": "address.city"},{"name": "Sitio web","value": "website"},{"name": "Nombre compañia","value": "company.name"}];

  constructor(private api:ApiService) { 
    this.posts = [];
    this.users = [];
  }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(data =>{
      this.users = data;
    })

    this.api.getAllPosts().subscribe(data =>{
      this.posts = data;
    })
  }

  onUserSelected(selectedUserId:any):void {
    this.api.getAllPost(selectedUserId).subscribe(data =>{
      this.posts = data;
    })
  }

  onUser(userId:any):void {
    if(userId == "") {
      this.api.getAllPosts().subscribe(data =>{
        this.posts = data;
      })
    }
  }

}
