package me.alexisdetrie.personalwebsite.domain;

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
    List<EducationItem> educationItems;

    public record EducationItem(String ecole, String titre, int startYear, int endYear){}
}
