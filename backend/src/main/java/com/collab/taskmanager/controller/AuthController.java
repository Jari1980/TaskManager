package com.collab.taskmanager.controller;

import com.collab.taskmanager.dto.request.LoginUserRequest;
import com.collab.taskmanager.dto.request.RegisterUserRequest;
import com.collab.taskmanager.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/registerUser")
    public ResponseEntity<String> registerUser(@Valid @RequestBody RegisterUserRequest req){
       return new ResponseEntity<>(authService.registerUser(req),HttpStatus.CREATED);
    }

    @PostMapping("/loginUser")
    public ResponseEntity<String> loginUser(@Valid @RequestBody LoginUserRequest req){
        return new ResponseEntity<>(authService.loginUser(req),HttpStatus.ACCEPTED);
    }

}
