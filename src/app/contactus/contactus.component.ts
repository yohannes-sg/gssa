import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0); // Scroll to the top
  }
}
