package com.mylesfung.travelsweden.controller;

import org.springframework.web.bind.annotation.*;
import com.mylesfung.travelsweden.model.User;
import com.mylesfung.travelsweden.service.UserService;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;

    private UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void createAccount() {
        userService.createAccount();
    }
    // @GetMapping?
    public void signIn() {
        userService.signIn();
    }
    @PutMapping
    public void changeUsername() {
        userService.changeUsername();
    }
    @PutMapping
    public void changePassword() {
        userService.changePassword();
    }
}
