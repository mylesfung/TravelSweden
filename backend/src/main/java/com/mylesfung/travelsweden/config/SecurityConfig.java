package com.mylesfung.travelsweden.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // disable in DEV to allow JS fetch();   enable in PROD for security
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/api/service/reviews",
                                "/api/service/account/create",
                                "/uploads/**"
                        ).permitAll()
                        .anyRequest().authenticated()
                )
                // Custom JSON response handling (sending JSON status message back to React)
                .formLogin(form -> form
                        .loginProcessingUrl("/spring-security-login")
                        .usernameParameter("username")
                        .passwordParameter("password")
                        .successHandler((req, res, auth) -> {
                            res.setContentType("application/json");
                            res.getWriter().write("{\"status\":\"ok\"}");
                        })
                        .failureHandler((req, res, exc) -> {
                            res.setStatus(401);
                            res.setContentType("application/json");
                            res.getWriter().write("{\"error\":\"Login failed\"}");
                        })
                )
                .logout(logout -> logout
                        .logoutUrl("/spring-security-logout")
                        .invalidateHttpSession(true)
                        .deleteCookies("JSESSIONID")
                        .permitAll()
                );
        return http.build();
    }

    // for defining custom authentication schemes (JWT, OAuth, etc.)
    @Bean
    public AuthenticationManager authManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
