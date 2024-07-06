package com.springboot.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.springboot.entity.Rejected;

public interface RejectedRepo extends JpaRepository<Rejected,String>{
    @Modifying
    @Transactional
    @Query(value = "SELECT * from rejected where office_id=?1 ", nativeQuery = true)
    public List<Rejected> getRejectedApplications(int officeId);

    @Modifying
    @Transactional
    @Query(value = "SELECT employee_id from rejected where application_number=?1 ", nativeQuery = true)
    public List<Integer> findEmpId(String applicationNumber);
}
