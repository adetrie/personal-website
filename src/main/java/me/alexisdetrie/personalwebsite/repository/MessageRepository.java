package me.alexisdetrie.personalwebsite.repository;

import com.azure.spring.data.cosmos.repository.Query;
import com.azure.spring.data.cosmos.repository.ReactiveCosmosRepository;
import me.alexisdetrie.personalwebsite.domain.Message;
import me.alexisdetrie.personalwebsite.domain.User;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * A simple message repository :)
 *
 * @author Alexis
 * @since 1.0.0
 */
public interface MessageRepository extends ReactiveCosmosRepository<Message, String> {

}