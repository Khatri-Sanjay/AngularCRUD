import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  studentDetails: any;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      console.log("current route details: ", res);
      this.getStudentDetailsByStudentId(res?.id);
    });
  }

  getStudentDetailsByStudentId(userId: number) {
    this.studentService.getStudentDetailsByStudentId(userId).subscribe({
      next: (response: any) => {
        this.studentDetails = response;
      }
    });
  }

  onGoback(){
    this.router.navigate(['/student-list'])
  }

}
