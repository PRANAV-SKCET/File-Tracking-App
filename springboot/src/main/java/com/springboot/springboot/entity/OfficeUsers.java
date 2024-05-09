package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class OfficeUsers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int officeId;
    private  String officeName;
    private String email;
    private String password;
    private int districtId;
    public OfficeUsers() {
    }
    public OfficeUsers(int officeId, String officeName, String email, String password, int districtId) {
        this.officeId = officeId;
        this.officeName = officeName;
        this.email = email;
        this.password = password;
        this.districtId = districtId;
    }
    public int getOfficeId() {
        return officeId;
    }
    public void setOfficeId(int officeId) {
        this.officeId = officeId;
    }
    public String getOfficeName() {
        return officeName;
    }
    public void setOfficeName(String officeName) {
        this.officeName = officeName;
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
    public int getDistrictId() {
        return districtId;
    }
    public void setDistrictId(int districtId) {
        this.districtId = districtId;
    }

    
}
