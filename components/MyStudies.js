import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function MyStudies() {
    return (
        <div>
            <h1>Mes études</h1>
            <ul>
                <li>5ième année du cycle ingénierie (BAC +5)</li>
                <li>Responsable en ingénierie des logiciels (BAC +4)</li>
                <li>Option développeur d’applications (BAC +2)</li>
            </ul>
        </div>
    )
}
