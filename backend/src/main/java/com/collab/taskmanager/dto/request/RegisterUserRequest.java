package com.collab.taskmanager.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;


public record RegisterUserRequest (
        @Schema(description = "Full name of user", example = "Broccoli Mann")
        @NotBlank String name,
        @Schema(description = "Email address of user", example = "broccolimann@example.com")
        @NotBlank String email,
        @Schema(description = "Password for user", example = "Password123!")
        @NotBlank String password){
}
