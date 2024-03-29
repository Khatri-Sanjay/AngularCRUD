import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students:Student[]=[];
  head: Array<any> = new Array<any>(
    {'Head': 'Name', 'FieldName' : 'name'},
    {'Head': 'Email', 'FieldName' : 'email'},
    {'Head': 'DOB', 'FieldName' : 'dateOfBirth'},
    {'Head': 'Contact', 'FieldName' : 'contact'},
    {'Head': 'Address', 'FieldName' : 'address'},
    {'Head': 'Details', 'FieldName' : 'details'}
  );

  fileName = 'ExcelSheet.xlsx'

  constructor(
    private service: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  public getStudent(){
    this.service.listAllStudent().subscribe((data:any)=>{
      this.students=data.student;
    });
  }

  onDelete(id: any){

    this.service.deleteStudentById(id).subscribe(
      {
        next: (response: any) => {
          this.getStudent();
          console.log('Delete succesfully Done');
        }, error: (ree:any) =>{
          console.log('unable to delete user');
        }
      }
    );
  }


  onEditClick(id: any){
    this.router.navigate(['/edit-student', id]);
  }

  onViewClick(id: any){
    this.router.navigate(['/view-student', id]);
  }

  exportExcell(): void{
    // let element = document.getElementById('excel_table');
    // const ws: XLSX.
  }

}
