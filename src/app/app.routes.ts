import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { AboutPage } from './Pages/about/about';
import { AcademicsPage } from './Pages/academics/academics';
import { GalleryPage } from './Pages/gallery/gallery';
import { ContactPage } from './Pages/contact/contact';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: AboutPage },
  { path: 'academics', component: AcademicsPage },
  { path: 'gallery', component: GalleryPage },
  { path: 'contact', component: ContactPage },
  { path: 'apply', redirectTo: 'contact', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
