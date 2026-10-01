import { Routes } from '@angular/router';

import { Home } from './home/home';

import { Students } from './students/students';

import { StudentDetail } from './student-detail/student-detail';


export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'students',
    component: Students
  },

  {
    path: 'students/:id',
    component: StudentDetail
  }

];
