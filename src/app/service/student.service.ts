import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getUserDetailsByStudentId(studentId: any) {
    throw new Error('Method not implemented.');
  }

  apiUrlEndPoint: string = '';
  baseUrl: string = environment.baseUrl;

  constructor(
    private httpClient : HttpClient
  ) { }

  listAllStudent():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl)
  }

  onAddStudent(student:any):Observable<any>{
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.apiUrlEndPoint),student
    );
  }

  deleteStudentById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/' + `${id}`);
  }

  getStudentDetailsByStudentId(id: number) : Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/' + `${id}`);
  }

  editStudentDetailsByStudentId(id: number, studentDetails: any) : Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/' + `${id}`, studentDetails);
  }
}
