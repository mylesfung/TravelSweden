package com.mylesfung.travelsweden.model;

import jakarta.persistence.*;

@Entity @Table(name = "users")
public class User {
    public User() {}

    @Id
    private String username;
    private String password;

    public String getUsername() {
        return this.username;
    }
    public void setUsername(String name) {
        this.username = name;
    }
    public String getPassword() {
        return this.password;
    }
    public void setPassword(String pass) {
        this.password = pass;
    }
}
