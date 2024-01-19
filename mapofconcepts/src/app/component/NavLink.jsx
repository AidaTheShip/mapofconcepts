import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className="text-xl text-black hover:text-blue-500">
                {title}
        </Link>
    );
}

export default NavLink;
