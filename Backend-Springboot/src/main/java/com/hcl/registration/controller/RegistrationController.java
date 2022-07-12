package com.hcl.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.registration.model.User1;
import com.hcl.registration.service.RegistrationService;

@RestController//use to give web services
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {
	@Autowired//used to inject dependencies
	private RegistrationService service;
	
	@PostMapping("/registeruser")
    public User1 registerUser(@RequestBody User1 user) throws Exception{
		String tempEmailId = user.getEmailId();
		if(tempEmailId != null && !"".equals(tempEmailId)) {
			User1 userobj = service.fetchUserByEmailId(tempEmailId);
			if(userobj != null) {
				throw new Exception("user with "+ tempEmailId+"is already exist");
			}
		}
		User1 userObj =null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/login")
	public User1 loginUser(@RequestBody User1 user)throws Exception {
		String tempEmailId = user.getEmailId();
		String tempPass = user.getPassword();
		User1 userObj = null;
		if(tempEmailId != null && tempPass != null) {
		 userObj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(userObj == null) {
			throw new Exception("Bad credentials");
		}
		return userObj;
	}
}
