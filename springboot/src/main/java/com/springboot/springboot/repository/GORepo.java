package com.springboot.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.springboot.entity.GO;

public interface GORepo extends JpaRepository<GO,String> {
}
