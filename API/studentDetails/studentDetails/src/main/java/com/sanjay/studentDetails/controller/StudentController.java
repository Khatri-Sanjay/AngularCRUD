package com.sanjay.studentDetails.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sanjay.studentDetails.Dto.StudentCreateDto;
import com.sanjay.studentDetails.Dto.StudentListResponseDto;
import com.sanjay.studentDetails.Dto.StudentResponseDto;
import com.sanjay.studentDetails.Dto.StudentUpdateDto;
import com.sanjay.studentDetails.service.StudentService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@PostMapping
	@ResponseStatus (code = HttpStatus.OK)
	
	public StudentResponseDto addStudent(@RequestBody StudentCreateDto studentCreateDto) {
		return studentService.addStudent(studentCreateDto);
	}
	
	@GetMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public StudentListResponseDto getStudents() {
		return studentService.getStudents();
	}

	@GetMapping("/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public StudentResponseDto getStudentById(@PathVariable("id") long id) {
		return studentService.getStudentById(id);
	}

	@PutMapping("/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public StudentResponseDto updateStudents(@PathVariable("id") long id, @RequestBody StudentUpdateDto userUpdateDto) {
		return studentService.updateStudents(id, userUpdateDto);
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public void deleteByUserId(@PathVariable long id) throws Exception {
		studentService.deleteByStudentId(id);
	}


}
