package com.springboot.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.springboot.entity.OfficeUsers;

public interface OfficeUsersRepo extends JpaRepository<OfficeUsers,Integer>{
    
    @Modifying
    @Transactional
    @Query(value = "SELECT * from office_users where email=?1 and password=?2", nativeQuery = true)
    public List<OfficeUsers> ableToLogin(String email,String password);

    @Modifying
    @Transactional
    @Query(value = "SELECT * from office_users where email=?1 ", nativeQuery = true)
    public List<OfficeUsers> checkExist(String email);

    @Modifying
    @Transactional
    @Query(value = "SELECT office_name from office_users where office_id=?1 ", nativeQuery = true)
    public List<String> getOfficeName(Integer id);
}
