import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import HOME_QUERY from "../apollo/queries/home/home";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;

  private queryHome: Subscription;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.queryHome = this.apollo
      .watchQuery({
        query: HOME_QUERY,
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });

      
  }
  ngOnDestroy() {
    this.queryHome.unsubscribe();
  }
}
