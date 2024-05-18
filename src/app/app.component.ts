import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang';
  features = [
    { title: 'Feature 1 Title', description: 'Detailed explanation of Feature 1'},
    { title: 'Feature 2 Title', description: 'Detailed explanation of Feature 2'},
   
  ];
}
