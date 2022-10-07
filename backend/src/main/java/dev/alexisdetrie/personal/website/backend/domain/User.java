package dev.alexisdetrie.personal.website.backend.domain;

import lombok.*;

import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {

    @Getter @Setter
    private String id;

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

    @Getter @Setter
    private List<Skill> skills;

    public User(String firstName, String lastName, boolean me, List<ArchitectureExperience> architectureExperiences, List<DeveloperExperience> developerExperiences, List<Education> educations, List<Skill> skills) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.me = me;
        this.architectureExperiences = architectureExperiences;
        this.developerExperiences = developerExperiences;
        this.educations = educations;
        this.skills = skills;
    }
}
