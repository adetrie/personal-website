import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function MySkills() {
    return (
        <div>
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
        </div>
    )
}
