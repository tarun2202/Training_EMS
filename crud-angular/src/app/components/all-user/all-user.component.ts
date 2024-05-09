// import { Component } from '@angular/core';
// import { UserService } from 'src/app/services/user.service';

// @Component({
//   selector: 'app-all-user',
//   templateUrl: './all-user.component.html',
//   styleUrls: ['./all-user.component.css']
// })
// export class AllUserComponent {

//   users: any = [];

//   constructor(private userService: UserService) { }

//   ngOnInit() {
//     this.getAllUsers();
//   }

//   getAllUsers() {
//     this.userService.getAllUsers().subscribe(res => {
//       this.users = res;
//     })
//   }

//   deleteUser(id: any) {
//     this.userService.deleteUser(id).subscribe((res) => {
//       console.log(res);
//       this.getAllUsers();
      
//     })
//   }

// }

// import { Component } from '@angular/core';
// import { UserService } from 'src/app/services/user.service';
// import { Router } from '@angular/router'; // Import Router

// @Component({
//   selector: 'app-all-user',
//   templateUrl: './all-user.component.html',
//   styleUrls: ['./all-user.component.css']
// })
// export class AllUserComponent {

//   users: any = [];

//   constructor(private userService: UserService,
//               private router: Router) { }  // Inject Router

//   ngOnInit() {
//     this.getAllUsers();
//   }

//   getAllUsers() {
//     this.userService.getAllUsers().subscribe(res => {
//       this.users = res;
//     });
//   }

//   deleteUser(id: any) {
//     this.userService.deleteUser(id).subscribe((res) => {
//       console.log(res);
//       if (res.success) {  // Check for success in response data
//         this.getAllUsers();  // Refresh user list
//         this.router.navigate(['/']);  // Navigate to home page (assuming '/')
//       }
//       // Handle errors or display success message (optional)
//     });
//   }
// }

import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {

  users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe((res) => {
      console.log(res);
      // Remove the deleted user from the users array
      this.users = this.users.filter((user: any) => user.id !== id);
      this.userService.deleteUser(id).subscribe();
    });
  }

}
