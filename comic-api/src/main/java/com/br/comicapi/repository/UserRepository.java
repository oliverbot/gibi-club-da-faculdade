package com.br.comicapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;


import com.br.comicapi.model.Comics;
import com.br.comicapi.model.Users;

@Component
public interface UserRepository extends CrudRepository<Users, Long> {

    Optional<Users> findById(Long id);

}
