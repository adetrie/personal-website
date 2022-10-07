package dev.alexisdetrie.personal.website.backend.controller;

import dev.alexisdetrie.personal.website.backend.domain.User;
import dev.alexisdetrie.personal.website.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

/**
 * Default api, return me 😅
 *
 * @author Alexis
 * @since 1.0.0
 */
@RestController
@RequestMapping("/api")
@AllArgsConstructor
@CrossOrigin
public class ApiController {

    private UserService userService;

    @GetMapping(value = "/me")
    public Mono<User> getUser() {
        return userService.getMe().log();
    }

}
