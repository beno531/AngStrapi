import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import ARTICLES_QUERY from "../../apollo/queries/article/articleshowcase";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-articleshowcase',
  templateUrl: './articleshowcase.component.html',
  styleUrls: ['./articleshowcase.component.css']
})
export class ArticleshowcaseComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;

  private queryArticles: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.queryArticles = this.apollo
      .watchQuery({
        query: ARTICLES_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy() {
    this.queryArticles.unsubscribe();
  }
}
