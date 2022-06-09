package me.alexisdetrie.personalwebsite.domain;

import com.azure.spring.data.cosmos.core.mapping.Container;
import com.azure.spring.data.cosmos.core.mapping.GeneratedValue;
import com.azure.spring.data.cosmos.core.mapping.PartitionKey;
import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;


@Container(containerName = "users-container", ru = "400")
@NoArgsConstructor
@ToString
public class User {

    public User(String firstName, String lastName, boolean me, List<ArchitectureExperience> architectureExperiences, List<DeveloperExperience> developerExperiences, List<Education> educations) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.me = me;
        this.architectureExperiences = architectureExperiences;
        this.developerExperiences = developerExperiences;
        this.educations = educations;
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

    @Getter @Setter
    private boolean me;

    @Getter @Setter
    private List<ArchitectureExperience> architectureExperiences;

    @Getter @Setter
    private List<DeveloperExperience> developerExperiences;

    @Getter @Setter
    private List<Education> educations;


}
