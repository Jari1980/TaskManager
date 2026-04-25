package com.collab.taskmanager.dto.request;

import jakarta.validation.constraints.NotBlank;


public record RegisterUserRequest (@NotBlank String name, @NotBlank String email, @NotBlank String password){
}
