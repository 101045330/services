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

  //  Method to handle category change
  // This method is triggered when the user selects a category from the dropdown
  // It retrieves the selected category and navigates to the corresponding route
  // The route is constructed using the selected category value
  // The method uses optional chaining to handle the case where the select element is null
  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement | null;
    const category = selectElement?.value; // Use optional chaining to handle null
    if (category) {
      this.router.navigate(['/product-categories', category]);
    }
  }

}
