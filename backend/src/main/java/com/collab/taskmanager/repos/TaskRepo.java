package com.collab.taskmanager.repos;

import com.collab.taskmanager.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepo extends JpaRepository<Task, Long> {
}
