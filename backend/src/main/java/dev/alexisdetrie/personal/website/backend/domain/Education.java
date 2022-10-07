package dev.alexisdetrie.personal.website.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * Entity : represents an education
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
@NoArgsConstructor
public class Education {

    @Getter @Setter
    private String id;

    @Getter @Setter
    List<EducationItem> educationItems;

    public record EducationItem(String school, String titre, int startYear, int endYear){}

    public Education(List<EducationItem> educationItems) {
        this.educationItems = educationItems;
    }
}
