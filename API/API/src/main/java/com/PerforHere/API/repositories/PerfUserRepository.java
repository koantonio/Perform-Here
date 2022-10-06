package com.PerforHere.API.repositories;

import com.PerforHere.API.entities.PerfUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerfUserRepository extends JpaRepository<PerfUser, String> {

}
