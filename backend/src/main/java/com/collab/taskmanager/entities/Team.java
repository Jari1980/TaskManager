package com.collab.taskmanager.entities;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "team")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    @ManyToOne
    @JoinColumn(name = "created_by_id")
    private User createdBy;
}
