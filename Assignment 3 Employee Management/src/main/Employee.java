package main;


public class Employee {
 private int id;
 private String name;
 private double salary;

 
 public Employee(int id, String name, double salary) {
     this.id = id;
     this.name = name;
     this.salary = salary;
 }

 // Method to display employee details
 public void displayDetails() {
     System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
 }
}

