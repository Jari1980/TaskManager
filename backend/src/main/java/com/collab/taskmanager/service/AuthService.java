package com.collab.taskmanager.service;

import com.collab.taskmanager.dto.Mapper;
import com.collab.taskmanager.dto.request.RegisterUserRequest;
import com.collab.taskmanager.entities.UserPrinciple;
import com.collab.taskmanager.repos.UserRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final Mapper mapper;
    private final UserRepo userRepo;
    private final JWTService jwtService;

    public AuthService(Mapper mapper, UserRepo userRepo, JWTService jwtService) {
        this.mapper = mapper;
        this.userRepo = userRepo;
        this.jwtService = jwtService;
    }

    public String registerUser(RegisterUserRequest req){
        if (userRepo.findByEmail(req.email()).isPresent()){
            throw new RuntimeException("User with this email already exist");
        }
        UserDetails userDetails = new UserPrinciple(userRepo.save(mapper.toUserEntity(req)));
        return jwtService.createToken(userDetails);
    }

}
