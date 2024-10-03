import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0); // Scroll to the top
  }
}
