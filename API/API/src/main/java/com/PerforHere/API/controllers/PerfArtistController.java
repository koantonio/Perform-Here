package com.PerforHere.API.controllers;

import com.PerforHere.API.entities.PerfArtist;
import com.PerforHere.API.services.PerfArtistService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("perfArtists")
public class PerfArtistController {

    public PerfArtistService perfArtistService;

    public PerfArtistController(PerfArtistService perfArtistService) {
        this.perfArtistService = perfArtistService;
    }

    @GetMapping("getAll")
    public List<PerfArtist> getAllArtists() {
        return this.perfArtistService.getAllArtists();
    }

    @PostMapping("add")
    public PerfArtist saveArtist(@RequestBody PerfArtist artist) {
        return this.perfArtistService.saveArtist(artist);
    }

}
