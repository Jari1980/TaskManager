package com.collab.taskmanager.service;

import com.collab.taskmanager.dto.Mapper;
import com.collab.taskmanager.dto.request.LoginUserRequest;
import com.collab.taskmanager.dto.request.RegisterUserRequest;
import com.collab.taskmanager.entities.UserPrincipal;
import com.collab.taskmanager.exceptions.UserAlreadyExist;
import com.collab.taskmanager.repos.UserRepo;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final Mapper mapper;
    private final UserRepo userRepo;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailService customUserDetailService;

    public AuthService(Mapper mapper, UserRepo userRepo, JWTService jwtService, AuthenticationManager authenticationManager, CustomUserDetailService customUserDetailService) {
        this.mapper = mapper;
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.customUserDetailService = customUserDetailService;
    }

    public String registerUser(RegisterUserRequest req) {
        if (userRepo.findByEmail(req.email()).isPresent()) {
            throw new UserAlreadyExist(req.email());
        }
        UserDetails userDetails = new UserPrincipal(userRepo.save(mapper.toUserEntity(req)));
        return jwtService.createToken(userDetails);
    }

    public String loginUser(LoginUserRequest req) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.email(), req.password())
        );

        UserDetails userDetails = customUserDetailService.loadUserByUsername(req.email());
        return jwtService.createToken(userDetails);
    }


}
