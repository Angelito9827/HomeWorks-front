import { Component } from '@angular/core';
import { HouseListComponent } from './house-list/house-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HouseListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
