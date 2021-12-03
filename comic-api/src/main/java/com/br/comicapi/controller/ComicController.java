package com.br.comicapi.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.br.comicapi.model.Comics;
import com.br.comicapi.model.Users;
import com.br.comicapi.service.ComicService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ComicController {

    Logger logger = LoggerFactory.getLogger(ComicController.class);
	
	@Autowired
	private ComicService jumpService;

	@CrossOrigin
	@PostMapping("comics/save")
	public ResponseEntity<?> save(@RequestBody List<Comics> issues) {
		try {
			HashMap response = new HashMap<>();
			response.put("message", "Ok.");
			this.jumpService.save(issues);

			return ResponseEntity.ok("response");
		} catch (Exception e) {
			return ResponseEntity.ok("Not ok.");
		}
		
	}

    @GetMapping("comics/byid/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id) {
		try {
			Comics issue = this.jumpService.findById(id);
			return ResponseEntity.ok(issue);
		} catch (Exception e) {
			logger.error("Error at ComicController, method findById(): " + id, e);
            return ResponseEntity.ok("Not ok.");
		}
		
	}

	@GetMapping("comics/recently-published/")
	public ResponseEntity<?> findAllRecentlyPublished() {
		try {
			List<Comics> issue = this.jumpService.findAllRecentlyPublished();
			return ResponseEntity.ok(issue);
		} catch (Exception e) {
			logger.error("Error at ComicController, method findAllRecentlyPublished(): ", e);
            return ResponseEntity.ok("Not ok.");
		}
		
	}

	@GetMapping("comics/recently-added/")
	public ResponseEntity<?> findAllRecentlyAdded() {
		try {
			List<Comics> issue = this.jumpService.findAllRecentlyAdded();
			return ResponseEntity.ok(issue);
		} catch (Exception e) {
			logger.error("Error at ComicController, method findAllRecentlyAdded(): ", e);
            return ResponseEntity.ok("Not ok.");
		}
		
	}

	@GetMapping("comics/search/byname/{name}")
	public ResponseEntity<?> findComicsByName(@PathVariable String name) {
		try {
			List<Comics> issue = this.jumpService.findComicsByName(name);
			return ResponseEntity.ok(issue);
		} catch (Exception e) {
			logger.error("Error at ComicController, method findAllRecentlyAdded(): ", e);
            return ResponseEntity.ok("Not ok.");
		}
		
	}

	@PostMapping("user/save")
	public ResponseEntity<?> findComicsByName(@RequestBody Users user) {
		try {
			this.jumpService.saveUser(user);
			return ResponseEntity.ok("Salvou");
		} catch (Exception e) {
			logger.error("Error at ComicController, method findAllRecentlyAdded(): ", e);
            return ResponseEntity.ok("Not ok.");
		}
		
	}

		 
}
