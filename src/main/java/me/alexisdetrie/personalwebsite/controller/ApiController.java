package me.alexisdetrie.personalwebsite.controller;

import lombok.AllArgsConstructor;
import me.alexisdetrie.personalwebsite.domain.User;
import me.alexisdetrie.personalwebsite.service.MessageService;
import me.alexisdetrie.personalwebsite.service.UserService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.Map;

/**
 * Default api
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
    private MessageService messageService;

    @GetMapping(value = "/me")
    public Mono<User> getUser() {
        return userService.getMe();
    }

    @PutMapping(value = "/message")
    public void addMessage(@RequestBody Map<String, Object> payload) {
        messageService.addMessage((String) payload.get("email"), (String) payload.get("message"));
    }
}
