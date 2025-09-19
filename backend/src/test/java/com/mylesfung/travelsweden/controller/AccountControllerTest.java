package com.mylesfung.travelsweden.controller;
// 'spring-boot-starter-test'  pools in lots of frameworks:
//  JUnit @Test (test runner), Spring Boot @WebMvcTest (context testing annotation),
//  Mockito, MockMvc (Spring HTTP client mocking bean which creates @MockitoBean-s)

import com.mylesfung.travelsweden.model.Account;
import com.mylesfung.travelsweden.repository.AccountRepo;
import com.mylesfung.travelsweden.service.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Test;
import org.springframework.security.test.context.support.WithMockUser;
import org.mockito.Mockito;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.mockito.ArgumentMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

// SLICE TESTING with @WebMvcTest, Mockito, MockMvc (tests HTTP layer routing)
@WebMvcTest(AccountController.class)
public class AccountControllerTest {

    // MockMvc : Spring's mock HTTP client bean for controller testing
    @Autowired
    private MockMvc mockMvc;
    @MockitoBean    // Injects mock bean into Spring ApplicationContext (all beans)         (no need for @InjectMock)
    private AccountRepo accountRepo;
    @MockitoBean
    private AccountService accountService;

    @Test
    @WithMockUser
    public void testGetAllAccounts() throws Exception {
        // Mock request-response template
        Mockito.when(accountRepo.findAll()).thenReturn(Arrays.asList(
                new Account(1L, "iga_swiatek", "poland"),
                new Account(2L, "elena_rybakina", "kazakhstan")
        ));
        // Test route
        mockMvc.perform(get("/api/service/account"))
                .andExpect(status().isOk()) // HTTP 200
                // jsonPath( $[index].attributeName )
                .andExpect(jsonPath("$[0].username").value("iga_swiatek"))
                .andExpect(jsonPath("$[1].username").value("elena_rybakina"));
    }

    @Test
    @WithMockUser(username = "aryna_sabalenka")
    public void testGetCurrentUsername() throws Exception {
        // Auth object is auto-injected by SS into AcctController.currentUsername(auth),
        // containing the mock user in @WithMockUser
        mockMvc.perform(get("/api/service/account/current"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.username").value("aryna_sabalenka"));
    }

    @Test
    @WithMockUser
    public void testCreateAccount() throws Exception {
        // Mock request-response template
        Mockito.when(accountService.createAccount(anyString(), anyString()))
                .thenReturn(ResponseEntity.ok("Account created (MOCK text)!"));
        // Test route
        mockMvc.perform(post("/api/service/account/create")
                        .with(csrf())
                        .contentType("application/json")
                        .content("{\"username\":\"iga_swiatek\",\"password\":\"poland\"}"))
                .andExpect(status().isOk())
                .andExpect(content().string("Account created (MOCK text)!"));
    }

    @Test
    @WithMockUser
    public void testEditAccount() throws Exception {
        // Mock request-response template
        Mockito.when(accountService.editAccount(anyLong(), anyString(), anyString()))
                .thenReturn(ResponseEntity.ok("Account edited (MOCK text)!"));
        // Test route
        mockMvc.perform(put("/api/service/account")
                        .with(csrf())
                        .param("id", "1")
                        .param("username", "iga_swiatek")
                        .param("password", "poland"))
                .andExpect(status().isOk())
                .andExpect(content().string("Account edited (MOCK text)!"));
    }

    @Test
    @WithMockUser
    public void testDeleteAccountNotFound() throws Exception {
        Mockito.when(accountRepo.findByUsername("jessica_pegula")).thenReturn(null);
        mockMvc.perform(delete("/api/service/account")
                        .with(csrf())
                        .param("username", "jessica_pegula"))
                .andExpect(status().isNotFound())  // HTTP 404
                .andExpect(content().string("Account not found!"));
    }

}
