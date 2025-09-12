package com.mylesfung.travelsweden.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.mylesfung.travelsweden.model.User;
import com.mylesfung.travelsweden.repository.UserRepo;

@Service
public class UserService {
    private final UserRepo userRepo;
    @Autowired  // Defines Bean instance
    private final PasswordEncoder passwordEncoder;

    private UserService(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public Long createAccount(String username, String password) {
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(passwordEncoder.encode(password));
        userRepo.save(newUser);
        return newUser.getUid();
    }
    public void signIn(String username, String password) {



    }
    public Long editAccount(Long uid, String username, String password) {
        User currentUser = userRepo.getById(uid);
        currentUser.setUsername(username);
        currentUser.setPassword(password);
        userRepo.save(currentUser);
        return uid;
    }
}
