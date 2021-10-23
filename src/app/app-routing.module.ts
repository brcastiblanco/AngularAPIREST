import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { postsOfUsersComponent } from "./vistas/postsOfUsers/postsOfUsers.component";
import { CommentsComponent } from './vistas/comments/comments.component';

const routes: Routes = [
  { path: '', redirectTo: 'postsOfUsers', pathMatch: 'full' },
  { path: 'postsOfUsers', component:postsOfUsersComponent },
  { path: 'comments/:id', component:CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [postsOfUsersComponent, CommentsComponent];