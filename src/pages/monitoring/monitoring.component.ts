import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MouseEventsOnMapDirective } from '../../directives/mouse-events-on-map.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    MouseEventsOnMapDirective,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss',
})
export class MonitoringComponent {
  btnData = [
    {
      top: 39.4,
      bottom: 0,
      left: 602.5,
      right: 0,
      isActive: true,
      stationId: '0101',
      stationName: 'Velmugugan Nagar',
    },
    {
      top: 40,
      bottom: 0,
      left: 654.5,
      right: 0,
      isActive: true,
      stationId: '0102',
      stationName: 'Manjambakkam',
    },
    {
      top: 40,
      bottom: 0,
      left: 718,
      right: 0,
      isActive: false,
      stationId: '0103',
      stationName: 'Assissi Nagar',
    },

    {
      top: 40,
      bottom: 0,
      left: 781,
      right: 0,
      isActive: true,
      stationId: '0104',
      stationName: 'Venugopal Nagar',
    },
    {
      top: 46,
      bottom: 0,
      left: 837,
      right: 0,
      isActive: true,
      stationId: '0105',
      stationName: 'Madhavaram Milk Colony',
    },
    {
      top: 79,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0106',
      stationName: 'Thapalpetti',
    },
    {
      top: 112,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0107',
      stationName: 'Madhavaram High Road',
    },
    {
      top: 142,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0108',
      stationName: 'Moolakadai',
    },
    {
      top: 172,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0109',
      stationName: 'Sembiyam',
    },
    {
      top: 202,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0110',
      stationName: 'Perambur Market',
    },
    {
      top: 238,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0111',
      stationName: 'Perambur Metro',
    },
    {
      top: 269,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0112',
      stationName: 'Ayanavaram',
    },
    {
      top: 300,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0113',
      stationName: 'Otteri',
    },
    {
      top: 331,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0114',
      stationName: 'Pattalam',
    },
    {
      top: 361,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0115',
      stationName: 'Perambur Barracks Road',
    },
    {
      top: 391,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0116',
      stationName: 'Purasaiwakkam',
    },
    {
      top: 422,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0117',
      stationName: 'Kelleys',
    },
    {
      top: 462,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0118',
      stationName: 'Kilpauk',
    },
    {
      top: 500,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0119',
      stationName: 'Chetpet Metro',
    },
    {
      top: 533,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0120',
      stationName: 'Chetpet',
    },
    {
      top: 570,
      bottom: 0,
      left: 838,
      right: 0,
      isActive: true,
      stationId: '0121',
      stationName: 'Sterling Road Jn',
    },
  ];
}