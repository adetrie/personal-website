import React from 'react';
import '../../App.css';
import {
    SiApachemaven,
    SiAzurepipelines,
    SiDocker,
    SiEclipseide,
    SiGit,
    SiHtml5, SiIbm,
    SiIntellijidea,
    SiJava,
    SiJavascript,
    SiKubernetes,
    SiReact,
    SiSpring
} from "react-icons/si";
import "react-sweet-progress/lib/style.css";
import {AiFillAndroid, AiFillFolderOpen} from "react-icons/ai";
import {MdBusiness, MdHomeRepairService, MdSecurity, MdWork} from "react-icons/md";
import {GiTeacher} from "react-icons/gi";
import {IoHelpBuoyOutline, IoRocket} from "react-icons/io5";
import {ImNewspaper} from "react-icons/im";
import {IoMdNotificationsOutline} from "react-icons/io";
import {FaFlagUsa} from "react-icons/fa";
import {BsBank2} from "react-icons/bs";
import {GoGraph} from "react-icons/go";
import {MdComputer} from "react-icons/md";



const IconGeneric = ({iconName, color}) => {
    const components = {
        java: SiJava,
        spring: SiSpring,
        javascript: SiJavascript,
        reactjs: SiReact,
        html: SiHtml5,
        intellij: SiIntellijidea,
        eclipse: SiEclipseide,
        maven: SiApachemaven,
        cicd: SiAzurepipelines,
        git: SiGit,
        svn: AiFillFolderOpen,
        cvs: AiFillFolderOpen,
        docker: SiDocker,
        k8s: SiKubernetes,
        oauth2: MdSecurity,
        saml: MdSecurity,
        security: MdSecurity,

        ibm: SiIbm,
        teacher: GiTeacher,
        support: IoHelpBuoyOutline,
        work: MdWork,
        android: AiFillAndroid,
        wort: ImNewspaper,
        push: IoMdNotificationsOutline,
        fatca: FaFlagUsa,
        cdc: MdBusiness,
        bank: BsBank2,
        graph: GoGraph,
        computer: MdComputer,

        service: MdHomeRepairService,
        rocket: IoRocket


    };
    let TagIcon = components[iconName];
    return (<TagIcon size={30} color={color}/> );
}

export default IconGeneric;
