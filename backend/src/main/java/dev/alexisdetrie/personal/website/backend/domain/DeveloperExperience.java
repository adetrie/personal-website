package dev.alexisdetrie.personal.website.backend.domain;

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
    public DeveloperExperience(String id, String jobTitle, String company, String icon, LocalDate startDate, LocalDate endDate, List<ExperienceItem> experienceItems) {
        super(id, jobTitle, company, icon, startDate, endDate, experienceItems);
    }
}
