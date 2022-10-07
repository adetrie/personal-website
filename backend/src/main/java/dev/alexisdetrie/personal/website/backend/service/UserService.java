package dev.alexisdetrie.personal.website.backend.service;

import dev.alexisdetrie.personal.website.backend.domain.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

/**
 * A simple user service
 *
 * @author Alexis
 * @since 1.0.0
 */
@Service
@AllArgsConstructor
public class UserService {

    /**
     * Returns me
     * @return me
     */
    public Mono<User> getMe() {
        throw new RuntimeException("Not implemented");
    }

}
