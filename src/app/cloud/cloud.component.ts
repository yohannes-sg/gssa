import { Component } from '@angular/core';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0); // Scroll to the top
  }
}
