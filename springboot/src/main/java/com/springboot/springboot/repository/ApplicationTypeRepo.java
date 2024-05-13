package com.springboot.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.springboot.entity.ApplicationType;

public interface ApplicationTypeRepo extends JpaRepository<ApplicationType,Integer>{
    @Modifying
    @Transactional
    @Query(value = "SELECT * from application_type where office_id=?1 ", nativeQuery = true)
    public List<ApplicationType> findApplicationTypeByOffice(int officeId);
}
