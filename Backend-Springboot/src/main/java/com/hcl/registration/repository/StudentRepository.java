package com.hcl.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.registration.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}