package com.collab.taskmanager.dto.request;

import com.collab.taskmanager.enums.Role;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;

public record ChangeUserRoleRequest(
        @NotBlank
        Role role) {
}
