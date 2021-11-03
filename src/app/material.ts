import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS } from '@angular/material/core';




@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatExpansionModule,
        MatDividerModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatTreeModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
        
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatExpansionModule,
        MatDividerModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatTreeModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: {useUtc: true}}
    ]
})
export class MaterialModule { }