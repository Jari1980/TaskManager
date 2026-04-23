package com.collab.taskmanager.dto.request;

import jakarta.validation.constraints.NotNull;

public record LoginUserRequest(@NotNull String email, @NotNull String password) {
}
