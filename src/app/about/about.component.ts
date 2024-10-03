import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  ngOnInit(): void {
    window.scrollTo(0, 0); // Scroll to the top
  }
}
