import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryItem {
  id: number;
  title: string;
  category: 'all' | 'academics' | 'sports' | 'arts' | 'innovation';
  categoryLabel: string;
  image: string;
  spanClass?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  activeCategory: string = 'all';

  categories = [
    { id: 'all', label: 'ALL MOMENTS' },
    { id: 'academics', label: 'ACADEMICS & LABS' },
    { id: 'sports', label: 'SPORTS & ATHLETICS' },
    { id: 'arts', label: 'ARTS & CULTURE' },
    { id: 'innovation', label: 'STEM & ROBOTICS' }
  ];

  galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'State Debate Championship Finals',
      category: 'arts',
      categoryLabel: 'PUBLIC SPEAKING',
      image: 'images/activity-debate.JPG',
      spanClass: 'span-tall'
    },
    {
      id: 2,
      title: 'Chamber Orchestra Rehearsals',
      category: 'arts',
      categoryLabel: 'MUSIC & ARTS',
      image: 'images/IMG_4338.JPG',
      spanClass: 'span-normal'
    },
    {
      id: 3,
      title: 'Inter-House Sports Football Match',
      category: 'sports',
      categoryLabel: 'SPORTS ARENA',
      image: 'images/IMG_4342.JPG',
      spanClass: 'span-wide'
    },
    {
      id: 4,
      title: 'Biology & Chemistry Practical Class',
      category: 'academics',
      categoryLabel: 'SCIENCE LAB',
      image: 'images/campus-science-lab.jpg',
      spanClass: 'span-tall'
    },
    {
      id: 5,
      title: 'Robotics Assembly & Python Coding',
      category: 'innovation',
      categoryLabel: 'INNOVATION HUB',
      image: 'images/IMG_4343.JPG',
      spanClass: 'span-normal'
    },
    {
      id: 6,
      title: 'E-Library Research & Group Study',
      category: 'academics',
      categoryLabel: 'ACADEMIC STUDY',
      image: 'images/IMG_4344.JPG',
      spanClass: 'span-normal'
    },
    {
      id: 7,
      title: 'Focused Classroom Instruction',
      category: 'academics',
      categoryLabel: 'CLASSROOM',
      image: 'images/hero-slide-1.jpg',
      spanClass: 'span-normal'
    },
    {
      id: 8,
      title: 'Collaborative Peer Learning',
      category: 'innovation',
      categoryLabel: 'SCHOOL LIFE',
      image: 'images/IMG_4345.JPG',
      spanClass: 'span-wide'
    }
  ];

  get filteredItems(): GalleryItem[] {
    if (this.activeCategory === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }
}
