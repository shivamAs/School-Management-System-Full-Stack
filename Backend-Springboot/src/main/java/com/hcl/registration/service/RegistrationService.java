package com.hcl.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.registration.model.User1;
import com.hcl.registration.repository.RegistrationRepository;

@Service
public class RegistrationService {

	@Autowired //inject the object dependency implicitly
	private RegistrationRepository repo;
	
	public User1 saveUser(User1 user) {
		return repo.save(user);
	}
	
	public User1 fetchUserByEmailId(String email) {
		return repo.findByEmailId(email);
	}
	public User1 fetchUserByEmailIdAndPassword(String email, String password) {
		return repo.findByEmailIdAndPassword(email,password);
	}
}
