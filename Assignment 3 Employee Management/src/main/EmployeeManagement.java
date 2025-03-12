package main;

import java.util.ArrayList;
import java.util.List;

public class EmployeeManagement {
 public static void main(String[] args) {
     
     Employee emp1 = new Employee(101, "Mayur", 50000);
     Employee emp2 = new Employee(102, "Tejas", 60000);
     Employee emp3 = new Employee(103, "Shubham", 55000);

    
     List<Employee> employeeList = new ArrayList<>();
     employeeList.add(emp1);
     employeeList.add(emp2);
     employeeList.add(emp3);

     // Displaying employee details
     System.out.println("Employee Details:");
     for (Employee emp : employeeList) {
         emp.displayDetails();
     }
 }
}
