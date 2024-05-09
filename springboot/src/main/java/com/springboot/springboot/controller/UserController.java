package com.springboot.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.springboot.entity.AdminUsers;
import com.springboot.springboot.repository.AdminUsersRepo;

@RestController
public class UserController {

    @Autowired
    private AdminUsersRepo adminUsersRepo;

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
}
