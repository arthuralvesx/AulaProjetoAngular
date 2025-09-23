import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  updateField(event: KeyboardEvent): void {
    console.log(`The user pressed: ${event.key}`);
  }

  title: string = 'angularcrud';
  textoBotao: string = 'Clique Aqui';
  botaoDesabilitado: boolean = false;
  nome: string = 'Arthur';
  sobrenome: string = '';
  cidade: string = '';
  mensagem: string = '';

  onBotaoClicado() {
    this.mensagem = 'Você clicou no botão!';
  }

  onKeyUp(event: Event) {
    const input = event.target as HTMLInputElement;
    this.mensagem = `Olá ${input.value} !`;
  }

}
