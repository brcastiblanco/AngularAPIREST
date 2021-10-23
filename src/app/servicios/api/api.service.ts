import { Injectable } from '@angular/core';

import { ListapostI } from "../../modelos/listapost.interface";
import { ListauserI } from "../../modelos/listauser.interface";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ListacommentsI } from 'src/app/modelos/listacomments.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://jsonplaceholder.typicode.com";

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<ListauserI[]> {
    let dir = this.url + "/users";
    return this.http.get<ListauserI[]>(dir);
  }

  getAllPosts():Observable<ListapostI[]> {
    let dir = this.url + "/posts";
    return this.http.get<ListapostI[]>(dir);
  }

  getAllPost(userSelectedID:number):Observable<ListapostI[]> {
    let dir = this.url + "/posts?userId=" + userSelectedID;
    return this.http.get<ListapostI[]>(dir);
  }

  getAllComments(postSelectedID:number):Observable<ListacommentsI[]> {
    let dir = this.url + "/comments?postId=" + postSelectedID;
    return this.http.get<ListacommentsI[]>(dir);
  }
}
