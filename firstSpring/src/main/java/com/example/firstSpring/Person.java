package com.example.firstSpring;


import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("person")
@Scope(value="prototype")
public class Person {

	private String pFullName;
	private String motto;
	private String tech;
	
	public Person() {
		// TODO Auto-generated constructor stub
		System.out.println("Person is Loading...");
	}
	public String getpFullName() {
		return pFullName;
	}
	public void setpFullName(String pFullName) {
		this.pFullName = pFullName;
	}
	public String getMotto() {
		return motto;
	}
	public void setMotto(String motto) {
		this.motto = motto;
	}
	public String getTech() {
		return tech;
	}
	public void setTech(String tech) {
		this.tech = tech;
	}

	
}
