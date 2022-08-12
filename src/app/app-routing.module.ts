import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'ng-devui';
import { LayoutDefaultComponent } from './layout/layout-default/layout-default.component';

const routes: Routes = [
  {path: '', component: LayoutDefaultComponent, 
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
      },
      {
        path: 'archive',
        loadChildren: () => import('./pages/archive/archive.module').then(m => m.ArchiveModule)
      },
      {
        path: 'article/:id',
        loadChildren: () => import('./pages/article/article.module').then(m => m.ArticleModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
