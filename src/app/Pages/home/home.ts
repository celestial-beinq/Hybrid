import { Component } from '@angular/core';
import { Hero } from '../../Components/hero/hero';
import { About } from '../../Components/about/about';
import { Activities } from '../../Components/activities/activities';
import { Gallery } from '../../Components/gallery/gallery';
import { Action } from '../../Components/action/action';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Activities, Gallery, Action, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
