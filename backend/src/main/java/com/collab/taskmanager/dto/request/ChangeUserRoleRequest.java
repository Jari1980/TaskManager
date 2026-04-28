package com.collab.taskmanager.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;

public record ChangeUserRoleRequest(
        @NotBlank
        @Schema(description = "Email address of the user", example = "john@example.com")
        String email) {
}
