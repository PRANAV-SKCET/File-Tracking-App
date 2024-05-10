package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ApplicationType {
    @Id
    private int applicationId;
    private String applicationName;
    private int officeId;
    private int districtId;
    
    public ApplicationType() {
    }
    public ApplicationType(int applicationId, String applicationName, int officeId, int districtId) {
        this.applicationId = applicationId;
        this.applicationName = applicationName;
        this.officeId = officeId;
        this.districtId = districtId;
    }
    public int getApplicationId() {
        return applicationId;
    }
    public void setApplicationId(int applicationId) {
        this.applicationId = applicationId;
    }
    public String getApplicationName() {
        return applicationName;
    }
    public void setApplicationName(String applicationName) {
        this.applicationName = applicationName;
    }
    public int getOfficeId() {
        return officeId;
    }
    public void setOfficeId(int officeId) {
        this.officeId = officeId;
    }
    public int getDistrictId() {
        return districtId;
    }
    public void setDistrictId(int districtId) {
        this.districtId = districtId;
    }

    
    
}
