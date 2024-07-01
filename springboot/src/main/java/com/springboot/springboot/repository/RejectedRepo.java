package com.springboot.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.springboot.entity.Rejected;

public interface RejectedRepo extends JpaRepository<Rejected,String>{
    
}
