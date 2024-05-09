package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AdminUsers {
    @Id
    private int districtId;
    private String districtName;
    private String email;
    private String password;
    
    public AdminUsers() {
    }

    public AdminUsers(int districtId, String districtName, String email, String password) {
        this.districtId = districtId;
        this.districtName = districtName;
        this.email = email;
        this.password = password;
    }

    public int getDistrictId() {
        return districtId;
    }

    public void setDistrictId(int districtId) {
        this.districtId = districtId;
    }

    public String getDistrictName() {
        return districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName;
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
    
    
}
