package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EmployeeUsers {
    @Id
    private int employeeId;
    private String employeeName;
    private String employeeDesignation;
    private String email;
    private String password;
    private int officeId;
    public EmployeeUsers() {
    }
    public EmployeeUsers(int employeeId, String employeeName, String employeeDesignation, String email, String password,
            int officeId) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeDesignation = employeeDesignation;
        this.email = email;
        this.password = password;
        this.officeId = officeId;
    }
    public int getEmployeeId() {
        return employeeId;
    }
    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }
    public String getEmployeeName() {
        return employeeName;
    }
    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }
    public String getEmployeeDesignation() {
        return employeeDesignation;
    }
    public void setEmployeeDesignation(String employeeDesignation) {
        this.employeeDesignation = employeeDesignation;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public int getOfficeId() {
        return officeId;
    }
    public void setOfficeId(int officeId) {
        this.officeId = officeId;
    }

}
