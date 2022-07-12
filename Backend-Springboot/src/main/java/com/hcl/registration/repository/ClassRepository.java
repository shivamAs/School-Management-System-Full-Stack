
package com.hcl.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.registration.model.Class;


public interface ClassRepository extends JpaRepository<Class, Long> {
}