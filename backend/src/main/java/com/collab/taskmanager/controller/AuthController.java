package com.collab.taskmanager.controller;

import com.collab.taskmanager.dto.request.LoginUserRequest;
import com.collab.taskmanager.dto.request.RegisterUserRequest;
import com.collab.taskmanager.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/auth")
@Tag(name = "Auth", description = "Authentication endpoints")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @Operation(
            summary = "Register a new user",
            description = "Creates a new user account"
    )
    @ApiResponse(responseCode = "201", description = "User created")
    @ApiResponse(responseCode = "400", description = "Invalid input")
    @PostMapping("/registerUser")
    public ResponseEntity<String> registerUser(@Valid @RequestBody RegisterUserRequest req){
       return new ResponseEntity<>(authService.registerUser(req),HttpStatus.CREATED);
    }

    @Operation(
            summary = "Login user",
            description = "Authenticates user and returns JWT token"
    )
    @ApiResponse(responseCode = "202", description = "Login successful")
    @ApiResponse(responseCode = "401", description = "Invalid credentials")
    @PostMapping("/loginUser")
    public ResponseEntity<String> loginUser(@Valid @RequestBody LoginUserRequest req){
        return new ResponseEntity<>(authService.loginUser(req),HttpStatus.ACCEPTED);
    }

}
