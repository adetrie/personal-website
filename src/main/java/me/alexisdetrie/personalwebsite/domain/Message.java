package me.alexisdetrie.personalwebsite.domain;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.GeneratedValue;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.util.List;


@Container(containerName = "message-container", ru = "400")
@NoArgsConstructor
@ToString
public class Message {

    @Id
    @GeneratedValue
    @Getter @Setter
    private String id;

    @PartitionKey
    @Getter @Setter
    private String message;

    @Getter @Setter
    private String mail;

    @Getter @Setter
    private LocalDateTime dateCreation;

}
