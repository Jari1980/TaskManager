package com.collab.taskmanager.repos;

import com.collab.taskmanager.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
