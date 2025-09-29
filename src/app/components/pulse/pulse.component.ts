import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-pulse',
  imports: [],
  templateUrl: './pulse.component.html',
  styleUrl: './pulse.component.scss'
})
export class PulseComponent {
  text = input.required<string>();

}
