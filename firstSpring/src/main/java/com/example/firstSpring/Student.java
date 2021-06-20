package com.example.firstSpring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(value="prototype")
public class Student extends Person{

	private int studentId;
	private char gender;
	private String major;
	private double sub1Grade;
	private double sub2Grade;
	private double sub3Grade;
	private double averageScore;
	
	@Autowired
	@Qualifier("person")
	private Person person;
	
	@Autowired
	@Qualifier("Lap1")
	private Laptop laptop;
	
	public Student() {
		System.out.println("Student Class loading...");
	}
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		this.gender = gender;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public double getSub1Grade() {
		return sub1Grade;
	}
	public void setSub1Grade(double sub1Grade) {
		this.sub1Grade = sub1Grade;
	}
	public double getSub2Grade() {
		return sub2Grade;
	}
	public void setSub2Grade(double sub2Grade) {
		this.sub2Grade = sub2Grade;
	}
	public double getSub3Grade() {
		return sub3Grade;
	}
	public void setSub3Grade(double sub3Grade) {
		this.sub3Grade = sub3Grade;
	}
	
	public double getAverageScore() {
		return averageScore;
	}
	public void setAverageScore() {
		this.averageScore = (this.sub1Grade + this.sub2Grade + this.sub3Grade)/3;;
	}
	public Laptop getLaptop() {
		return laptop;
	}
	public void setLaptop(Laptop laptop) {
		this.laptop = laptop;
	}
	
	public Person getPerson() {
		return person;
	}
	public void setPerson(Person p1) {
		this.person = p1;
	}
	@Override
	public String toString() {
		return "Student [studentId=" + studentId + ", major=" + major + ", sub1Grade=" + sub1Grade + ", sub2Grade="
				+ sub2Grade + ", sub3Grade=" + sub3Grade + ", person=" + person + ", laptop=" + laptop + "]";
	}
	
}
