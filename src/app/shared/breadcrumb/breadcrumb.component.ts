// Core
import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
// Pipes
import { filter, map } from 'rxjs/operators';
import { Title, MetaDefinition, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  title: string;
  description: string;
  keywords: string;

  constructor(
    private _router: Router,
    private _meta: Meta,
    private _title: Title
  ) {
      this.getDataRouter().subscribe( data => {
        this.title = data.title;
        this.description = data.description;
        this.keywords = data.keywords;
        this.seo();
      });
  }

  ngOnInit() {
  }

  getDataRouter() {
    return this._router.events
      .pipe(
        filter( value  => value instanceof ActivationEnd ),
        filter( ( value: ActivationEnd ) => value.snapshot.firstChild === null ),
        map( data => data.snapshot.data )
      );
  }

  seo() {
    const META: MetaDefinition = { name: 'description', content : this.description };

    this._title.setTitle(this.title);
    this._meta.updateTag(META);
  }

}
