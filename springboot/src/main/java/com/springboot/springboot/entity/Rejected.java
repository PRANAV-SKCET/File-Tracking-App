package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Rejected {
    @Id
    private String applicationNumber;
    private String reasonForRejection;
    private String dateOfRejection;
    private String dateOfopening;
    private int StepNo;
    private String comment;
    public Rejected() {
    }
    public Rejected(String applicationNumber, String reasonForRejection, String dateOfRejection, String dateOfopening,
            int stepNo, String comment) {
        this.applicationNumber = applicationNumber;
        this.reasonForRejection = reasonForRejection;
        this.dateOfRejection = dateOfRejection;
        this.dateOfopening = dateOfopening;
        StepNo = stepNo;
        this.comment = comment;
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
    public String getDateOfopening() {
        return dateOfopening;
    }
    public void setDateOfopening(String dateOfopening) {
        this.dateOfopening = dateOfopening;
    }
    public int getStepNo() {
        return StepNo;
    }
    public void setStepNo(int stepNo) {
        StepNo = stepNo;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }

    
    
}
