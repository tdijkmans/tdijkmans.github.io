import { ReactNode } from 'react'
import './NewspaperSection.css'

type props = {
    children: ReactNode
    className?: string
    id?: string
}

export default function NewspaperSection({ children, className, id }: props) {
    return (
        <section className={`newspaper-section ${className || ''}`} id={id}>
            {children}
        </section>
    )
}
