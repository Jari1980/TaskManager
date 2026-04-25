package com.collab.taskmanager.dto;

import com.collab.taskmanager.dto.request.RegisterUserRequest;
import com.collab.taskmanager.entities.User;
import com.collab.taskmanager.enums.Role;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    private final PasswordEncoder passwordEncoder;

    public Mapper(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public User toUserEntity(RegisterUserRequest req){
        User user = new User();
        user.setName(req.name());
        user.setEmail(req.email());
        user.setPassword(passwordEncoder.encode(req.password()));
        user.setRole(Role.USER);
        return user;
    }

}
