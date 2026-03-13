'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { FiPhone } from 'react-icons/fi';

export default function Navbar(props: { navClass: any; navJustify: any; }) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);
    
    let [manu , setManu] = useState('');
    let pathname = usePathname();
    
    useEffect(()=>{
        setManu(pathname)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    },[setManu])
    

    const toggleMenu = () => {
        setisMenu(!isMenu);
        const navigation = document.getElementById("navigation");
        if (navigation) {
            const anchorArray = Array.from(navigation.getElementsByTagName("a"));

                anchorArray.forEach((element) => {
                    element.addEventListener("click", (event) => {
                        const target = event.target as HTMLElement;
                        const href = target.getAttribute("href");

                        if (href && href !== "") {
                            const nextSibling = target.nextElementSibling as HTMLElement | null;
                            if (nextSibling && nextSibling.nextElementSibling) {
                                const submenu = nextSibling.nextElementSibling as HTMLElement;
                                submenu.classList.toggle("open");
                            }
                        }
                    });
                });
        }
    };


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
        'navWhite' : ''}`}>
        <div className="container relative flex items-center justify-between py-3">
            <div className="flex items-center">
                {
                    navClass === "nav-light" ?
                        <Link className="logo" href="/">
                            <span className="inline-block dark:hidden">
                                <Image src='/images/logo-dark.png' className="l-dark" width={138} height={24}  alt="" />
                                <Image src='/images/logo-light.png' className="l-light" width={138} height={24} alt="" />
                            </span>
                            <Image src='/images/logo-light.png' width={138} height={24} className="hidden dark:inline-block" alt="" />
                        </Link>
                        :
                        <Link className="logo" href="/">
                            <Image src='/images/logo-dark.png' width={138} height={24} className="inline-block dark:hidden" alt="" />
                            <Image src='/images/logo-light.png' width={138} height={24} className="hidden dark:inline-block" alt="" />
                        </Link>
                }

            </div>

            <div className="flex items-center ms-auto space-x-6">
                <div id="navigation" className="hidden md:block" style={{ display: isMenu ? 'block' : undefined }}>
                    <ul className={`navigation-menu ${navClass} ${navJustify} flex items-center justify-end space-x-6`}>
                        <li className={manu === "/" || manu === "/index-food-blog" ? "active" : ""}>
                            <Link href="/" className="sub-menu-item">Anasayfa</Link>
                        </li>
                        <li className={manu === "/page-aboutus" ? "active" : ""}>
                            <Link href="/page-aboutus" className="sub-menu-item">Hakkımızda</Link>
                        </li>
                        <li className={manu === "/contact-one" ? "active" : ""}>
                            <Link href="/contact-one" className="sub-menu-item">İletişim</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    <FiPhone className="text-indigo-600 size-5" />
                    <a href="tel:+902122223344" className="font-semibold text-slate-800 dark:text-slate-100">
                        +90 212 222 33 44
                    </a>
                </div>

                <div className="menu-extras md:hidden">
                    <div className="menu-item">
                        <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    </nav >
    )
}
