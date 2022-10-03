import Head from 'next/head'
import SectionHeader from "../components/SectionHeader";
import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import MyProSkills from "../components/MyProSkills";
import MyStudies from "../components/MyStudies";
import Others from "../components/Others";

export default function Home() {
    return (
        <>
            <Head>
                <title>Bienvenue sur mon site personel 👋</title>
                <meta name="description" content="Site personel d'Alexis Détrie"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
            </Head>

            <SectionHeader/>

            <main>
                <AboutMe/>
                <MySkills/>
                <MyProSkills/>
                <MyStudies/>
                <Others/>
            </main>

            <footer>
            </footer>
        </>
    )
}
