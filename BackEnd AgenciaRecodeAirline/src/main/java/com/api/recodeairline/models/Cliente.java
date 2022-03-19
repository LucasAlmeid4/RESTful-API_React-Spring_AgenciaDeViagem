package com.api.recodeairline.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Cliente extends Pessoa implements Serializable {

	private static final long serialVersionUID = 4579446684297450847L;
	
	@NotBlank
	@Email
	@Column(nullable = false, unique= true ,length = 50)
	private String email;
	
	@NotBlank
	@Size(max=8)
	@Column(nullable = false, length = 8)
	private String password;
	

	public Cliente() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	

}
