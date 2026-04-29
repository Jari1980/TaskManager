package com.collab.taskmanager.controller;

import com.collab.taskmanager.dto.request.ChangeUserRoleRequest;
import com.collab.taskmanager.dto.response.GetUserResponse;
import com.collab.taskmanager.service.AdminService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @ApiResponse(responseCode = "201", description = "Admin create successful")
    @ApiResponse(responseCode = "401", description = "Unauthorized - user is not authenticated")
    @ApiResponse(responseCode = "403", description = "Forbidden - user does not have ADMIN role")
    @PostMapping("/makeAdmin")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> promoteUserToAdmin(@Valid @RequestBody ChangeUserRoleRequest req){
        adminService.promoteUserToAdmin(req);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @ApiResponse(responseCode = "201", description = "The change from admin to user was successful.")
    @ApiResponse(responseCode = "401", description = "Unauthorized - user is not authenticated")
    @ApiResponse(responseCode = "403", description = "Forbidden - user does not have ADMIN role")
    @PostMapping("/unMakeAdmin")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> demoteAdminToUser(@Valid @RequestBody ChangeUserRoleRequest req){
        adminService.demoteAdminToUser(req);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @ApiResponse(responseCode = "200", description = "Users have been successfully shown")
    @ApiResponse(responseCode = "401", description = "Unauthorized - user is not authenticated")
    @ApiResponse(responseCode = "403", description = "Forbidden - user does not have ADMIN role")
    @GetMapping("/getUsers")// /getUsers?page=0&size=5 - will return first page with 5 users
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<GetUserResponse>> getAllUsers(Pageable pageable){
        return ResponseEntity.ok(adminService.getAllUsers(pageable));
    }
    @ApiResponse(responseCode = "200", description = "User deleted")
    @ApiResponse(responseCode = "401", description = "Unauthorized - user is not authenticated")
    @ApiResponse(responseCode = "403", description = "Forbidden - user does not have ADMIN role")
    @DeleteMapping("/deleteUserById/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteUser(@PathVariable Long id){
        adminService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
