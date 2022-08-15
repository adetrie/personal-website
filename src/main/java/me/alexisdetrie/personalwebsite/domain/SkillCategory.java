package me.alexisdetrie.personalwebsite.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entity : represents a skill category
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
@NoArgsConstructor
public class SkillCategory {

    @Getter @Setter
    private String skillCategoryName;

    @Getter @Setter
    private String color;

    @Getter @Setter
    private int order;
}
