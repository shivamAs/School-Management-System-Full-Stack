package com.hcl.registration.model;

import javax.persistence.*;

@Entity
@Table(name = "class")
public class Class {

	@Id
	@GeneratedValue(strategy =GenerationType.SEQUENCE  ,generator="ID")
    @SequenceGenerator(sequenceName="ID",allocationSize=1,name="ID")
    private Long id;
    @Column(name="Class")
    private int classNo;
    private char section;
    private String classTeacher;
    private int strength;
    private int periods;
	public Class() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Class(Long id, int classNo, char section, String classTeacher, int strength, int periods) {
		super();
		this.id = id;
		this.classNo = classNo;
		this.section = section;
		this.classTeacher = classTeacher;
		this.strength = strength;
		this.periods = periods;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getClassNo() {
		return classNo;
	}
	public void setClassNo(int classNo) {
		this.classNo = classNo;
	}
	public char getSection() {
		return section;
	}
	public void setSection(char section) {
		this.section = section;
	}
	public String getClassTeacher() {
		return classTeacher;
	}
	public void setClassTeacher(String classTeacher) {
		this.classTeacher = classTeacher;
	}
	public int getStrength() {
		return strength;
	}
	public void setStrength(int strength) {
		this.strength = strength;
	}
	public int getPeriods() {
		return periods;
	}
	public void setPeriods(int periods) {
		this.periods = periods;
	}
    
    
}