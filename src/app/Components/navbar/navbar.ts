import { Component, HostListener, Inject, PLATFORM_ID, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  menuOpen = false;
  isScrolled = false;
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.checkScroll();
      window.addEventListener('scroll', () => this.checkScroll(), { passive: true });
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.cdr.markForCheck();
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.cdr.markForCheck();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    if (!this.isBrowser) return;
    const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const shouldBeScrolled = scrollPos > 20;
    if (this.isScrolled !== shouldBeScrolled) {
      this.isScrolled = shouldBeScrolled;
      this.cdr.detectChanges();
    }
  }
}
