package com.PerforHere.API.controllers;

import com.PerforHere.API.entities.PerfArtist;
import com.PerforHere.API.entities.PerfUser;
import com.PerforHere.API.services.PerfUserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("perfUsers")
public class PerfUserController {

   public PerfUserService perfUserService;

   public PerfUserController(PerfUserService perfUserService) {
       this.perfUserService = perfUserService;
   }

   @GetMapping("getAll")
   public List<PerfUser> getAllUsers() {
       return this.perfUserService.getAllUsers();
   }

   @PostMapping("add")
    public PerfUser addUser(@RequestBody PerfUser perfUser) {
       return this.perfUserService.saveUser(perfUser);
   }
}
