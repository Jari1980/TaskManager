package com.collab.taskmanager.controller;

import com.collab.taskmanager.dto.response.GetMeResponse;
import com.collab.taskmanager.service.UserService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@Tag(name = "User Service", description = "Users endpoints")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ApiResponse(responseCode = "201", description = "Successes")
    @ApiResponse(responseCode = "401", description = "Unauthorized - user is not authenticated")
    @GetMapping("/me")
    public ResponseEntity<GetMeResponse> getMe(Authentication authentication){
        return new ResponseEntity<>(
                userService.getMe(authentication),
                HttpStatus.OK
        );
    }

}
