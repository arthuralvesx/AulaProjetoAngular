import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardActions, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-item',
  standalone: true, 
  imports: [ MatCardModule, MatButton],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {

   @Input() imageUrl: string = '';
  //listaImagensProdutos[] = [];
}
