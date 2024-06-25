package com.springboot.springboot.controller;

import java.util.List;
import java.util.Map;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.springboot.entity.AdminUsers;
import com.springboot.springboot.entity.ApplicationSteps;
import com.springboot.springboot.entity.ApplicationType;
import com.springboot.springboot.entity.Applications;
import com.springboot.springboot.entity.EmployeeUsers;
import com.springboot.springboot.entity.OfficeUsers;
import com.springboot.springboot.repository.AdminUsersRepo;
import com.springboot.springboot.repository.ApplicationStepsRepo;
import com.springboot.springboot.repository.ApplicationTypeRepo;
import com.springboot.springboot.repository.ApplicationsRepo;
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

    @Autowired
    private ApplicationTypeRepo applicationTypeRepo;

    @Autowired
    private ApplicationStepsRepo applicationStepsRepo;

    @Autowired
    private ApplicationsRepo applicationsRepo;

    @Autowired
    private JdbcTemplate jdbcTemplate;

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

    @GetMapping("/AdminLoginDetails/{email}/{password}")
    public AdminUsers AdminLoginDetails(@PathVariable String email, @PathVariable String password)
    {
        List<AdminUsers> li = adminUsersRepo.ableToLogin(email,password);
        return li.get(0);
    }
    @GetMapping("/OfficeLoginDetails/{email}/{password}")
    public OfficeUsers OfficeLoginDetails(@PathVariable String email, @PathVariable String password)
    {
        List<OfficeUsers> li = officeUsersRepo.ableToLogin(email,password);
        return li.get(0);
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

    @PostMapping("/addOffice")
    public String AddOffice(@RequestBody OfficeUsers officeUsers)
    {
        List<OfficeUsers> li = officeUsersRepo.checkExist(officeUsers.getEmail());
        if(li.size()>0)
        {
            return "Office Already Exist";
        }
        officeUsersRepo.save(officeUsers);
        return "New Office Added";
    }

    @PostMapping("/addEmployee")
    public String AddEmployee(@RequestBody EmployeeUsers employeeUsers)
    {
        List<EmployeeUsers> li = employeeUsersRepo.checkExist(employeeUsers.getEmail());
        if(li.size()>0)
        {
            return "Employee Already Exist";
        }
        employeeUsersRepo.save(employeeUsers);
        return "New Employee Added";
    }

    @DeleteMapping("/deleteOffice/{officeId}")
    public String deleteOffice(@PathVariable int officeId)
    {
        OfficeUsers officeUsers = officeUsersRepo.findById(officeId).orElse(null);
        if(officeUsers==null)
        {
            return "Office Not Found";
        }
        officeUsersRepo.delete(officeUsers);
        return "Office Deleted";
    }

    @DeleteMapping("/deleteEmployee/{employeeId}")
    public String deleteEmployee(@PathVariable int employeeId)
    {
        EmployeeUsers employeeUsers = employeeUsersRepo.findById(employeeId).orElse(null);
        if(employeeUsers==null)
        {
            return "Employee Not Found";
        }
        employeeUsersRepo.delete(employeeUsers);
        return "Employee Deleted";
    }

    @PostMapping("/saveApplicationType")
    public String saveApplicationType(@RequestBody ApplicationType applicationType)
    {
        ApplicationType temp = applicationTypeRepo.findById(applicationType.getApplicationId()).orElse(null);
        if(temp!=null)
        {
            return "Application Type Already Exist";
        }
        applicationTypeRepo.save(applicationType);
        return "Application Added";
    }

    @PostMapping("/saveApplicationSteps")
    public void saveApplicationSteps(@RequestBody List<ApplicationSteps> applicationSteps)
    {
        for(ApplicationSteps applicationSteps1:applicationSteps)
        applicationStepsRepo.save(applicationSteps1);
    }

    @GetMapping("/getEmployees/{officeId}")
    public List<EmployeeUsers> getEmployee(@PathVariable int officeId)
    {
        List<EmployeeUsers> li = employeeUsersRepo.findEmployeeByOffice(officeId);
        return li;
    }

    @GetMapping("/getApplicationTypes/{officeId}")
    public List<ApplicationType> getApplicationTypes(@PathVariable int officeId)
    {
        List<ApplicationType> li = applicationTypeRepo.findApplicationTypeByOffice(officeId);
        return li;
    }

    @PostMapping("/createApplication")
    public String createApplication(@RequestBody Applications applications)
    {
        Applications temp = applicationsRepo.findById(applications.getApplicationNumber()).orElse(null);
        if(temp!=null)
        {
            return "Application Already Exist";
        }
        createApplicationTable(applications.getApplicationNumber(),applications.getApplicationTypeId());
        applicationsRepo.save(applications);
        return "Application added Successfully";
    }

    private void createApplicationTable(String applicationNumber,int applicationId) {
        String tableName = applicationNumber;
    
        String createTableSql = "CREATE TABLE " + tableName + " (" +
                                "`Step_No` INT AUTO_INCREMENT PRIMARY KEY, " +
                                "`Assigned_To` VARCHAR(255), " +
                                "`Employee_Id` VARCHAR(255), " +
                                "`status` ENUM('Pending', 'Processing', 'Completed'), " +
                                "`Date` VARCHAR(255), " +
                                "`Comments` VARCHAR(255))";
    
        jdbcTemplate.execute(createTableSql);


        List<Map<String, Object>> steps = getApplicationSteps(applicationId);

        for (Map<String, Object> step : steps) {
            String sql = "INSERT INTO " + applicationNumber + " " +
                         "(Assigned_To, Employee_Id, status, Date, Comments) " +
                         "VALUES (?, ?, ?, ?, ?)";

            jdbcTemplate.update(sql,
                                step.get("employee_name"),
                                step.get("employee_id"),
                                "Pending",
                                LocalDate.now().toString(),
                                "");
        }
    }

    public List<Map<String, Object>> getApplicationSteps(int applicationId) {
        String sql = "SELECT employee_name, employee_id " +
                     "FROM application_steps WHERE application_id = ?";
        return jdbcTemplate.queryForList(sql, applicationId);
    }
    // king pranav
    
}
