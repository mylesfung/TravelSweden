package com.mylesfung.travelsweden.model;

import jakarta.persistence.*;

@Entity @Table(name = "users")
public class User {
    public User() {}

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;
    private String username;
    private String password;

    public Long getUid() {return this.uid;}
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
