package com.collab.taskmanager.dto.request;

import jakarta.validation.constraints.NotNull;

public record RegisterUserRequest (@NotNull String name, @NotNull String email, @NotNull String password){
}
