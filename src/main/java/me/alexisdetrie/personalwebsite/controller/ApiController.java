package me.alexisdetrie.personalwebsite.controller;

import lombok.AllArgsConstructor;
import me.alexisdetrie.personalwebsite.domain.User;
import me.alexisdetrie.personalwebsite.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

/**
 * Default api
 *
 * @author Alexis
 * @since 1.0.0
 */
@RestController(value = "/api")
@AllArgsConstructor
public class ApiController {

    private UserService userService;

    @GetMapping(value = "/me")
    public Mono<User> getUser() {
        return userService.getMe();
    }
}
