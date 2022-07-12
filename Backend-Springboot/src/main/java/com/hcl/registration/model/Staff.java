package com.hcl.registration.model;

import javax.persistence.*;

@Entity
@Table(name = "staff")
public class Staff {

    @Id
    @GeneratedValue(strategy =GenerationType.SEQUENCE  ,generator="ID")
    @SequenceGenerator(sequenceName="ID",allocationSize=1,name="ID")
    private Long id;
    private String name;
    private int age;
    private String address;
    private long phoneNo;
    private String role;
	public Staff() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Staff(Long id, String name, int age, String address, long phoneNo, String role) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.address = address;
		this.phoneNo = phoneNo;
		this.role = role;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
    
}