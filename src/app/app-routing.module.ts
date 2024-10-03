import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Create this component
import { AboutComponent } from './about/about.component'; // Create this component
import { ServiceComponent } from './service/service.component'; // Create this component
import { ContactusComponent } from './contactus/contactus.component'; // Create this component
import { BlogComponent } from './blog/blog.component';
import { SystemDesignComponent } from './system-design/system-design.component';
import { CloudComponent } from './cloud/cloud.component';
import { NetworkingComponent } from './networking/networking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'blogs/software-development', component: SystemDesignComponent },
  { path: 'blogs/cloud', component: CloudComponent },
  { path: 'blogs/networking', component: NetworkingComponent },
  { path: '**', redirectTo: '' } // Redirect to home for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
