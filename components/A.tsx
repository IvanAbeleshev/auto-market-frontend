import Link from "next/link"

interface TypeProps {
    children: React.ReactNode;
    href: string

}
const A = ({children, href}: TypeProps) =>{

    return (
        <Link href= {href}>
            <a>
                {children}
            </a>
        </Link>
    )
}

export default A;