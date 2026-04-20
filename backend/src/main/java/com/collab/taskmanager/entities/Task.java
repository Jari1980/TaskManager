package com.collab.taskmanager.entities;

import com.collab.taskmanager.enums.Priority;
import com.collab.taskmanager.enums.Status;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "task")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    @Enumerated(EnumType.STRING)
    private Status status;
    @Enumerated(EnumType.STRING)
    private Priority priority;
    @ManyToOne
    @JoinColumn(name = "assigned_user_id")
    private User assignedUserId;
    @ManyToOne
    @JoinColumn(name = "created_by_id")
    private User createdBy;
    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

}
