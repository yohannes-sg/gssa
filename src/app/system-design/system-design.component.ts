import { Component } from '@angular/core';

@Component({
  selector: 'app-system-design',
  templateUrl: './system-design.component.html',
  styleUrls: ['./system-design.component.css']
})
export class SystemDesignComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0); // Scroll to the top
  }
}
