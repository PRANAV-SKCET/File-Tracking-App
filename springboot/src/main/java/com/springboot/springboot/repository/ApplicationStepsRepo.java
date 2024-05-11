package com.springboot.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.springboot.entity.ApplicationSteps;

public interface ApplicationStepsRepo extends JpaRepository<ApplicationSteps,Integer>{
    
}
