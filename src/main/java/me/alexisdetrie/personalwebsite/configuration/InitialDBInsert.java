package me.alexisdetrie.personalwebsite.configuration;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.alexisdetrie.personalwebsite.domain.*;
import me.alexisdetrie.personalwebsite.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


/**
 * Load default data when application is <b>started</b>
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
@Slf4j
@Configuration
@Profile("dev")
public class InitialDBInsert {

    private UserRepository repository;

    @Bean
    public CommandLineRunner demo(UserRepository repository) {
        return (args) -> {
            log.info("Starting InitialDBInsert");
            log.info("Removing existing data");
            repository.deleteAll().block();

            log.info("Create default data");
            List<ArchitectureExperience> architectureExperiences = getArchitectureExperiences();
            List<DeveloperExperience> developerExperiences = getDeveloperExperiences();
            List<Skill> skills = getSkills();

            List<Education> educations = getEducations();
            User me = new User("Alexis", "Détrie", true, architectureExperiences, developerExperiences, educations, skills);

            repository
                    .save(me)
                    .block();

            // fetch all customers
            log.info("User found with findAll():");
            log.info("-------------------------------");
            repository.findAll()
                    .collectList()
                    .block()
                    .stream()
                    .forEach(user -> log.info(user.toString()));

            log.info("End InitialDBInsert");

        };
    }

    private ArrayList<Skill> getSkills() {
        ArrayList<Skill> skills = new ArrayList<>();

        SkillCategory programming = new SkillCategory("Programmation", "#ffd53d", 0);
        SkillCategory ide = new SkillCategory("IDE", "#48cb8a", 4);
        SkillCategory devSecOps = new SkillCategory("DevSecOps", "#f25c54", 1);
        SkillCategory versioning = new SkillCategory("Versioning", "#ffd53d", 3);
        SkillCategory security = new SkillCategory("Sécurité", "#48cb8a", 2);

        skills.add(new Skill("Java", 85, "java", "#E62E33", programming));
        skills.add(new Skill("JavaScript", 50, "javascript", "#efd81c", programming));
        skills.add(new Skill("React JS", 50, "reactjs", "#6ad3f3", programming));
        skills.add(new Skill("HTML/CSS", 70, "html", "#dd4b29", programming));
        skills.add(new Skill("Spring / Spring Boot", 75, "spring", "#73b61e", programming));
        skills.add(new Skill("Java EE / Jakarta", 70, "java", "#f1b33d", programming));
        skills.add(new Skill("IntelliJ IDEA", 80, "intellij", "#000000", ide));
        skills.add(new Skill("Eclipse", 70, "eclipse", "#2b2152", ide));
        skills.add(new Skill("Maven", 85, "maven", "#d12933", programming));
        skills.add(new Skill("CI / CD", 85, "cicd", "#3b74d0", devSecOps));
        skills.add(new Skill("Git", 70, "git", "#e74e31", versioning));
        skills.add(new Skill("SVN", 65, "svn", "#9cb7d8", versioning));
        skills.add(new Skill("CVS", 50, "cvs", "#05015f", versioning));
        skills.add(new Skill("Docker", 60, "docker", "#4a92e6", devSecOps));
        skills.add(new Skill("Kubernetes", 30, "k8s", "#386adf", devSecOps));
        skills.add(new Skill("OAuth 2 / OpenID Connect", 60, "oauth2", "#000000", security));
        skills.add(new Skill("SAML 2", 40, "saml", "#bb262c", security));

        return skills;
    }

    private List<Education> getEducations() {
        List<Education> educations = new ArrayList<>();
        List<Education.EducationItem> educationItems = new ArrayList<>();
        educationItems.add(new Education.EducationItem("Supinfo Metz", "5ième année du cycle ingénierie (BAC +5)", 2009, 2011));
        educationItems.add(new Education.EducationItem("eXia.cesi Nancy", "Responsable en ingénierie des logiciels (BAC +4)", 2007, 2009));
        educationItems.add(new Education.EducationItem("BTS informatique de gestion ", "Option développeur d’applications (BAC +2)", 2005, 2007));
        educations.add(new Education(educationItems));
        return educations;
    }

    private List<DeveloperExperience> getDeveloperExperiences() {
        List<DeveloperExperience> developerExperiences = new ArrayList<>();
        developerExperiences.add(pwcDeveloperExperience());
        developerExperiences.add(ctgDeveloperExperience());
        developerExperiences.add(neopixlDeveloperExperience());
        developerExperiences.add(sogetiDeveloperExperience());

        return developerExperiences;
    }

    private DeveloperExperience pwcDeveloperExperience() {
        ArrayList<Experience.ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new Experience.ExperienceItem("Interne", "Java/JEE, Eclipse (RAD), WebSphere 8, Oracle DB, EJB2, EJB 3, Hibernate, Struts 2, Tiles, SOAP, REST, jQuery, comptabilité, LuxTrust."));

        DeveloperExperience developerExperience = DeveloperExperience.builder()
                .jobTitle("Java developer ")
                .company("PricewaterhouseCoopers Luxembourg")
                .startDate(LocalDate.of(2015, 5, 1))
                .endDate(LocalDate.of(2016, 9, 1))
                .experienceItems(experienceItems)
                .build();

        return developerExperience;
    }

    private DeveloperExperience ctgDeveloperExperience() {
        ArrayList<Experience.ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new Experience.ExperienceItem("Spuerkeess", "Java/JEE, Eclipse (RAD), WebSphere 8, DB2, CICS, ANT, CVS, SOAP"));
        experienceItems.add(new Experience.ExperienceItem("Chambre de Commerce Luxembourg", "JEE 6, EJB 3.1, GlassFish, Oracle DB, Primefaces/JSF, Maven, Git, Eclipse"));
        experienceItems.add(new Experience.ExperienceItem("Interne", "JEE 6, EJB 3.1, GlassFish, MySQL, Primefaces/JSF, Maven, Git, Eclipse"));

        DeveloperExperience developerExperience = DeveloperExperience.builder()
                .jobTitle("Java developer")
                .company("CTG")
                .startDate(LocalDate.of(2013, 8, 1))
                .endDate(LocalDate.of(2015, 5, 1))
                .experienceItems(experienceItems)
                .build();

        return developerExperience;
    }

    private DeveloperExperience neopixlDeveloperExperience() {
        ArrayList<Experience.ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new Experience.ExperienceItem("PushPixl", "Push notification, SAAS, Tomcat, Spring, REST, MySQL, Hibernate, jUnit, Jenkins, Maven, Git, Eclipse, MacOs."));
        experienceItems.add(new Experience.ExperienceItem("Wort", "Push notification, Android, Maven, Git, Eclipse, MacOs."));
        experienceItems.add(new Experience.ExperienceItem("Forem (BE)", "Formateur, Android."));

        DeveloperExperience developerExperience = DeveloperExperience.builder()
                .jobTitle("Java back end and mobile developer")
                .company("Neopixl")
                .startDate(LocalDate.of(2013, 1, 1))
                .endDate(LocalDate.of(2013, 7, 1))
                .experienceItems(experienceItems)
                .build();

        return developerExperience;
    }

    private DeveloperExperience sogetiDeveloperExperience() {
        ArrayList<Experience.ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new Experience.ExperienceItem("Adem", "JEE, Mainframe IBM, CTIE, JEE6, OpenJPA, EJB 3, Struts, HTML, jQuery, jUnit, Sélénium, Jenkins, WebSphere 8, DB2."));

        DeveloperExperience developerExperience = DeveloperExperience.builder()
                .jobTitle("Java developer")
                .company("Capgemini Sogeti Luxembourg")
                .startDate(LocalDate.of(2011, 10, 1))
                .endDate(LocalDate.of(2013, 1, 1))
                .experienceItems(experienceItems)
                .build();

        return developerExperience;
    }


    private List<ArchitectureExperience> getArchitectureExperiences() {
        ArrayList<Experience.ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new Experience.ExperienceItem("Interne", "Réalisation d’un framework basé sur Spring/Spring Boot"));
        experienceItems.add(new Experience.ExperienceItem("Interne", "Guideline et migration d’applications WebSphere 8 vers WebSphere 9"));
        experienceItems.add(new Experience.ExperienceItem("Interne", "Guideline et migration d’applications sur Maven "));
        experienceItems.add(new Experience.ExperienceItem("Interne", "Guideline et migration d’applications sur TFS/Azure DevOps"));
        experienceItems.add(new Experience.ExperienceItem("Interne", "Participation à la mise en place de SSDLC"));
        experienceItems.add(new Experience.ExperienceItem("Interne", "Participation à la migration de JVM Oracle vers JVM Azul"));
        experienceItems.add(new Experience.ExperienceItem("Interne", "Mise en place d’authentifications « modernes » (OAuth 2 / SAML)"));
        experienceItems.add(new Experience.ExperienceItem("Interne", "Mise en place de Kubernetes / Docker pour les applications Java"));
        experienceItems.add(new Experience.ExperienceItem("Interne", "Animation de la communauté Java à Luxembourg "));
        experienceItems.add(new Experience.ExperienceItem("Interne", "Support / Formation / Facilitateur"));

        ArchitectureExperience architectureExperience = ArchitectureExperience.builder()
                .jobTitle("IT Solution Architect")
                .company("PricewaterhouseCoopers Luxembourg")
                .startDate(LocalDate.of(2016, 9, 1))
                .endDate(LocalDate.of(2021, 8, 15))
                .experienceItems(experienceItems)
                .build();

        List<ArchitectureExperience> architectureExperiences = List.of(architectureExperience);
        return architectureExperiences;
    }
}
