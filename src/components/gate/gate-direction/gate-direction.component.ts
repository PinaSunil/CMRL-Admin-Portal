import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gate-direction',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './gate-direction.component.html',
  styleUrl: './gate-direction.component.scss',
})
export class GateDirectionComponent {
  @Input() gate: any;
}