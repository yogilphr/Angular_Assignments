import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1>Marvellous infosystem</h1>
            <input type="text" id="name" placeholder="Enter Name">
           `,
  styles: [`
         h1{ font-size:30px; font-family:arial; color:blue;}
        `]
})
export class AppComponent {
  title = 'Assignment6';
}
