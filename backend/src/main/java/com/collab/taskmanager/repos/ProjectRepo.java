package com.collab.taskmanager.repos;

import com.collab.taskmanager.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepo extends JpaRepository<Project, Long> {

}
