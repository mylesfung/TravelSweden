package com.mylesfung.travelsweden.repository;

// INTEGRATION TESTS with @SpringBootTest and an in-memory DB

import com.mylesfung.travelsweden.model.Account;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional  // Atomicity : rollback after each test
public class AccountRepoTest {

    @Autowired
    private AccountRepo accountRepo;

    @Test
    public void testCreateAndGetAccounts() {
        // ARRANGE
        Account igaAccount = new Account(null, "iga", "warsaw");
        Account arynaAccount = new Account(null, "aryna", "minsk");
        // ACT
        Account igaSaved = accountRepo.save(igaAccount);
        Account arynaSaved = accountRepo.save(arynaAccount);
        List<Account> allAccounts = accountRepo.findAll();
        // ASSERT
        assertNotNull(allAccounts);
        assertEquals("iga", igaSaved.getUsername());
        assertEquals("aryna", arynaSaved.getUsername());
    }

    @Test
    public void testEditAndDeleteAccounts() {
        // Test edit

        // Test delete
        Account igaAccount = new Account(1L, "iga", "warsaw");
        accountRepo.deleteById(igaAccount.getId());
        assertNull(accountRepo.findByUsername("iga"));
    }

}
