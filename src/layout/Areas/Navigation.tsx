import { MouseEvent, ReactNode } from 'react'
import { A, LI, UL } from '../../components/Typography'
import './Navigation.css'

const NavButtonWithScroll = (props: { href: string; children: ReactNode }) => {
    const scrollIntoView = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const target = e.currentTarget.getAttribute('href')
        const element = document.querySelector(target!)
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        })
    }

    return (
        <LI className="navigation__item">
            <A onClick={scrollIntoView} href={props.href}>
                {props.children}
            </A>
        </LI>
    )
}

export function Navigation() {
    return (
        <nav className="navigation" id="navigation">
            <UL className="navigation__list">
                <NavButtonWithScroll href="#lead-story">
                    Hoofdartikel
                </NavButtonWithScroll>

                <NavButtonWithScroll href="#top-stories">
                    Topverhalen
                </NavButtonWithScroll>

                <NavButtonWithScroll href="#international">
                    Internationaal
                </NavButtonWithScroll>

                <NavButtonWithScroll href="#local-news">
                    Lokaal
                </NavButtonWithScroll>

                <NavButtonWithScroll href="#business">
                    Zaken
                </NavButtonWithScroll>

                <NavButtonWithScroll href="#sports">Sport</NavButtonWithScroll>

                <NavButtonWithScroll href="#entertainment">
                    Entertainment
                </NavButtonWithScroll>

                <NavButtonWithScroll href="#weather">Weer</NavButtonWithScroll>

                <NavButtonWithScroll href="#opinion">
                    Opinie
                </NavButtonWithScroll>

                <NavButtonWithScroll href="#letters-editor">
                    Brieven
                </NavButtonWithScroll>
            </UL>
        </nav>
    )
}
