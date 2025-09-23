import { Routes } from '@angular/router';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';

export const routes: Routes = [
    { 
        path:'Login',
        component: PessoaLoginComponent,
        title:'Login'
    }
];
