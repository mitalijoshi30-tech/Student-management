import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import {
  StudentService,
  Student
} from '../services/student.service';

@Component({
  selector: 'app-student-detail',

  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css'
})
export class StudentDetail {

  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.student =
      this.studentService.getStudentById(id);
  }
}
