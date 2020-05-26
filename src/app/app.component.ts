import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AprendiendoAngular';

  updateNameClasses(name:string){
    return {
      'error': name.length <= 3,
      'warning':name.length > 3 && name.length <= 6,
      'success': name.length >6,
      'bold':name.length>8
    }
  }
}
