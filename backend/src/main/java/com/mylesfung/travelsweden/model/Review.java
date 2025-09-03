package com.mylesfung.travelsweden.model;

import jakarta.persistence.*;

// Cannot use 'public record' Review data transfer object (DTO)
// because JPA requires no-arg constructor
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
    @Lob
    private byte[] image;

    // getters and setters
    public Long getId() {return id;}
    public String getUsername() {return username;}
    public void setUsername(String name) {this.username = name;}
    public String getTitle() {return title;}
    public void setTitle(String text) {this.title = text;}
    public Integer getRating() {return this.rating;}
    public void setRating(Integer n) {this.rating = n;}
    public String getDescription() {return this.description;}
    public void setDescription(String text) {this.description = text;}
    public byte[] getImage() {return this.image;}
    public void setImage(byte[] image) {
        // use Files/Paths libraries to extract img bytes from img path
        //byte[] img_bytes = ...
        //this.image = img_bytes;
    }



}
