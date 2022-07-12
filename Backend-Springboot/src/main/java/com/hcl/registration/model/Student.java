package com.hcl.registration.model;

import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy =GenerationType.SEQUENCE  ,generator="ID")
    @SequenceGenerator(sequenceName="ID",allocationSize=1,name="ID")
    @Column(name="AdmissionNo")
    private Long id;
    private String name;
    @Column(name="Class")
    private int classNo;
    private int rollNo;
    private int age;
    private String address;
    private String father;
    private String mother;
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(Long id, String name, int classNo, int rollNo, int age, String address, String father,
			String mother) {
		super();
		this.id = id;
		this.name = name;
		this.classNo = classNo;
		this.rollNo = rollNo;
		this.age = age;
		this.address = address;
		this.father = father;
		this.mother = mother;
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
	public int getRollNo() {
		return rollNo;
	}
	public void setRollNo(int rollNo) {
		this.rollNo = rollNo;
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
	public String getFather() {
		return father;
	}
	public void setFather(String father) {
		this.father = father;
	}
	public String getMother() {
		return mother;
	}
	public void setMother(String mother) {
		this.mother = mother;
	}
	
    
}