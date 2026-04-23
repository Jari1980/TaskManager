package com.collab.taskmanager.service;
import com.collab.taskmanager.entities.User;
import com.collab.taskmanager.entities.UserPrinciple;
import com.collab.taskmanager.repos.UserRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    UserRepo usersRepository;

    public CustomUserDetailService(UserRepo usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = usersRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException(username + "Than username wasn't found"));
        return new UserPrinciple(user);
    }
}
