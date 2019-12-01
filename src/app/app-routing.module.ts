import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  { path:'bookList', component: BookListComponent},
  { path:'update', component: UpdateComponent},
  { path:'', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
