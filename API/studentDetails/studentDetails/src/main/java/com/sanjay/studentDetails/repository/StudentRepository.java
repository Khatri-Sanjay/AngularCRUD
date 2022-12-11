package com.sanjay.studentDetails.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sanjay.studentDetails.entity.StudentDetails;

public interface StudentRepository extends JpaRepository<StudentDetails, Long> {

}
