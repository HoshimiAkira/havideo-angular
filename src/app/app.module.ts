import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuideComponent } from './guide/guide.component';
import { WebService } from './web.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin/admin.component';
import { UploadComponent } from './upload/upload.component';
import { SearchComponent } from './search/search.component';
import { VideoListComponent } from './video-list/video-list.component';
import { SingleVideoComponent } from './single-video/single-video.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { DeleteComponent } from './delete/delete.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GuideComponent,
    ListComponent,
    AdminComponent,
    UploadComponent,
    SearchComponent,
    VideoListComponent,
    SingleVideoComponent,
    SubtitleComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [WebService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
