import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bienvenue sur mon site personel 👋</title>
                <meta name="description" content="Site personel d'Alexis Détrie"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header>
                <p>Salut 👋, je suis Alexis.</p>
                <p>Développeur et Architecte en Java.</p>
                <p>Je suis un développeur Fullstack</p>
            </header>

            <main>
                <h1>A propos de moi</h1>
                <h2>Mes informations</h2>
                <p>
                    <ul>
                        <li>Prénom : Alexis</li>
                        <li>Nom : Détrie</li>
                        <li>Age : 36 ans</li>
                        <li>Nationalité : Française</li>
                        <li>Villes : Luxembourg / Metz / Thionville</li>
                        <li>Langues : Français (Natif) / Anglais (TOEIC 700)</li>
                    </ul>
                    <ul>
                        <li>6 ans en tant qu'IT Solution Architect</li>
                        <li>6 ans en tant que développeur Java</li>
                        <li>2 ans en tant que vegan 🌱</li>
                    </ul>
                </p>
                <h1>Mes compétences</h1>
                <h2>Programmation</h2>
                <ul>
                    <li>Java : 85%</li>
                    <li>Maven : 85%</li>
                    <li>Spring / Spring Boot : 75%</li>
                    <li>HTML/CSS : 70%</li>
                    <li>Java EE / Jakarta : 70%</li>
                    <li>JavaScript : 50%</li>
                    <li>React JS : 50%</li>
                </ul>
                <h2>DevSecOps</h2>
                <ul>
                    <li>CI / CD : 85%</li>
                    <li>Docker : 60%</li>
                    <li>Kubernetes : 30%</li>
                </ul>
                <h2>Sécurité</h2>
                <ul>
                    <li>OAuth 2 / OpenID Connect : 60%
                    </li>
                    <li>
                        SAML 2 : 40%
                    </li>
                </ul>
                <h2>Versioning</h2>
                <ul>
                    <li>Git : 70%</li>
                    <li>SVN : 65%</li>
                    <li>CVS : 50%</li>
                </ul>
                <h2>IDE</h2>
                <ul>
                    <li>IntelliJ IDEA : 80%</li>
                    <li>Eclipse : 70%</li>
                </ul>
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
                <h1>Mes études</h1>
                <ul>
                    <li>5ième année du cycle ingénierie (BAC +5)</li>
                    <li>Responsable en ingénierie des logiciels (BAC +4)</li>
                    <li>Option développeur d’applications (BAC +2)</li>
                </ul>
                <h1>Comment est fait ce site</h1>
                <ul>
                    <li>Code</li>
                    <li>Github</li>
                    <li>Azure DevOps</li>
                    <li>Azure</li>
                </ul>
            </main>

            <footer>
            </footer>
        </div>
    )
}
