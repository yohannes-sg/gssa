import { Component } from '@angular/core';

@Component({
  selector: 'app-networking',
  templateUrl: './networking.component.html',
  styleUrls: ['./networking.component.css']
})
export class NetworkingComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0); // Scroll to the top
  }
}
