package com.PerforHere.API.entities;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Votes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;
    String userId;
    PerfArtist a;
    String location;

    public Votes() {

    }

    public Votes(Integer id, String userId, PerfArtist a, String location) {
        this.id = id;
        this.userId = userId;
        this.a = a;
        this.location = location;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setA(PerfArtist a) {
        this.a = a;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getId() {
        return id;
    }

    public String getUserId() {
        return userId;
    }

    public PerfArtist getA() {
        return a;
    }

    public String getLocation() {
        return location;
    }
}
