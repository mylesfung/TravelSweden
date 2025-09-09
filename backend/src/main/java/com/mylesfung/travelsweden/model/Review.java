package com.mylesfung.travelsweden.model;

import jakarta.persistence.*;
// Cannot use 'public record' Review data transfer object (DTO)
// bc JPA requires no-arg constructor
// and fields need to be mutable to reflect DB updates / business logic methods

@Entity @Table(name = "reviews")
public class Review {
    public Review() {}
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String title;
    private Integer rating;
    private String description;
    private String imageURL;

    public Long getId() {return id;}
    public String getUsername() {return username;}
    public void setUsername(String name) {this.username = name;}
    public String getTitle() {return title;}
    public void setTitle(String text) {this.title = text;}
    public Integer getRating() {return this.rating;}
    public void setRating(Integer n) {this.rating = n;}
    public String getDescription() {return this.description;}
    public void setDescription(String text) {this.description = text;}
    public String getImageURL() {return this.imageURL;}
    public void setImageURL(String path) {this.imageURL = path;}
}
