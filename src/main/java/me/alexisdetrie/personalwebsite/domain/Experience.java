package me.alexisdetrie.personalwebsite.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;
/**
 * Abstract Entity : default properties for @{@link ArchitectureExperience} and @{@link DeveloperExperience}
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
public abstract class Experience {

    @Getter @Setter
    private String jobTitle;

    @Getter @Setter
    private String company;

    @Getter @Setter
    private String icon;

    @Getter @Setter
    private LocalDate startDate;

    @Getter @Setter
    private LocalDate endDate;

    @Getter @Setter
    private List<ExperienceItem> experienceItems;

    public record ExperienceItem(String company, String description, String icon) {}
}
