package com.springboot.springboot.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.springboot.entity.AdminUsers;


public interface AdminUsersRepo extends JpaRepository <AdminUsers,Integer> {
    
    @Modifying
    @Transactional
    @Query(value = "SELECT * from admin_users where email=?1 and password=?2", nativeQuery = true)
    public List<AdminUsers> ableToLogin(String email,String password);

}
