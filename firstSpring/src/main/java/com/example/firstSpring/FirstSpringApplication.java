package com.example.firstSpring;
import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class FirstSpringApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext Context= SpringApplication.run(FirstSpringApplication.class, args);
		System.out.println("We're in business! What a Run!!!!..");
		
		Scanner sc = new Scanner(System.in);
		
		Student std1 = Context.getBean(Student.class);
		Laptop lap1 = Context.getBean(Laptop.class);
		Person p1 = Context.getBean(Person.class);
		//get the full name of the person
		System.out.println("What is the full name of the person:");
		String fname = sc.nextLine();
		p1.setpFullName(fname);
		System.out.println("What is your motto: ");
		String motto = sc.nextLine();
		p1.setMotto(motto);
		System.out.println("What is your favourite: ");
		String tech = sc.nextLine();
		p1.setTech(tech);
		std1.setPerson(p1);
		System.out.println("What brand of Laptop: ");
		String brand = sc.nextLine();
		lap1.setBrand(brand);
		System.out.println("What model: ");
		String model = sc.next();
		lap1.setModel(model);
		std1.setLaptop(lap1);
		
		//working with Student class
		System.out.println("Enter student Id: ");
		int stud1Id = sc.nextInt();
		std1.setStudentId(stud1Id);
		System.out.println("Enter student gender(M/F): ");
		char stud1Gender = sc.nextLine().charAt(0);
		std1.setGender(stud1Gender);
		
		System.out.println("What is grade for subject 1: ");
		double stud1Subject1 = sc.nextDouble();
		std1.setSub1Grade(stud1Subject1);
		System.out.println("What is grade for subject 2: ");
		double stud1Subject2 = sc.nextDouble();
		std1.setSub2Grade(stud1Subject2);
		System.out.println("What is grade for subject 3: ");
		double stud1Subject3 = sc.nextDouble();
		std1.setSub3Grade(stud1Subject3);
		System.out.println("Major: ");
		String stud1Major = sc.next();
		std1.setMajor(stud1Major);
		
		System.out.println(std1.toString());
	}

}
