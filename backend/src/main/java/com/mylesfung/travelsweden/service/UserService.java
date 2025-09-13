package com.mylesfung.travelsweden.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.mylesfung.travelsweden.model.User;
import com.mylesfung.travelsweden.repository.UserRepo;

// UserDetailsService only contains loadByUsername method
@Service @RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private final UserRepo userRepo;
    @Autowired  // For same-type beans use  @Autowired @Qualifier("beanName")
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepo.findByUsername(username);
    }

    public ResponseEntity<String> createAccount(String username, String password) {
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(passwordEncoder.encode(password));
        userRepo.save(newUser);
        return ResponseEntity.ok("Account created!");
    }

    public ResponseEntity<String> editAccount(Long uid, String username, String password) {
        User currentUser = userRepo.getById(uid);
        currentUser.setUsername(username);
        currentUser.setPassword(password);
        userRepo.save(currentUser);
        return ResponseEntity.ok("Account information updated!");
    }
}
