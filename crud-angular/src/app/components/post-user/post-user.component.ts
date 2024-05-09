// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from 'src/app/services/user.service';

// @Component({
//   selector: 'app-post-user',
//   templateUrl: './post-user.component.html',
//   styleUrls: ['./post-user.component.css']
// })
// export class PostUserComponent {

//   validateForm!: FormGroup;

//   constructor(private userService: UserService,
//     private fb: FormBuilder) { }

//   ngOnInit() {
//     this.validateForm = this.fb.group({
//       firstName: [null, [Validators.required]],
//       lastName: [null, [Validators.required]],
//       emailId: [null, [Validators.email, Validators.required]]
//     })
//   }

//   postUser() {
//     this.userService.postUser(this.validateForm.value).subscribe(res => {
//       console.log(res)
//     })
//   }

// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent {

  validateForm!: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) { }  // Inject Router service

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      emailId: [null, [Validators.email, Validators.required]]
    });
  }

  postUser() {
    this.userService.postUser(this.validateForm.value).subscribe(res => {
      console.log(res);
      // After successful post, navigate back to getAllEmployee page
      this.router.navigate(['/']); // Assuming getAllEmployee route
    });
  }
}


// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router'; // Import Router for navigation
// import { UserService } from 'src/app/services/user.service';

// @Component({
//   selector: 'app-post-user',
//   templateUrl: './post-user.component.html',
//   styleUrls: ['./post-user.component.css']
// })
// export class PostUserComponent {

//   validateForm!: FormGroup;
//   notificationElement?: HTMLElement; // Element for notification

//   constructor(private userService: UserService,
//               private fb: FormBuilder,
//               private router: Router) { }

//   ngOnInit() {
//     this.validateForm = this.fb.group({
//       firstName: [null, [Validators.required]],
//       lastName: [null, [Validators.required]],
//       emailId: [null, [Validators.email, Validators.required]]
//     });

//     this.notificationElement = document.createElement('div');
//     this.notificationElement.classList.add('notification'); // Add CSS class
//   }

//   postUser() {
//     this.userService.postUser(this.validateForm.value).subscribe(res => {
//       const message = res.success ? 'Employee created successfully!' : 'Failed to create employee.';
//       this.showNotification(message);

//       setTimeout(() => {
//         this.router.navigate(['/']);
//       }, 2000); // Navigate after 2 seconds
//     });
//   }

//   private showNotification(message: string) {
//     if (this.notificationElement) {
//       this.notificationElement.textContent = message;
//       document.body.appendChild(this.notificationElement);

//       setTimeout(() => {
//         if (this.notificationElement) {
//           document.body.removeChild(this.notificationElement);
//         }
//       }, 2000); // Remove notification after 2 seconds
//     }
//   }
// }

