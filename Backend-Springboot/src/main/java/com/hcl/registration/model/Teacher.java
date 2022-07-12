package com.hcl.registration.model;

import javax.persistence.*;

@Entity
@Table(name = "teacher")
public class Teacher {

    @Id
    @GeneratedValue(strategy =GenerationType.SEQUENCE  ,generator="ID")
    @SequenceGenerator(sequenceName="ID",allocationSize=1,name="ID")
    private Long id;
    private String name;
    @Column(name="Class")
    private int classNo;
    private int age;
    private String address;
    private long phoneNo;
    private String subject;
	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Teacher(Long id, String name, int classNo, int age, String address, long phoneNo, String subject) {
		super();
		this.id = id;
		this.name = name;
		this.classNo = classNo;
		this.age = age;
		this.address = address;
		this.phoneNo = phoneNo;
		this.subject = subject;
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
	public int getClassNo() {
		return classNo;
	}
	public void setClassNo(int classNo) {
		this.classNo = classNo;
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
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	
    
}