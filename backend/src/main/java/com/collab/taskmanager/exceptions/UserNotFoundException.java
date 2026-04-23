package com.collab.taskmanager.exceptions;

public class UserNotFoundException extends RuntimeException{
   public UserNotFoundException(String email){
       super("User with this email " + email + " not found. Try again");
   }
}
