import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';


import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SearchComponent } from "../../../components/search/search.component";
import { FabButtonFieldComponent } from "../../../components/fab-button-field/fab-button-field.component";
import { TableComponent } from "../../../components/table/table.component";

export interface UserData {
  id: string;
  equipmentID: number;
  acquirerID: number;
  opertatorID: number;
  terminalID: string;
  agentID: number;
  shiftID : number ;
  businessDate: string;
  shiftStartTime: string;
  shiftEndTime: string;
  viewReport: string;
  
}

/** Constants used to fill up our data base. */

interface StationName {
  name: string;
}

@Component({
    selector: 'app-shift-end-page',
    standalone: true,
    providers: [provideNativeDateAdapter()],
    templateUrl: './shift-end-page.component.html',
    styleUrl: './shift-end-page.component.scss',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatButtonModule,
        MatDatepickerModule,
        MatSelectModule,
        MatCardModule,
        MatMenuModule,
        PagetitleComponent,
        DropDownComponent,
        ButtonFieldComponent,
        ReactiveFormsModule,
        SearchComponent,
        FabButtonFieldComponent,
        TableComponent
    ]
})
export class ShiftEndPageComponent implements OnInit {
  shiftEndForm!: FormGroup; // new line added

  shiftEndTableData : {
    displayedColumns: string[]
    dataSource: MatTableDataSource<UserData>;
  } [] = [
    {
      displayedColumns: [
        'ID',
        'EQUIPMENTID',
        'ACQUIRERID',
        'OPERTATORID',
        'TERMINALID',
        'AGENTID',
        'SHIFTID',
        'BUSINESSDATE',
        'SHIFTSTARTTIME',
        'SHIFTENDTIME',
        'VIEWREPORT',
      ],
      dataSource: new MatTableDataSource<UserData>([
        {
          id: '1',
          equipmentID: 1006,
          acquirerID: 2,
          opertatorID: 6012,
          terminalID: '101C6',
          agentID: 1106,
          shiftID: 101370918,
          businessDate: '29-Feb-2023',
          shiftStartTime: '30-Dec-2023 09:35:29',
          shiftEndTime: '30-Dec-2023 10:35:29',
          viewReport: 'view_report'
        },
        {
          id: '2',
          equipmentID: 1005,
          acquirerID: 4,
          opertatorID: 6014,
          terminalID: '101C3',
          agentID: 1105,
          shiftID: 101370919,
          businessDate: '30-Mar-2024',
          shiftStartTime: '30-Oct-2023 12:35:29',
          shiftEndTime: '12-Oct-2023 12:35:29',
          viewReport: 'view_report'
        },
        {
          id: '3',
          equipmentID: 1002,
          acquirerID: 5,
          opertatorID: 6012,
          terminalID: '101C2',
          agentID: 1104,
          shiftID: 101370919,
          businessDate: '30-Mar-2024',
          shiftStartTime: '12-Mar-2023 10:35:29',
          shiftEndTime: '15-Mar-2024 10:35:29',
          viewReport: 'view_report'
        },
        {
          id: '4',
          equipmentID: 1009,
          acquirerID: 5,
          opertatorID: 6034,
          terminalID: '101C7',
          agentID: 1106,
          shiftID: 101370917,
          businessDate: '16-Jan-2023',
          shiftStartTime: '30-Dec-2023 09:35:29',
          shiftEndTime: '25-Apr-2023 12:14:29',
          viewReport: 'view_report'
        },
        {
          id: '5',
          equipmentID: 1002,
          acquirerID: 2,
          opertatorID: 6014,
          terminalID: '101C7',
          agentID: 1102,
          shiftID: 101370918,
          businessDate: '29-Feb-2023',
          shiftStartTime: '30-Oct-2023 12:35:29',
          shiftEndTime: '25-Apr-2024 12:14:29',
          viewReport: 'view_report'
        },
        {
          id: '6',
          equipmentID: 1001,
          acquirerID: 2,
          opertatorID: 6024,
          terminalID: '101C7',
          agentID: 1102,
          shiftID: 101370919,
          businessDate: '16-Jan-2023',
          shiftStartTime: '25-Apr-2023 12:14:29',
          shiftEndTime: '09-May-2024 11:11:11',
          viewReport: 'view_report'
        },
        {
          id: '7',
          equipmentID: 1001,
          acquirerID: 1,
          opertatorID: 6014,
          terminalID: '101C6',
          agentID: 1103,
          shiftID: 101370916,
          businessDate: '29-Feb-2023',
          shiftStartTime: '09-May-2024 11:11:11',
          shiftEndTime: '30-Dec-2023 10:35:29',
          viewReport: 'view_report'
        },
        {
          id: '8',
          equipmentID: 1099,
          acquirerID: 5,
          opertatorID: 6014,
          terminalID: '101C5',
          agentID: 1106,
          shiftID: 101370916,
          businessDate: '29-Feb-2023',
          shiftStartTime: '12-Mar-2023 10:35:29',
          shiftEndTime: '09-May-2024 11:11:11',
          viewReport: 'view_report'
        },
        {
          id: '9',
          equipmentID: 1010,
          acquirerID: 5,
          opertatorID: 6014,
          terminalID: '101C6',
          agentID: 1103,
          shiftID: 101370916,
          businessDate: '29-Feb-2023',
          shiftStartTime: '25-Apr-2023 12:14:29',
          shiftEndTime: '30-Dec-2023 09:35:29',
          viewReport: 'view_report'
        },
        {
          id: '10',
          equipmentID: 1086,
          acquirerID: 1,
          opertatorID: 6034,
          terminalID: '101C5',
          agentID: 1106,
          shiftID: 101370916,
          businessDate: '16-Jan-2023',
          shiftStartTime: '30-Oct-2023 12:35:29',
          shiftEndTime: '25-Apr-2023 12:14:29',
          viewReport: 'view_report'
        },
        {
          id: '11',
          equipmentID: 1003,
          acquirerID: 5,
          opertatorID: 6014,
          terminalID: '101C4',
          agentID: 1104,
          shiftID: 101370917,
          businessDate: '29-Feb-2023',
          shiftStartTime: '12-Mar-2023 10:35:29',
          shiftEndTime: '30-Dec-2023 09:35:29',
          viewReport: 'view_report'
        },
        {
          id: '12',
          equipmentID: 1005,
          acquirerID: 4,
          opertatorID: 6012,
          terminalID: '101C7',
          agentID: 1104,
          shiftID: 101370918,
          businessDate: '16-Jan-2023',
          shiftStartTime: '30-Oct-2023 12:35:29',
          shiftEndTime: '30-Dec-2023 09:35:29',
          viewReport: 'view_report'
        },
        {
          id: '13',
          equipmentID: 1034,
          acquirerID: 1,
          opertatorID: 6024,
          terminalID: '101C6',
          agentID: 1103,
          shiftID: 101370917,
          businessDate: '16-Jan-2023',
          shiftStartTime: '30-Oct-2023 12:35:29',
          shiftEndTime: '30-Dec-2023 10:35:29',
          viewReport: 'view_report'
        },
      ])
    }
  ]

  stationNames: StationName[] = [
    { name: 'nagole' },
    { name: 'uppal' },
    { name: 'stadium' },
    { name: 'NGRI' },
    { name: 'habsiguda' },
    { name: 'tarnaka' },
    { name: 'mettuguda' },
    { name: 'secunderabad' },
    { name: 'Parade Grounds' },
  ];

 
  ngOnInit(): void {
    this.shiftEndForm = new FormGroup({
      firstName: new FormControl(),
    });
  }

  constructor () {
    console.log(this.shiftEndTableData[1])
  }
  

}
