package com.springboot.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.springboot.entity.Applications;

public interface ApplicationsRepo extends JpaRepository<Applications,String>{
    
}
