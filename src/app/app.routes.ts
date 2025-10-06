import { Routes } from '@angular/router';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';

export const routes: Routes = [
    { 
        path:'Login',
        component: PessoaLoginComponent,
        title:'Login'
    },
    { 
        path:'pessoalistagem',
        component: PessoaListagemComponent,
        title:'pessoalistagem'
    },
     { 
        path:'pessoaform',
        component: PessoaFormComponent,
        title:'pessoalistagem'
    }
];
