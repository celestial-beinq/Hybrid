import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Facilities } from '../facilities/facilities';
import { Pillars } from '../pillars/pillars';

export interface WhyChooseItem {
  icon: string; // SVG path or bootstrap icon class
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, Facilities, Pillars],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  features: WhyChooseItem[] = [
    {
      icon: 'bi-journal-bookmark-fill',
      title: 'Blended Dual Curriculum',
      description: 'A rich integration of the Nigerian National (NERDC) and British Cambridge curricula, ensuring mastery for WAEC, NECO, BECE, and Cambridge IGCSE.'
    },
    {
      icon: 'bi-cpu-fill',
      title: 'Modern STEM & Robotics Labs',
      description: 'Fully equipped physics, chemistry, and biology labs alongside coding, artificial intelligence, and robotics hubs for practical scientific discovery.'
    },
    {
      icon: 'bi-award-fill',
      title: 'Passionate, Certified Faculty',
      description: 'Seasoned, TRCN-certified educators and experienced WAEC examiners who mentor students with patience, passion, and individual academic support.'
    },
    {
      icon: 'bi-trophy-fill',
      title: 'Proven Academic Excellence',
      description: 'A sterling record of straight distinctions in WASSCE, 300+ scores in JAMB/UTME, and seamless admissions into premier Nigerian and global universities.'
    },
    {
icon: 'bi-mortarboard-fill',
title: 'Excellence-Focused Learning',
description: 'A dynamic learning environment where students receive personalized attention, build strong academic foundations, and develop the confidence and skills to excel.'
},

    {
      icon: 'bi-stars',
      title: 'Character & Leadership',
      description: 'Grounded in strong moral discipline, debate societies, JET club, sports tournaments, and leadership programs that nurture wholesome, future-ready young leaders.'
    }
  ];
}
