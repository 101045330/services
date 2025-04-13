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
  ngOnInit(): void { }

  /*onCategoryChange(category: string) {
    if (category) {
      this.router.navigate(['/product-categories', category]);
    }
  }*/
/*
  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const category = selectElement.value;
    if (category) {
      this.router.navigate(['/product-categories', category]);
    }
  }
*/

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement | null;
    const category = selectElement?.value; // Use optional chaining to handle null
    if (category) {
      this.router.navigate(['/product-categories', category]);
    }
  }

}
