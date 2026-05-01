package com.collab.taskmanager.service;

import com.collab.taskmanager.dto.response.GetMeResponse;
import com.collab.taskmanager.entities.User;
import com.collab.taskmanager.exceptions.UserNotFoundException;
import com.collab.taskmanager.repos.UserRepo;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public GetMeResponse getMe(Authentication authentication) {
        String email = authentication.getName();

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException(email));

        return new GetMeResponse(
                user.getId(),
                user.getEmail(),
                user.getRole()
        );
    }

}
