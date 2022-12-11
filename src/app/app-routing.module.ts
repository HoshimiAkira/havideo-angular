import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin-guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth-guard';
import { DeleteComponent } from './delete/delete.component';
import { GuideComponent } from './guide/guide.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SingleVideoComponent } from './single-video/single-video.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { UploadComponent } from './upload/upload.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';

const routes: Routes = [
  {
    path:"guide",
    component:GuideComponent,
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register/:confirm",
    component:RegisterComponent
  },
  {
    path:"admin",
    component:AdminComponent,
    canActivate:[AuthGuard,AdminGuard]
  },
  {
    path:"upload",
    component:UploadComponent,
    canActivate:[AuthGuard,AdminGuard]
  },
  {
    path:"search",
    component:SearchComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"single/:id",
    component:SingleVideoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"subtitle",
    component:SubtitleComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"delete",
    component:DeleteComponent,
    canActivate:[AuthGuard,AdminGuard]
  },
  {
    path:"collection",
    component:CollectionComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"**",
    component:GuideComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
