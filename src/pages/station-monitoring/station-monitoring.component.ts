import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AutomaticGateComponent } from '../../components/gate/automatic-gate/automatic-gate.component';

@Component({
  selector: 'app-station-monitoring',
  standalone: true,
  imports: [MatCardModule, AutomaticGateComponent],
  templateUrl: './station-monitoring.component.html',
  styleUrl: './station-monitoring.component.scss',
})
export class StationMonitoringComponent {
  array1Data = [
    {
      array: '1',
      type: 'Entry',
      equipmentId: '0003',
      screenLocation: {
        isEntrySide: true,
      },
      direction: {
        isEntry: true,
      },
      status: {
        hasError: true,
      },
    },
    {
      array: '1',
      type: 'Entry',
      equipmentId: '0002',
      screenLocation: {
        isEntrySide: true,
      },
      direction: {
        isEntry: true,
      },
      status: {
        hasCommunicationBreak: true,
      },
    },
    {
      array: '1',
      type: 'Reversable',
      equipmentId: '0001',
      screenLocation: {
        isEntrySide: true,
        isExitSide: true,
      },
      direction: {
        isEntry: true,
        isExit: true,
      },
    },
  ];

  array2Data = [
    {
      array: '2',
      type: 'Exit',
      equipmentId: '0012',
      screenLocation: {
        isExitSide: true,
      },
      direction: {
        isExit: true,
      },
    },
    {
      array: '2',
      type: 'Exit',
      equipmentId: '0011',
      screenLocation: {
        isExitSide: true,
      },
      direction: {
        isExit: true,
      },
    },
  ];

  array3Data = [
    {
      array: '3',
      type: 'Exit',
      equipmentId: '0032',
      screenLocation: {
        isExitSide: true,
      },
      direction: {
        isExit: true,
      },
    },
    {
      array: '3',
      type: 'Exit',
      equipmentId: '0031',
      screenLocation: {
        isExitSide: true,
      },
      direction: {
        isExit: true,
      },
    },
  ];

  array4Data = [
    {
      array: '4',
      type: 'Entry',
      equipmentId: '0023',
      screenLocation: {
        isEntrySide: true,
      },
      direction: {
        isEntry: true,
      },
    },
    {
      array: '4',
      type: 'Entry',
      equipmentId: '0022',
      screenLocation: {
        isEntrySide: true,
      },
      direction: {
        isEntry: true,
      },
    },
    {
      array: '4',
      type: 'Reversable',
      equipmentId: '0021',
      screenLocation: {
        isEntrySide: true,
        isExitSide: true,
      },
      direction: {
        isEntry: true,
        isExit: true,
      },
    },
  ];
}
