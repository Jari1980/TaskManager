package com.collab.taskmanager.exceptions;

public class UserNotFoundException extends RuntimeException{
   public UserNotFoundException(String email){
       super("Invalid email or password");
   }
}
