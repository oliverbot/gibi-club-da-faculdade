package com.br.comicapi.service;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.net.URLEncoder;
import java.security.SecureRandom;
import java.text.ParseException;
import java.util.Date;
import java.util.List;

import com.br.comicapi.model.Comics;
import com.br.comicapi.model.Users;
import com.br.comicapi.repository.ComicsRepository;
import com.br.comicapi.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

import com.br.comicapi.utils.DBuilder;

@Component(value = "ComicService")
public class ComicService {

	@Autowired
	private ComicsRepository repository;

	@Autowired
	private UserRepository uRepository;

	
	public void save(List<Comics> issues) throws Exception {
		this.repository.saveAll(issues);
	}

    public Comics findById(Long id) throws Exception {
        Comics issue = this.repository.findById(id).get();
        return issue;
    }

	public List<Comics> findAllRecentlyPublished() throws Exception {
        List<Comics> issue = this.repository.findAllByOrderByCoverDateDesc();
        return issue;
    }

	public List<Comics> findAllRecentlyAdded() throws Exception {
        List<Comics> issue = this.repository.findAllByOrderByAddedDateDesc();
        return issue;
    }

	public List<Comics> findComicsByName(String name) throws Exception {
        List<Comics> issue = this.repository.findComicsByName(name);
        return issue;
    }

	public void saveUser(Users user) throws Exception {
        this.uRepository.save(user);
    }
	
}
