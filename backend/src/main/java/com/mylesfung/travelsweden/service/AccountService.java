package com.mylesfung.travelsweden.service;

import com.mylesfung.travelsweden.model.Account;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.mylesfung.travelsweden.repository.AccountRepo;
import java.util.Collections;

// UserDetailsService only contains loadByUsername method
@Service @RequiredArgsConstructor
public class AccountService implements UserDetailsService {
    private final AccountRepo accountRepo;
    @Autowired  // For same-type beans use  @Autowired @Qualifier("beanName")
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepo.findByUsername(username);
        if (account == null) {
            throw new UsernameNotFoundException("User not found: " + username);
        } else {
            return new org.springframework.security.core.userdetails.User(
                    account.getUsername(),
                    account.getPassword(),
                    Collections.emptyList()
            );
        }
    }

    public ResponseEntity<String> createAccount(String username, String password) {
        Account newAccount = new Account();
        newAccount.setUsername(username);
        newAccount.setPassword(passwordEncoder.encode(password));
        accountRepo.save(newAccount);
        return ResponseEntity.ok("Account created!");
        //boolean userAlreadyExists = accountRepo.findByUsername(username) != null;
        //if (userAlreadyExists) {
        //    return ResponseEntity.ok("Failed to create account: username taken");
        //} else {
        //    accountRepo.save(newAccount);
        //    return ResponseEntity.ok("Account created!");
        //}

    }

    public ResponseEntity<String> editAccount(Long uid, String username, String password) {
        Account currentAccount = accountRepo.getById(uid);
        currentAccount.setUsername(username);
        currentAccount.setPassword(password);
        accountRepo.save(currentAccount);
        return ResponseEntity.ok("Account information updated!");
    }
}
