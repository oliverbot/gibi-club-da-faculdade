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

@Component
public interface ComicsRepository extends CrudRepository<Comics, Long> {

    Optional<Comics> findById(Long id);

    @Query("SELECT c FROM Comics c ORDER BY c.coverDate DESC")
    List<Comics> findAllByOrderByCoverDateDesc();

    @Query("SELECT c FROM Comics c ORDER BY c.createdAt DESC")
    List<Comics> findAllByOrderByAddedDateDesc();

    @Query("SELECT c FROM Comics c WHERE c.name LIKE CONCAT('%',?1,'%')")
    List<Comics> findComicsByName(String name);

}
