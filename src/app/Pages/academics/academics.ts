import { Component, Inject, PLATFORM_ID, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../Components/navbar/navbar';
import { Footer } from '../../Components/footer/footer';

export interface CoreSubject {
  name: string;
  icon: string;
}

export interface EnrichmentActivity {
  name: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-academics-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Navbar, Footer],
  templateUrl: './academics.html',
  styleUrl: './academics.css',
})
export class AcademicsPage implements OnInit, OnDestroy {
  private isBrowser: boolean;

  // Admission Form State
  admissionForm = {
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    targetClass: 'Primary',
    notes: ''
  };
  formSubmitted = false;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  submitAdmission(): void {
    if (this.admissionForm.parentName && this.admissionForm.phone && this.admissionForm.studentName) {
      this.formSubmitted = true;
      this.cdr.markForCheck();
    }
  }

  resetAdmissionForm(): void {
    this.admissionForm = {
      parentName: '',
      email: '',
      phone: '',
      studentName: '',
      targetClass: 'Primary',
      notes: ''
    };
    this.formSubmitted = false;
    this.cdr.markForCheck();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  // Core areas of learning
  coreSubjects: CoreSubject[] = [
    { name: 'English Language and Communication', icon: 'bi-chat-quote-fill' },
    { name: 'Mathematics', icon: 'bi-calculator-fill' },
    { name: 'Basic Science and Technology', icon: 'bi-lightbulb-fill' },
    { name: 'Social Studies', icon: 'bi-people-fill' },
    { name: 'Civic Education', icon: 'bi-flag-fill' },
    { name: 'Computer Studies and Digital Literacy', icon: 'bi-laptop-fill' },
    { name: 'Religious and Moral Education', icon: 'bi-book-fill' },
    { name: 'Creative Arts', icon: 'bi-palette-fill' },
    { name: 'Physical and Health Education', icon: 'bi-heart-pulse-fill' },
    { name: 'Home Economics', icon: 'bi-house-heart-fill' },
    { name: 'Agricultural Science', icon: 'bi-tree-fill' },
    { name: 'Business Studies', icon: 'bi-briefcase-fill' },
    { name: 'Cultural and Creative Studies', icon: 'bi-music-note-beamed' },
  ];

  // Examinations
  examinations: string[] = [
    'West African Senior School Certificate Examination (WASSCE)',
    'National Examinations Council (NECO)',
    'Joint Admissions and Matriculation Board (JAMB)',
    'Common Entrance Examinations',
    'Other approved examinations relevant to their level of study',
  ];

  // Beyond classroom activities
  enrichmentActivities: EnrichmentActivity[] = [
    { name: 'Debate, Public Speaking & MUN', icon: 'bi-megaphone-fill', category: 'Leadership' },
    { name: 'Educational Excursions & Field Trips', icon: 'bi-compass-fill', category: 'Exploration' },
    { name: 'Inter-School Competitions & Olympiads', icon: 'bi-trophy-fill', category: 'Excellence' },
    { name: 'Sporting Activities & Athletics', icon: 'bi-dribbble', category: 'Athletics' },
    { name: 'Academic Clubs & STEM Societies', icon: 'bi-cpu-fill', category: 'Innovation' },
    { name: 'Creative & Performing Arts Programmes', icon: 'bi-palette-fill', category: 'Creativity' },
    { name: 'Student Leadership Initiatives', icon: 'bi-person-badge-fill', category: 'Governance' },
    { name: 'Community Service & Social Impact', icon: 'bi-heart-fill', category: 'Character' },
  ];
}

// Export alias for test compatibility
export const Academics = AcademicsPage;
