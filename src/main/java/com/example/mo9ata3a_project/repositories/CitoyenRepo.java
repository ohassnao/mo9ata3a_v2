package com.example.mo9ata3a_project.repositories;
import com.example.mo9ata3a_project.entities.Citoyen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CitoyenRepo extends JpaRepository<Citoyen, Long> {


}

