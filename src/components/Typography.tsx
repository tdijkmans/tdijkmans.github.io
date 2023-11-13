import './Typography.css'

type props = {
    children: React.ReactNode
    className?: string
    onClick?: (e: React.MouseEvent<HTMLHeadingElement>) => void
}

const H1 = ({ children, className, onClick }: props) => (
    <h1 onClick={onClick} className={`custom-h1 ${className || ''}`}>
        {children}
    </h1>
)

const H2 = ({ children, className, onClick }: props) => (
    <h2 onClick={onClick} className={`custom-h2 ${className || ''}`}>
        {children}
    </h2>
)

const H3 = ({ children, className, onClick }: props) => (
    <h3 onClick={onClick} className={`custom-h3 ${className || ''}`}>
        {children}
    </h3>
)

const P = ({ children, className, onClick }: props) => (
    <p onClick={onClick} className={`custom-p ${className || ''}`}>
        {children}
    </p>
)

type aProps = {
    children: React.ReactNode
    className?: string
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
    href?: string
}

const A = ({ children, className, onClick, href }: aProps) => (
    <a onClick={onClick} href={href} className={`custom-a ${className || ''}`}>
        {children}
    </a>
)

const UL = ({ children, className }: props) => (
    <ul className={`custom-ul ${className || ''}`}>{children}</ul>
)

const LI = ({ children, className }: props) => (
    <li className={`custom-li ${className || ''}`}>{children}</li>
)

export { A, H1, H2, H3, LI, P, UL }
