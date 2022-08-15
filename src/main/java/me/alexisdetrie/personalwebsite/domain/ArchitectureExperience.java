package me.alexisdetrie.personalwebsite.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

/**
 * Entity : represents an architecture experience
 *
 * @author Alexis
 * @since 1.0.0
 */
@Getter
@ToString
public class ArchitectureExperience extends Experience {

    @Builder
    public ArchitectureExperience(String jobTitle, String company, String icon, LocalDate startDate, LocalDate endDate, List<ExperienceItem> experienceItems) {
        super(jobTitle, company, icon, startDate, endDate, experienceItems);
    }
}
