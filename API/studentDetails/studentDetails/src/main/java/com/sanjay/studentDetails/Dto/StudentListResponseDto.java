package com.sanjay.studentDetails.Dto;

import java.util.List;

public class StudentListResponseDto {
	
	private List<StudentResponseDto> student;
	private long total;
	
	
	public List<StudentResponseDto> getStudent() {
		return student;
	}
	public void setStudent(List<StudentResponseDto> student) {
		this.student = student;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	
	

}
