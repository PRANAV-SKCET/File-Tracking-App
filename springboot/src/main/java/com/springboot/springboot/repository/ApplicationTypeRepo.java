package com.springboot.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.springboot.entity.ApplicationType;

public interface ApplicationTypeRepo extends JpaRepository<ApplicationType,Integer>{
    
}
