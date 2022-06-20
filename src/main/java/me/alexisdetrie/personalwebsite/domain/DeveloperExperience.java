package me.alexisdetrie.personalwebsite.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

/**
 * Entity : represents a developer experience
 *
 * @author Alexis
 * @since 1.0.0
 */
@Getter
@ToString
public class DeveloperExperience extends Experience {

    @Builder
    public DeveloperExperience(String jobTitle, String company, String icon, LocalDate startDate, LocalDate endDate, List<ExperienceItem> experienceItems) {
        super(jobTitle, company, icon, startDate, endDate, experienceItems);
    }
}
