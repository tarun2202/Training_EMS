import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  validateForm!: FormGroup;
  id: any = this.activatedRoute.snapshot.params['id']

  constructor(private userService: UserService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      emailId: [null, [Validators.email, Validators.required]]
    })
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.id).subscribe((res) => {
      console.log(res);
      this.validateForm.patchValue(res);
    })
  }

  updateUser() {
    this.userService.updateUser(this.id, this.validateForm.value).subscribe(res => {
      console.log(res)
      this.router.navigate(['/']);
    })
  }


}
