package com.example.firstSpring;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component ("Lap1")
@Scope(value="prototype")
public class Laptop {

	private String brand;
	private String model;
	
	public Laptop() {
		// TODO Auto-generated constructor stub
		System.out.println("Laptop is App Loading...");
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	
	@Override
	public String toString() {
		return "Laptop [brand=" + getBrand() + ", model=" + getModel()   + "]";
	}
}
