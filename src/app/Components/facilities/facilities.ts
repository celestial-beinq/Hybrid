import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface FacilityFeature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './facilities.html',
  styleUrl: './facilities.css',
})
export class Facilities {
  learningPoints: string[] = [
    'Engaging classroom instruction that strengthens understanding and academic excellence',
    'Structured learning pathways that support every student’s growth and potential',
    'Regular academic assessments and constructive feedback for continuous improvement',
    'Opportunities for teamwork, leadership development, and positive peer interaction',
    'Guidance from experienced, dedicated, and values-driven educators'
  ];
}
