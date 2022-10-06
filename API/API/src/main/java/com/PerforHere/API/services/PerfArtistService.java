package com.PerforHere.API.services;

import com.PerforHere.API.entities.PerfArtist;
import com.PerforHere.API.repositories.PerfArtistRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerfArtistService {
    public PerfArtistRepository perfArtistRepository;

    public PerfArtistService(PerfArtistRepository perfArtistRepository) {
        this.perfArtistRepository = perfArtistRepository;
    }

    public List<PerfArtist> getAllArtists() {
        return this.perfArtistRepository.findAll();
    }

    public PerfArtist saveArtist(PerfArtist artist) {
        return this.perfArtistRepository.save(artist);
    }
}
