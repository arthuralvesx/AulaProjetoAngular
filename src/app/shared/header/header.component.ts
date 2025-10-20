import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, MatToolbarModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  exibirLogo:boolean = true;

   itensMenu = [
   
      {label: 'Home' , link:''},
      {label: 'Cadastro' , link:'pessoas/incluir'},
      {label: 'Login' , link:'Login'},
      {label: 'Sobre' , link:'sobre'},
      {label: 'Ajuda' , link:'ajuda'}
  ]

}
