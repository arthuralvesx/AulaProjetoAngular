import { Component } from '@angular/core';
import { CardItemComponent } from '../../shared/card-item/card-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo: string = "Bem-vindos!";

  items: string[] = [];

  constructor() {
    this.items.push('assets/images/alexas.png');
    this.items.push('assets/images/notebook.png');
    this.items.push('assets/images/headphone.png');
    this.items.push('assets/images/keyboard.png');
  }

}