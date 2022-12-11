package com.sanjay.studentDetails.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sanjay.studentDetails.Dto.StudentCreateDto;
import com.sanjay.studentDetails.Dto.StudentListResponseDto;
import com.sanjay.studentDetails.Dto.StudentResponseDto;
import com.sanjay.studentDetails.Dto.StudentUpdateDto;
import com.sanjay.studentDetails.entity.StudentDetails;
import com.sanjay.studentDetails.repository.StudentRepository;


@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;

	public StudentResponseDto addStudent(StudentCreateDto studentCreateDto) {

		StudentDetails student = new StudentDetails();
		student.setName(studentCreateDto.getName());
		student.setEmail(studentCreateDto.getEmail());
		student.setDateOfBirth(studentCreateDto.getDateOfBirth());
		student.setContact(studentCreateDto.getContact());
		student.setAddress(studentCreateDto.getAddress());
		student.setImage(studentCreateDto.getImage());
		student.setFile(studentCreateDto.getFile());
		StudentDetails savedStudent = studentRepository.save(student);
		return getStudentResponseDto(savedStudent);
	}
	
	private StudentResponseDto getStudentResponseDto(StudentDetails student) {
		StudentResponseDto response = new StudentResponseDto();
		response.setId(student.getId());
		response.setName(student.getName());
		response.setEmail(student.getEmail());
		response.setDateOfBirth(student.getDateOfBirth());
		response.setContact(student.getContact());
		response.setAddress(student.getAddress());
		response.setImage(student.getImage());
		response.setFile(student.getFile());
		return response;
	}
	
	public StudentListResponseDto getStudents() {
		List<StudentResponseDto> studentResponseDto = new ArrayList<>();
		List<StudentDetails> students = (List<StudentDetails>) studentRepository.findAll();
		for (StudentDetails student : students) {
			studentResponseDto.add(getStudentResponseDto(student));
		}

		StudentListResponseDto response = new StudentListResponseDto();
		response.setStudent(studentResponseDto);
		response.setTotal((long) studentResponseDto.size());
		return response;
	}

	public StudentResponseDto updateStudents(long id, StudentUpdateDto studentUpdateDto) {
		Optional<StudentDetails> optionalStudent = studentRepository.findById(id);
		if (optionalStudent.isPresent()) {
			StudentDetails student = optionalStudent.get();
			student.setName(studentUpdateDto.getName());
			student.setEmail(studentUpdateDto.getEmail());
			student.setContact(studentUpdateDto.getContact());
			student.setDateOfBirth(studentUpdateDto.getDateOfBirth());
			student.setAddress(studentUpdateDto.getAddress());
			student.setImage(studentUpdateDto.getImage());
			student.setFile(studentUpdateDto.getFile());

			StudentDetails savedStudent = studentRepository.save(student);
			return getStudentResponseDto(savedStudent);
		}
		return null;
	}

	public StudentResponseDto getStudentById(long id) {
		Optional<StudentDetails> optionalStudent = studentRepository.findById(id);
		if (optionalStudent.isPresent()) {
			return getStudentResponseDto(optionalStudent.get());
		}
		return null;
	}

	public void deleteByStudentId(long id) throws Exception {

		Optional<StudentDetails> optionalStudent = studentRepository.findById(id);

		if (optionalStudent.isPresent()) {
//			StudentDetails student = optionalStudent.get();
			studentRepository.deleteById(id);
		} else {
			throw new Exception("User having id" + " " + id + " " + "is not available");
		}
	}


	

}
