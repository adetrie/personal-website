package me.alexisdetrie.personalwebsite.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 * Entity : represents a skill
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
public class Skill {

    @Getter @Setter
    private String skillName;

    @Getter @Setter
    private int skillLevel;

    @Getter @Setter
    private String logo;

    @Getter @Setter
    private String color;

    @Getter @Setter
    private SkillCategory category;
}
