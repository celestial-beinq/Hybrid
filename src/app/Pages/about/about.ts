import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../Components/navbar/navbar';
import { Footer } from '../../Components/footer/footer';
import { Pillars } from '../../Components/pillars/pillars';

export interface LeadershipMember {
  name: string;
  role: string;
  qualification: string;
  bio: string;
  image: string;
}

export interface ValueCard {
  title: string;
  icon: string;
  desc: string;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Navbar, Footer, Pillars],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutPage {
  stats = [
    { value: '15+', label: 'Years of Excellence', icon: 'bi-award' },
    { value: '100%', label: 'WAEC & IGCSE Pass Rate', icon: 'bi-patch-check' },
   { value: '5+', label: 'Extracurricular Activities', icon: 'bi-stars' },
    { value: '1,500+', label: 'Successful Alumni', icon: 'bi-mortarboard' },
  ];

  values: ValueCard[] = [
    {
      title: 'Blended Dual Curriculum',
      icon: 'bi-journal-bookmark-fill',
      desc: 'A rich integration of the Nigerian National (NERDC) and British Cambridge curricula, ensuring mastery for WAEC, NECO, BECE, and Cambridge IGCSE.',
    },
    {
      title: 'Modern STEM & Robotics Labs',
      icon: 'bi-cpu-fill',
      desc: 'Fully equipped physics, chemistry, and biology labs alongside coding, artificial intelligence, and robotics hubs for practical scientific discovery.',
    },
    {
      title: 'Passionate, Certified Faculty',
      icon: 'bi-award-fill',
      desc: 'Seasoned, TRCN-certified educators and experienced WAEC examiners who mentor students with patience, passion, and individual academic support.',
    },
    {
      title: 'Proven Academic Excellence',
      icon: 'bi-trophy-fill',
      desc: 'A sterling record of straight distinctions in WASSCE, 300+ scores in JAMB/UTME, and seamless admissions into premier Nigerian and global universities.',
    },
    {
      title: 'Excellence-Focused Learning',
      icon: 'bi-mortarboard-fill',
      desc: 'A dynamic learning environment where students receive personalized attention, build strong academic foundations, and develop the confidence and skills to excel.',
    },
    {
      title: 'Character & Leadership',
      icon: 'bi-stars',
      desc: 'Grounded in strong moral discipline, debate societies, JET club, sports tournaments, and leadership programs that nurture wholesome, future-ready young leaders.',
    },
  ];

  leadership: LeadershipMember[] = [
    {
      name: 'Dr. (Mrs.) Adebayo Olufunke',
      role: 'Principal & Head of School',
      qualification: 'Ph.D. Educational Leadership, M.Ed. (Oxon), B.Sc. (Unilag)',
      bio: 'Over 22 years pioneering secondary educational reforms across top private institutions in Lagos and the UK.',
      image: 'images/hero-2.JPG',
    },
    {
      name: 'Mr. Chukwuma Emmanuel',
      role: 'Vice Principal (Academics)',
      qualification: 'M.Sc. Applied Mathematics, PGDE, B.Sc. (UI)',
      bio: 'Lead Cambridge IGCSE and WAEC curriculum coordinator with exceptional track record in STEM distinctions.',
      image: 'images/hero-slide-1.jpg',
    },
    {
      name: 'Mrs. Folashade Danjuma',
      role: 'Head of Student Welfare & Pastoral Care',
      qualification: 'M.A. Child Psychology, B.Ed. Guidance & Counseling',
      bio: 'Dedicated to character modeling, student mental health, and mentorship programs for future leaders.',
      image: 'images/activity-debate.JPG',
    },
  ];
}
