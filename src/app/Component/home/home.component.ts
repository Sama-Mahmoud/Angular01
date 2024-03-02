import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username:string = "Sama mahmoud"
  slider1src:string = "assets/Images/slider1.jpg"
  slider2src:string = "assets/Images/slider2.jpg"
  slider3src:string = "assets/Images/slider3.jpg"
  logosrc:string = "assets/Images/S_logo.jpg"
  descriptiom:string = "Results-driven and highly motivated Full Stack .NET Developer with a solid foundation gained through the ITI Course Intensive Code Camp program. Possessing a diverse skill set encompassing both front-end and back-end development, I am well-versed in creating robust and scalable applications using the Microsoft .NET technology stack. "
  desccolor:string = "grey"

  applygrey :boolean=true;
}
