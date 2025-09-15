package com.mylesfung.travelsweden.controller;

import com.mylesfung.travelsweden.dto.AccountDto;
import com.mylesfung.travelsweden.model.Account;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import com.mylesfung.travelsweden.repository.AccountRepo;
import com.mylesfung.travelsweden.service.AccountService;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/service/account")
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
    private final AccountRepo accountRepo;
    private final AccountService accountService;

    @GetMapping("/current")
    // Authentication interface supports getPrincipal(), getAuthorities(), isAuthenticated()
    // Spring Security auto-injects an Authentication instance referencing the current logged-in user
    public AccountDto currentUsername(Authentication auth) {
        UserDetails user = (UserDetails) auth.getPrincipal();
        String username = user.getUsername();
        if (username == "anonymousUser") {
            return new AccountDto("Anonymous");
        }
        return new AccountDto(username);
    }
    @GetMapping
    public Optional<Account> myAccount(@RequestBody Long uid) {
        return accountRepo.findById(uid);
    }
    @PostMapping
    public ResponseEntity<String> createAccount(
            @RequestParam String username,
            @RequestParam String password
    ) {
        return accountService.createAccount(username, password);
    }
    @PutMapping
    public ResponseEntity<String> editAccount(
            @RequestParam Long uid,
            @RequestParam String username,
            @RequestParam String password
    ) {
        return accountService.editAccount(uid, username, password);
    }
    @DeleteMapping
    public ResponseEntity<String> deleteAccount(@RequestBody Long uid) {
        accountRepo.delete(accountRepo.getById(uid));
        return ResponseEntity.ok("Account deleted");
    }
}
