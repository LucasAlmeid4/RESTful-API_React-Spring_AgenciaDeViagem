package com.api.recodeairline.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Destinos implements Serializable {
	
	private static final long serialVersionUID = 4421647172477097046L;


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idDestino;
	
	@NotBlank
	@Size(max=60)
	@Column(nullable = false, unique= true , length = 60)
	private String city;
	
	@NotBlank
	@Size(max=50)
	@Column(nullable = false, length = 50)
	private String state;
	
	@NotBlank
	@Size(max=50)
	@Column(nullable = false, length = 50)
	private String country;
	
	@NotBlank
	@Column(nullable = false)
	private String descricao;
	
	@Column(nullable = false)
	private Double preco;
	
	@NotBlank
	@Column(nullable = false)
	private String imgDestino;
	
	
	

	public Destinos() {
	}

	public Long getIdDestino() {
		return idDestino;
	}

	public void setIdDestino(Long idDestino) {
		this.idDestino = idDestino;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public String getImgDestino() {
		return imgDestino;
	}

	public void setImgDestino(String imgDestino) {
		this.imgDestino = imgDestino;
	}

}
