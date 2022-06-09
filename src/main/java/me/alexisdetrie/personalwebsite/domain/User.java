package me.alexisdetrie.personalwebsite.domain;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.GeneratedValue;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;


@Container(containerName = "users-container", ru = "400")
@NoArgsConstructor
@ToString
public class User {

    public User(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    @Id
    @GeneratedValue
    @Getter @Setter
    private String id;

    @PartitionKey
    @Getter @Setter
    private String firstName;
    @Getter @Setter
    private String lastName;
}
