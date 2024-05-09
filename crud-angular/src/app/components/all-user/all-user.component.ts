import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {
  users: any[] = [];
  pageSize: number = 8; // Number of users per page
  currentPage: number = 1; // Current page number
  sortKey: string = ''; // Current sorting key
  sortDirection: number = 1; // Sorting direction (1 for ascending, -1 for descending)
  searchTerm: string = ''; // Search term for filtering users

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
      this.users = this.users.filter((user: any) => user.id !== id);
    });
  }

  get displayedUsers() {
    let filteredUsers = this.users;
    if (this.searchTerm) {
      filteredUsers = this.users.filter(user =>
        user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.emailId.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    const sortedUsers = filteredUsers.slice().sort((a, b) => {
      if (a[this.sortKey] < b[this.sortKey]) {
        return -1 * this.sortDirection;
      }
      if (a[this.sortKey] > b[this.sortKey]) {
        return 1 * this.sortDirection;
      }
      return 0;
    });

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, sortedUsers.length);
    return sortedUsers.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Array(Math.ceil(this.users.length / this.pageSize)).fill(0).map((x, i) => i + 1);
  }

  nextPage() {
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  sortUsers(key: string) {
    if (this.sortKey === key) {
      // Reverse the sorting direction if the same key is clicked again
      this.sortDirection = this.sortDirection === 1 ? -1 : 1;
    } else {
      this.sortKey = key;
      this.sortDirection = 1; // Default to ascending order when a new key is clicked
    }
  }
}

