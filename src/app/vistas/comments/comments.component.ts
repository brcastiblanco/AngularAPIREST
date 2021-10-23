import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "../../servicios/api/api.service";

import { ListacommentsI } from "../../modelos/listacomments.interface";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments:ListacommentsI[];
  pageActual:number = 1;
  postID:any;

  constructor(private api:ApiService, private route:ActivatedRoute) { 
    this.comments = [];
    this.postID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.api.getAllComments(this.postID).subscribe(data =>{
      console.log(this.postID);
      this.comments = data;
      console.log(data);
    })
  }

}
