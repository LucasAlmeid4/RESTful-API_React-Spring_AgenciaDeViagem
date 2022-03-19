package com.api.recodeairline.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.recodeairline.models.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
