package com.collab.taskmanager.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;

public record LoginUserRequest(
        @Schema(description = "Email address of the user", example = "john@example.com")
        @NotNull String email,
        @Schema(description = "Password for the user", example = "Password123!")
        @NotNull String password) {
}
