import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminUserService } from '../../../services/admin-user.service';

@Component({
  templateUrl: './usuario-u.component.html',
  styleUrls: ['./usuario-u.component.scss']
})
export class UsuarioUComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: AdminUserService) { }

  ngOnInit(): void {
  }

}
