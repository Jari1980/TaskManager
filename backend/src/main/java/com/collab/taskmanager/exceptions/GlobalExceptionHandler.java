package com.collab.taskmanager.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handlerGeneral(Exception e) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Unexpected error!");
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<String> handleBadCredentials() {
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body("Invalid email or password");
    }


    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handlerAccountNotFound(UserNotFoundException e) {
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(e.getMessage());
    }
    @ExceptionHandler(UserAlreadyExist.class)
    public ResponseEntity<String> handlerAccountNotFound(UserAlreadyExist e) {
        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(e.getMessage());
    }
    @ExceptionHandler(UserAlreadyAdminException.class)
    public ResponseEntity<String> handlerUserAlreadyAdmin(UserAlreadyAdminException e) {
        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(e.getMessage());
    }
    @ExceptionHandler(UserIsNotAdmin.class)
    public ResponseEntity<String> handlerUserIsNotAdmin(UserIsNotAdmin e) {
        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(e.getMessage());
    }
}
