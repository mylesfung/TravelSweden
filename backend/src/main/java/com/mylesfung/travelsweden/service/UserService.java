package com.mylesfung.travelsweden.service;

import org.springframework.stereotype.Service;
import com.mylesfung.travelsweden.model.User;
import com.mylesfung.travelsweden.repository.UserRepo;

@Service
public class UserService {
    private final UserRepo userRepo;

    private UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public void createAccount() {}

    public void signIn() {}

    public void changeUsername() {}
    public void changePassword() {}
}
