package me.alexisdetrie.personalwebsite.configuration;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.alexisdetrie.personalwebsite.domain.User;
import me.alexisdetrie.personalwebsite.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;


@AllArgsConstructor
@Slf4j
@Configuration
@Profile("dev")
public class StartImport {

    private UserRepository repository;

    @Bean
    public CommandLineRunner demo(UserRepository repository) {
        return (args) -> {
            log.info("Starting StartImport");
            // save a few customers
            repository
                    .save(new User("Alexis", "Détrie"))
                    .block();

            // fetch all customers
            log.info("Customers found with findAll():");
            log.info("-------------------------------");
            repository.findAll()
                    .collectList()
                    .block()
                    .stream()
                    .forEach(user -> log.info(user.toString()));

            log.info("End StartImport");

        };
    }
}
