package com.collab.taskmanager.dto.response;

import com.collab.taskmanager.enums.Role;

public record GetUserResponse(Long id, String name, String email, Role role) {
}
