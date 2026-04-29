package com.collab.taskmanager.exceptions;

public class UserAlreadyAdminException extends RuntimeException {
    public UserAlreadyAdminException(String email) {
        super("User " + email + " is already an admin");
    }
}