package com.springboot.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.springboot.entity.EmployeeUsers;

public interface EmployeeUsersRepo extends JpaRepository<EmployeeUsers,Integer>{
    @Modifying
    @Transactional
    @Query(value = "SELECT * from employee_users where email=?1 and password=?2", nativeQuery = true)
    public List<EmployeeUsers> ableToLogin(String email,String password);
    
}
