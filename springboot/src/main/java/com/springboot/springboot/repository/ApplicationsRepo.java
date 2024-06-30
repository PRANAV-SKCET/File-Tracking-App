package com.springboot.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.springboot.entity.AdminUsers;
import com.springboot.springboot.entity.ApplicationType;
import com.springboot.springboot.entity.Applications;

public interface ApplicationsRepo extends JpaRepository<Applications,String>{
    @Modifying
    @Transactional
    @Query(value = "UPDATE applications SET application_status = 'Completed' , application_closed_date=?2 WHERE application_number=?1", nativeQuery = true)
    public void edit(String applicationNumber,String date);
}
