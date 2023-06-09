import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { WebsiteComponent } from './website/website.component';
import { HomeComponent } from './website/home/home.component';
import { CardEmissionComponent } from './website/home/card-emission/card-emission.component';
import { EmissionComponent } from './website/emission/emission.component';
import { VideoComponent } from './website/video/video.component';
import { LiveComponent } from './website/live/live.component';
import { CardEpisodeComponent } from './website/video/card-episode/card-episode.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AuthComponent } from './website/auth/auth.component';
import { LoginComponent } from './website/auth/login/login.component';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { MediaComponent } from './website/media/media/media.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UploadingComponent } from './admin/uploading/uploading.component';
import { VideouploadeComponent } from './admin/videouploade/videouploade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WebsiteComponent,
    HomeComponent,
    CardEmissionComponent,
    EmissionComponent,
    VideoComponent,
    LiveComponent,
    CardEpisodeComponent,
    AuthComponent,
    LoginComponent,
    MediaComponent,
    DashboardComponent,
    UploadingComponent,
    VideouploadeComponent,
  ],
    imports: [BrowserModule, AppRoutingModule, NgxYoutubePlayerModule, FormsModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
