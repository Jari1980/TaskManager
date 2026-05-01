package com.collab.taskmanager.service;

import com.collab.taskmanager.dto.response.GetUserResponse;
import com.collab.taskmanager.entities.User;
import com.collab.taskmanager.enums.Role;
import com.collab.taskmanager.exceptions.UserNotFoundException;
import com.collab.taskmanager.repos.UserRepo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AdminService {

    private final UserRepo userRepo;

    public AdminService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Transactional
    public void changeUserRole(Long id, Role newRole){
        User user = userRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
        if (user.getRole() == newRole){
            throw new IllegalStateException("User already has role " + newRole);
        }
        user.setRole(newRole);
        userRepo.save(user);

    }

    public Page<GetUserResponse> getAllUsers(Pageable pageable){
        return userRepo.findAll(pageable)
                .map(user -> new GetUserResponse(
                        user.getId(),
                        user.getName(),
                        user.getEmail(),
                        user.getRole()
                ));
    }

    public GetUserResponse getUserById(Long id){

        User user = userRepo.findById(id)
                .orElseThrow( () -> new UserNotFoundException(id));

        return new GetUserResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }

    public void deleteUserById(Long id){
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User with this id: " + id + " not found"));
        userRepo.delete(user);
    }

}
