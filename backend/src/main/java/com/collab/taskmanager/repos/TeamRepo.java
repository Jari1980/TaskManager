package com.collab.taskmanager.repos;

import com.collab.taskmanager.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepo extends JpaRepository<Team, Long> {
}
