package com.springboot.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.springboot.entity.ApplicationType;
import com.springboot.springboot.entity.Applications;

public interface ApplicationsRepo extends JpaRepository<Applications,String>{
}
