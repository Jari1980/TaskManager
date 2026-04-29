package com.collab.taskmanager.exceptions;

public class UserIsNotAdmin extends RuntimeException{
    public UserIsNotAdmin(String email){
        super("User " + email + " is not an admin");
    }
}
