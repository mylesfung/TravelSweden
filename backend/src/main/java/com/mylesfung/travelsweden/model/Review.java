package com.mylesfung.travelsweden.model;

import jakarta.persistence.*;

// Cannot use 'public record Review' because JPA requires no-arg constructor,
// and fields need to be mutable to reflect DB updates / business logic methods

@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String title;
    private Integer rating;
    private String description;
    @Lob
    private byte[] image;

    // getters and setters

}
