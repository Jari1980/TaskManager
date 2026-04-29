package com.collab.taskmanager.service;

import com.collab.taskmanager.dto.request.ChangeUserRoleRequest;
import com.collab.taskmanager.dto.response.GetUserResponse;
import com.collab.taskmanager.entities.User;
import com.collab.taskmanager.enums.Role;
import com.collab.taskmanager.exceptions.UserAlreadyAdminException;
import com.collab.taskmanager.exceptions.UserIsNotAdmin;
import com.collab.taskmanager.exceptions.UserNotFoundException;
import com.collab.taskmanager.repos.UserRepo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    private final UserRepo userRepo;

    public AdminService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public void promoteUserToAdmin(ChangeUserRoleRequest request){
        User user = userRepo.findByEmail(request.email())
                .orElseThrow(() -> new UserNotFoundException(request.email()));
        if (user.getRole() == Role.ADMIN){
            throw new UserAlreadyAdminException(request.email());
        }
        user.setRole(Role.ADMIN);
        userRepo.save(user);
    }

    public void demoteAdminToUser(ChangeUserRoleRequest request){
        User user = userRepo.findByEmail(request.email())
                .orElseThrow(() -> new UserNotFoundException(request.email()));
        if (user.getRole() == Role.USER){
            throw new UserIsNotAdmin(request.email());
        }
        user.setRole(Role.USER);
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

    public void deleteUserById(Long id){
        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User with this id: " + id + " not found"));
        userRepo.delete(user);
    }

}
