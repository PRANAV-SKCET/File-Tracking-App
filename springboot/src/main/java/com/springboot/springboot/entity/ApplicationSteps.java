package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ApplicationSteps {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int applicationId;
    private int districtId;
    private int officeId;
    private int employeeId;
    private String employeeName;
    private String employeeDesignation;
    private String description;
    private int noOfDays;
    public ApplicationSteps() {
    }
    public ApplicationSteps(int id, int applicationId, int districtId, int officeId, int employeeId,
            String employeeName, String employeeDesignation, String description, int noOfDays) {
        this.id = id;
        this.applicationId = applicationId;
        this.districtId = districtId;
        this.officeId = officeId;
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeDesignation = employeeDesignation;
        this.description = description;
        this.noOfDays = noOfDays;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getApplicationId() {
        return applicationId;
    }
    public void setApplicationId(int applicationId) {
        this.applicationId = applicationId;
    }
    public int getDistrictId() {
        return districtId;
    }
    public void setDistrictId(int districtId) {
        this.districtId = districtId;
    }
    public int getOfficeId() {
        return officeId;
    }
    public void setOfficeId(int officeId) {
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
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getNoOfDays() {
        return noOfDays;
    }
    public void setNoOfDays(int noOfDays) {
        this.noOfDays = noOfDays;
    }

    
}
