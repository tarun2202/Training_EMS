import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './components/all-user/all-user.component';
import { PostUserComponent } from './components/post-user/post-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path: "", component: AllUserComponent
  },
  {
    path: "user", component: PostUserComponent
  },
  {
    path: "user/:id", component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
