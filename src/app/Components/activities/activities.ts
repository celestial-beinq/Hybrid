import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ActivityCard {
  title: string;
  category: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.html',
  styleUrl: './activities.css',
})
export class Activities {
  activities: ActivityCard[] = [
    {
      title: 'MUSIC & ORCHESTRA',
      category: 'CREATIVE ARTS',
      image: 'images/IMG_4338.JPG',
      description: 'Chamber orchestra, choir, and instrumental mastery under classical tutors.'
    },
    {
      title: 'DEBATE & PRESS CLUB',
      category: 'COMMUNICATION',
      image: 'images/activity-debate.JPG',
      description: 'State championship debating, public speaking, and student journalism.'
    },
    {
      title: 'SPORTS & ATHLETICS',
      category: 'PHYSICAL WELLNESS',
      image: 'images/IMG_4342.JPG',
      description: 'Inter-house tournaments, soccer team, track & field, and basketball.'
    },
    {
      title: 'ROBOTICS & CODING',
      category: 'STEM INNOVATION',
      image: 'images/IMG_4343.JPG',
      description: 'AI prototyping, robotics engineering, and software programming challenges.'
    }
  ];
}
