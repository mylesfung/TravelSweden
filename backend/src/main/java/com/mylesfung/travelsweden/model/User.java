package com.mylesfung.travelsweden.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data public class User {
    public User() {}
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;

}
