package com.hcl.registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class User1 
{	
@Id
@GeneratedValue(strategy =GenerationType.SEQUENCE,generator="ID")
@SequenceGenerator(sequenceName="ID",allocationSize=1,name="ID")
private int id;
private String userName;
private String emailId;
private String password;

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public User1(int id, String userName, String emailId, String password) {
	super();
	this.id = id;
	this.userName = userName;
	this.emailId = emailId;
	this.password = password;
}
public User1() {
	super();
	// TODO Auto-generated constructor stub
}

}
