package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Rejected {
    @Id
    private String applicationNumber;
    private String reasonForRejection;
    private String dateOfRejection;
    private String dateOfOpening;
    private int employeeId;
    private int officeId;
    private String comment;
    public Rejected() {
    }
    public Rejected(String applicationNumber, String reasonForRejection, String dateOfRejection, String dateOfOpening,
            int employeeId, String comment, int officeId) {
        this.applicationNumber = applicationNumber;
        this.reasonForRejection = reasonForRejection;
        this.dateOfRejection = dateOfRejection;
        this.dateOfOpening = dateOfOpening;
        this.employeeId = employeeId;
        this.comment = comment;
        this.officeId = officeId;
    }
    
    public int getOfficeId() {
        return officeId;
    }
    public void setOfficeId(int officeId) {
        this.officeId = officeId;
    }
    public String getApplicationNumber() {
        return applicationNumber;
    }
    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }
    public String getReasonForRejection() {
        return reasonForRejection;
    }
    public void setReasonForRejection(String reasonForRejection) {
        this.reasonForRejection = reasonForRejection;
    }
    public String getDateOfRejection() {
        return dateOfRejection;
    }
    public void setDateOfRejection(String dateOfRejection) {
        this.dateOfRejection = dateOfRejection;
    }
    public String getdateOfOpening() {
        return dateOfOpening;
    }
    public void setdateOfOpening(String dateOfOpening) {
        this.dateOfOpening = dateOfOpening;
    }
    public int getemployeeId() {
        return employeeId;
    }
    public void setemployeeId(int employeeId) {
        this.employeeId = employeeId;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }

    
    
}
