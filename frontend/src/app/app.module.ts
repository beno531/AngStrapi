import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { ArticlesComponent } from './articles/articles.component';
import { MarkdownModule } from "ngx-markdown";
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ArticleshowcaseComponent } from './home/articleshowcase/articleshowcase.component';
import { EventshowcaseComponent } from './home/eventshowcase/eventshowcase.component';


const appRoutes: Routes = [
  { path: "", component: ArticlesComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "category/:id", component: CategoryComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticlesComponent,
    ArticleComponent,
    CategoryComponent,
    HomeComponent,
    ArticleshowcaseComponent,
    EventshowcaseComponent,
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
