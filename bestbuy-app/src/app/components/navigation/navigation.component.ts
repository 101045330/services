import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.addNavLinkClickListeners();
  }

  // Method to handle category change
  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement | null;
    const category = selectElement?.value; // Use optional chaining to handle null
    if (category) {
      this.router.navigate(['/product-categories', category]);
    }
  }

  // Method to get free photo URL
  getImageUrl(category: string): string {
    const query = encodeURIComponent(category.replace(/[^a-zA-Z ]/g, ''));
    return `https://loremflickr.com/400/300/${query}?lock=${Math.floor(Math.random() * 1000)}`;
  }

  // Method to add click listeners to navigation links
  private addNavLinkClickListeners(): void {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (mouseEvent.target as HTMLElement).getBoundingClientRect();
        (mouseEvent.target as HTMLElement).style.setProperty('--x', `${mouseEvent.clientX - rect.left}px`);
        (mouseEvent.target as HTMLElement).style.setProperty('--y', `${mouseEvent.clientY - rect.top}px`);
      });
    });
  }
}
