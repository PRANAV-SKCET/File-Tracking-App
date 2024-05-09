package com.springboot.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.springboot.entity.AdminUsers;
import com.springboot.springboot.entity.EmployeeUsers;
import com.springboot.springboot.entity.OfficeUsers;
import com.springboot.springboot.repository.AdminUsersRepo;
import com.springboot.springboot.repository.EmployeeUsersRepo;
import com.springboot.springboot.repository.OfficeUsersRepo;

@RestController
public class UserController {

    @Autowired
    private AdminUsersRepo adminUsersRepo;

    @Autowired
    private OfficeUsersRepo officeUsersRepo;

    @Autowired
    private EmployeeUsersRepo employeeUsersRepo;

    @GetMapping("/AdminLogin/{email}/{password}")
    public Boolean AdminLogin(@PathVariable String email, @PathVariable String password)
    {
        List<AdminUsers> li = adminUsersRepo.ableToLogin(email,password);
        if(li.size()>0)
        {
            return true;
        }
        return false;
    }

    @GetMapping("/OfficeLogin/{email}/{password}")
    public Boolean OfficeLogin(@PathVariable String email, @PathVariable String password)
    {
        List<OfficeUsers> li = officeUsersRepo.ableToLogin(email,password);
        if(li.size()>0)
        {
            return true;
        }
        return false;
    }

    @GetMapping("/EmployeeLogin/{email}/{password}")
    public Boolean EmployeeLogin(@PathVariable String email, @PathVariable String password)
    {
        List<EmployeeUsers> li = employeeUsersRepo.ableToLogin(email,password);
        if(li.size()>0)
        {
            return true;
        }
        return false;
    }
}
