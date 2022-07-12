package com.hcl.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.registration.model.User1;

public interface RegistrationRepository extends JpaRepository<User1, Integer> {
public User1 findByEmailId(String emailId);//this method is not a in built method
public User1 findByEmailIdAndPassword(String emailId, String password);        // so we need to declare it
}
