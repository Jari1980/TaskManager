package com.collab.taskmanager.dto.request;

import com.collab.taskmanager.enums.Role;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ChangeUserRoleRequest(
        @NotNull
        Role role) {
}
