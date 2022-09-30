import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function MyProSkills() {
    return (
        <div>
            <h1>Mes expériences professionnelles</h1>
            <h2>Mes expériences en tant qu'architecte</h2>
            <dl>
                <dt>IT Solution Architect - PricewaterhouseCoopers Luxembourg</dt>
                <dd>
                    <ul>
                        <li>Réalisation d’un framework basé sur Spring/Spring Boot</li>
                        <li>Guidelines et migration d’applications WebSphere 8 vers WebSphere 9</li>
                        <li>Guidelines et migration d’applications sur Maven</li>
                        <li>Guidelines et migration d’applications sur TFS/Azure DevOps</li>
                        <li>Participation à la mise en place de SSDLC</li>
                        <li>Participation à la migration de JVM Oracle vers JVM Azul</li>
                        <li>Mise en place d’authentifications « modernes » (OAuth 2 / SAML)</li>
                        <li>Mise en place de Kubernetes / Docker pour les applications Java</li>
                        <li>Animation de la communauté Java à Luxembourg</li>
                        <li>Support / Formation / Facilitateur</li>
                    </ul>
                </dd>
            </dl>
            <h2>Mes expériences en tant que développeur</h2>
            <dl>
                <dt>Java developer - Banque Degroof Petercam Luxembourg 08-2021 au 06-2022</dt>
                <dd>Java 11, Spring Boot, Talend, Flex, Linux</dd>
                <dl>
                    <dt>Java developer - PricewaterhouseCoopers Luxembourg 05-2015 au 09-2016</dt>
                    <dd>Java/JEE, Eclipse (RAD), WebSphere 8, Oracle DB, EJB 2, EJB 3, Hibernate, Struts 2, Tiles,
                        SOAP,
                        REST, jQuery, comptabilité, LuxTrust.
                    </dd>
                </dl>
                <dl>
                    <dt>Java developer - CTG 08-2013 au 05-2015</dt>
                    <dd>Spuerkeess : Java/JEE, Eclipse (RAD), WebSphere 8, DB2, CICS, ANT, CVS, SOAP</dd>
                    <dd>Chambre de Commerce Luxembourg : JEE 6, EJB 3.1, GlassFish, Oracle DB, Primefaces/JSF,
                        Maven, Git, Eclipse
                    </dd>
                    <dd>Interne : JEE 6, EJB 3.1, GlassFish, MySQL, Primefaces/JSF, Maven, Git, Eclipse</dd>
                </dl>
                <dl>
                    <dt>Java back end and mobile developer - Neopixl 01-2013 au 07-2013</dt>
                    <dd>PushPixl : Push notification, SAAS, Tomcat, Spring, REST, MySQL, Hibernate, jUnit, Jenkins,
                        Maven, Git, Eclipse, MacOs.
                    </dd>
                    <dd>Wort : Push notification, Android, Maven, Git, Eclipse, MacOs.</dd>
                    <dd>Forem : (BE)Formateur, Android.</dd>
                </dl>
                <dl>
                    <dt>Java developer - Capgemini Sogeti Luxembourg 10-2011 au 01-2013</dt>
                    <dd>Adem : JEE, Mainframe IBM, CTIE, JEE6, OpenJPA, EJB 3, Struts, HTML, jQuery, jUnit,
                        Sélénium, Jenkins, WebSphere 8, DB2.
                    </dd>
                </dl>
            </dl>

        </div>
    )
}
