package com.mylesfung.travelsweden.model;

import jakarta.persistence.*;
import lombok.Data;
// Cannot use 'public record Review' DTO bc JPA requires no-arg constructor
// and fields need to be mutable to reflect DB updates / business logic methods

@Entity
@Table(name = "reviews")
@Data public class Review {
    public Review() {}
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String title;
    private Integer rating;
    private String description;
    private String imageURL;
}
