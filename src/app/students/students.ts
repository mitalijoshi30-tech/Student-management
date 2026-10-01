import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentService, Student } from '../services/student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  imports: [RouterLink, FormsModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {

  students: Student[] = [];

  studentName: string = '';
  studentEmail: string = '';

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  addStudent() {

    if (this.studentName.trim() === '' || this.studentEmail.trim() === '') {
      return;
    }

    const newStudent: Student = {
  id: this.students.length + 1,
  name: this.studentName,
  course: 'BCA',
  email: this.studentEmail,
  phone: 'Not provided'
};

    this.students.push(newStudent);

    this.studentName = '';
    this.studentEmail = '';

  }

}