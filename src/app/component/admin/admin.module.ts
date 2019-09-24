import {MatTableModule} from '@angular/material/table';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminNavComponent} from './admin-nav/admin-nav.component';
import {PlacesComponent} from './places/places.component';
import {UsersComponent} from './users/users.component';
import {NgFlashMessagesModule} from 'ng-flash-messages';
import {ErrorComponent} from '../general/error/error.component';
import {BrowserModule} from '@angular/platform-browser';
import {IconsModule, TableModule} from 'angular-bootstrap-md';
import {NgxPaginationModule} from 'ngx-pagination';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatCheckboxModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSelectModule
} from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { PaginationModule } from 'ngx-bootstrap';
import {MatCheckboxModule, MatIconModule, MatPaginatorModule, MatSelectModule} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {PaginationModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {AgmCoreModule} from "@agm/core";
import {FormsModule} from "@angular/forms";
import {ProposeCafeComponent} from "../user/propose-cafe/propose-cafe.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {InterceptorService} from "../../service/interceptor.service";
import {AppComponent} from "../../app.component";
import {AdminComponent} from "./admin.component";
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ConfirmModalComponent} from './confirm-modal/confirm-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationDialogService} from './confirm-modal/confirmation-dialog-service.service';

@NgModule({
  declarations: [AdminNavComponent, PlacesComponent, UsersComponent, ErrorComponent, ConfirmModalComponent, UpdateCafeComponent],
  exports: [
    AdminNavComponent,
    UsersComponent,
    PlacesComponent,
    ErrorComponent,
    BrowserModule,
    TableModule
  ],
  imports: [
    CommonModule,
    NgFlashMessagesModule,
    NgxPaginationModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    IconsModule,
    MatCheckboxModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    NgSelectModule,
    MatCheckboxModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7q2v0VgRy60dAoItfv3IJhfJQEEoeqCI',
      libraries: ['places']
    }),
  ],
  providers: [ConfirmationDialogService],
  entryComponents: [ConfirmModalComponent]
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AdminComponent],
  entryComponents: [UpdateCafeComponent]
})
export class AdminModule {
}
