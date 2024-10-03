import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import the components
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BlogComponent } from './blog/blog.component';
import { SystemDesignComponent } from './system-design/system-design.component';
import { ClientCommentComponent } from './client-comment/client-comment.component';
import { CloudComponent } from './cloud/cloud.component';
import { NetworkingComponent } from './networking/networking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactusComponent,
    FooterComponent,
    HeaderComponent,
    BlogComponent,
    SystemDesignComponent,
    ClientCommentComponent,
    CloudComponent,
    NetworkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
