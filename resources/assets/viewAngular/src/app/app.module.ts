import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';

import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,

    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatBadgeModule,
  ],
  providers: [
    PostService,
    {provide:APP_BASE_HREF, useValue:'../../../public/js'}
  ],

  entryComponents : [
    PostDialogComponent
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
