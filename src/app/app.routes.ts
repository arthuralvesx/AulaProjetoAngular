import { Routes } from '@angular/router';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoFormComponent } from './pages/produto-form/produto-form.component';

export const routes: Routes = [
    { 
        path:'pessoas/login',
        component: PessoaLoginComponent,
        title:'Login'
    },
    { 
        path:'pessoas/pessoalistagem',
        component: PessoaListagemComponent,
        title:'pessoalistagem'
    },
     { 
        path:'pessoas/pessoaform',
        component: PessoaFormComponent,
        title:'pessoaform'
    },
     { 
        path:'',
        component: HomeComponent,
        title:'home'
    }
    ,
    {
        path: 'produtos/inserir',
        component: ProdutoFormComponent,
        title: 'Produtos - inserir',
    }
];
