package com.hcl.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.registration.model.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}