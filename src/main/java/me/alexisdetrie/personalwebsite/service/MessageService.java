package me.alexisdetrie.personalwebsite.service;

import lombok.AllArgsConstructor;
import me.alexisdetrie.personalwebsite.domain.Message;
import me.alexisdetrie.personalwebsite.repository.MessageRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

/**
 * A simple message service
 *
 * @author Alexis
 * @since 1.0.0
 */
@Service
@AllArgsConstructor
public class MessageService {

    private MessageRepository messageRepository;

    /**
     * Creates a message
     *
     * @return me
     */
    public Mono<Message> addMessage(String mail, String contentMessage) {
        Message message = new Message();
        message.setMessage(contentMessage);
        message.setMail(mail);
        message.setDateCreation(LocalDateTime.now());
        return messageRepository.save(message);
    }
}
