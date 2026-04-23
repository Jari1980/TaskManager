package com.collab.taskmanager.exceptions;

public class UserAlreadyExist extends RuntimeException{
    public UserAlreadyExist(String email){
        super("User with this " + email + " already exist.");
    }
}
