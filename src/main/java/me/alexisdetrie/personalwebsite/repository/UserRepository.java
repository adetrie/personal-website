package me.alexisdetrie.personalwebsite.repository;

import com.azure.spring.data.cosmos.repository.ReactiveCosmosRepository;
import me.alexisdetrie.personalwebsite.domain.User;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface UserRepository extends ReactiveCosmosRepository<User, String> {

  Flux<User> findByLastName(String lastName);

  Mono<User> findById(long id);
}