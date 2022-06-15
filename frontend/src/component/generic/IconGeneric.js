import React from 'react';
import '../../App.css';
import {
    SiApachemaven,
    SiAzurepipelines,
    SiDocker,
    SiEclipseide,
    SiGit,
    SiHtml5,
    SiIntellijidea,
    SiJava,
    SiJavascript,
    SiKubernetes,
    SiReact,
    SiSpring
} from "react-icons/si";
import "react-sweet-progress/lib/style.css";
import {AiFillFolderOpen} from "react-icons/ai";
import {MdSecurity} from "react-icons/md";


const IconGeneric = ({iconName}) => {
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
        saml: MdSecurity
    };
    let TagIcon = components[iconName];
    return (<TagIcon size={30} /> );
}

export default IconGeneric;
