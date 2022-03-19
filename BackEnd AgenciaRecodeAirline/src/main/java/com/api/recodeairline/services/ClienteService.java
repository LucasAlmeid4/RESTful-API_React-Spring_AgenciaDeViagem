package com.api.recodeairline.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.recodeairline.models.Cliente;
import com.api.recodeairline.repositories.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;

	public List<Cliente> findAll() {
		return repository.findAll();
	}

	public Optional<Cliente> findById(Long id) {
		return repository.findById(id);
	}

	public void save(Cliente cliente) {
		repository.save(cliente);
	}

	public Cliente update(Cliente cliente) {
		
		return repository.save(cliente);
	}

	public void deleteById(Long id) {
		repository.deleteById(id);
	}

}
