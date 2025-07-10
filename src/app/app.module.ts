import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPostsPipe } from './application/use-cases/filter-posts.pipe';
import { PostsComponent } from './presentation/components/posts/posts.component';
import { HighlightPipe } from './application/use-cases/highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FilterPostsPipe,
    HighlightPipe
    ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
