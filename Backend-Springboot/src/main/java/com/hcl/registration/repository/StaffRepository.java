package com.hcl.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.registration.model.Staff;


public interface StaffRepository extends JpaRepository<Staff, Long> {
}