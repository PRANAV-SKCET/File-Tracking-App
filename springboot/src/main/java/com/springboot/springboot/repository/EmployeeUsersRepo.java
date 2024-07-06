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

    @Modifying
    @Transactional
    @Query(value = "SELECT * from employee_users where email=?1 ", nativeQuery = true)
    public List<EmployeeUsers> checkExist(String email);

    @Modifying
    @Transactional
    @Query(value = "SELECT * from employee_users where office_id=?1 ", nativeQuery = true)
    public List<EmployeeUsers> findEmployeeByOffice(int officeId);

    @Modifying
    @Transactional
    @Query(value = "SELECT employee_designation from employee_users where email=?1 ", nativeQuery = true)
    public List<String> getDesignation(String email);

    @Modifying
    @Transactional
    @Query(value = "SELECT office_id from employee_users where email=?1 ", nativeQuery = true)
    public List<Integer> getOfficeId(String email);

    @Modifying
    @Transactional
    @Query(value = "SELECT email from employee_users where employee_id=?1 ", nativeQuery = true)
    public List<String> findMail(int id);
    
}
