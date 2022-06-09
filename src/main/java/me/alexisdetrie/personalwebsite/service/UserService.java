package me.alexisdetrie.personalwebsite.service;

import lombok.AllArgsConstructor;
import me.alexisdetrie.personalwebsite.domain.User;
import me.alexisdetrie.personalwebsite.repository.UserRepository;
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

    private UserRepository userRepository;


    /**
     * Returns me
     * @return me
     */
    public Mono<User> getMe() {
        return userRepository.findMe();
    }
}
