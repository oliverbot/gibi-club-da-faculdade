package com.br.comicapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Id;

import org.hibernate.annotations.AccessType;

import lombok.Getter;
import lombok.Setter;

@SuppressWarnings("serial")
@Entity
@Table(name = "users")
@Getter
@Setter
public class Users implements Serializable {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

    @Temporal(TemporalType.TIMESTAMP)
	@Column(name = "added_date", columnDefinition = "TIMESTAMP DEFAULT current_timestamp")
	private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_date", columnDefinition = "TIMESTAMP DEFAULT current_timestamp")
	private Date updatedAt;
	
	@Column(name = "name")
	private String name;

	@Column(name = "password")
	private String password;

	@Column(name = "email")
	private String email;

    @PreUpdate
	public void updateTimeStamp() {
		updatedAt = new Date();
	}
    
    @PrePersist
	public void initTimeStamps() {
		createdAt = new Date();
	}
	
}

