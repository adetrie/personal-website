package me.alexisdetrie.personalwebsite.repository;

import com.azure.spring.data.cosmos.repository.Query;
import com.azure.spring.data.cosmos.repository.ReactiveCosmosRepository;
import me.alexisdetrie.personalwebsite.domain.User;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * A simple user repository :)
 *
 * @author Alexis
 * @since 1.0.0
 */
public interface UserRepository extends ReactiveCosmosRepository<User, String> {

  Flux<User> findByLastName(String lastName);
  Mono<User> findById(long id);

  /**
   * Returns me :P
   * @return me
   */
  @Query("select * from c where c.me = true")
  Mono<User> findMe();
}