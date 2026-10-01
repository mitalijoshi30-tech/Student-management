import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  course: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    {
      id: 1,
      name: 'Rahul Sharma',
      course: 'BCA',
      email: 'rahul@gmail.com',
      phone: '9876543210'
    },
    {
      id: 2,
      name: 'Priya Singh',
      course: 'BSc',
      email: 'priya@gmail.com',
      phone: '9876543211'
    },
    {
      id: 3,
      name: 'Amit Patel',
      course: 'BTech',
      email: 'amit@gmail.com',
      phone: '9876543212'
    },
    {
      id: 4,
      name: 'Sneha Joshi',
      course: 'MCA',
      email: 'sneha@gmail.com',
      phone: '9876543213'
    }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }

}