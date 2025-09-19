package com.mylesfung.travelsweden.service;

import com.mylesfung.travelsweden.model.Account;
import com.mylesfung.travelsweden.repository.AccountRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;

// UNIT TESTING with MockitoExtension, Mockito
@ExtendWith(MockitoExtension.class)
public class AccountServiceTest {

    @Mock
    private AccountRepo accountRepo;        // @Mock creates stubbed/fake/mock instances of dependencies
    @Mock
    private PasswordEncoder passwordEncoder;
    @InjectMocks
    private AccountService accountService;  // @InjectMock creates a real class instance under test, and injects @Mock-ed dependencies

    // Happy path
    @Test
    public void testLoadUserByUsername_Found() {
        // Define mock object-request-response
        Account mockAccount = new Account(1L, "iga_swiatek", "poland");
        Mockito.when(accountRepo.findByUsername("iga_swiatek")).thenReturn(mockAccount);
        // Test accountService method call
        UserDetails userDetails = accountService.loadUserByUsername("iga_swiatek");
        assertEquals("iga_swiatek", userDetails.getUsername());
        assertEquals("poland", userDetails.getPassword());
    }

    // Sad path
    @Test
    public void testLoadUserByUsername_NotFound() {
        Mockito.when(accountRepo.findByUsername("emma_raducanu")).thenReturn(null);
        UsernameNotFoundException exception =
                assertThrows(UsernameNotFoundException.class,
                        () -> accountService.loadUserByUsername("emma_raducanu"));
        assertEquals("User not found: emma_raducanu", exception.getMessage());
    }

    @Test
    public void testCreateAccountNewUser() {
        // Define mock object and (2) request-response templates
        Mockito.when(accountRepo.findByUsername("aryna_sabalenka")).thenReturn(null);
        Mockito.when(passwordEncoder.encode(anyString())).thenReturn("password hash");
        // Test accountService method call
        ResponseEntity<String> response = accountService.createAccount("aryna_sabalenka", "russia");
        assertEquals(response.getBody(), "Account created!");
    }

    @Test
    public void testCreateAccountDuplicateUser() {
        Account existingIgaSwiatek = new Account(1L, "iga", "warsaw");
        Mockito.when(passwordEncoder.encode(anyString())).thenReturn("password hash");
        Mockito.when(accountRepo.findByUsername("iga")).thenReturn(existingIgaSwiatek);
        DuplicateKeyException exception =
                assertThrows(DuplicateKeyException.class,
                        () -> accountService.createAccount("iga", "warsaw"));
        assertEquals(exception.getMessage(), "Failed to create account: username taken");
    }

    @Test
    public void testEditAccount() {
        Account igaSwiatekAccount = new Account(1L, "iga", "warsaw");
        Mockito.when(accountRepo.getById(anyLong())).thenReturn(igaSwiatekAccount);
        ResponseEntity<String> response = accountService.editAccount(1L, "iga", "warsaw");
        assertEquals(response.getBody(), "Account information updated!");
    }
}
