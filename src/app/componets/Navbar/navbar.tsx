'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import settings from 'data/settings.json';

export default function Navbar(props: { navClass: any; navJustify: any; }) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);
    let [isScrolled, setIsScrolled] = useState(false);
    let [manu , setManu] = useState('');
    let pathname = usePathname();

    /** Koyu banner üzerindeyken (nav-light + sayfa başı) metin/logo açık renk; scroll'da koyu */
    const isLightNav = navClass === 'nav-light' && !isScrolled;
    
    useEffect(()=>{
        setManu(pathname)

        function windowScroll() {
            const scrolled = document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50;
            setIsScrolled(scrolled);
            const navbar = document.getElementById("topnav");
            if (navbar !== null) {
                if (scrolled) navbar.classList.add("nav-sticky");
                else navbar.classList.remove("nav-sticky");
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0);
        windowScroll(); // ilk yüklemede scroll durumunu kontrol et
        return () => window.removeEventListener('scroll', windowScroll);
    },[pathname])
    

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

    const toggleTheme = () => {
        if (document.documentElement.className.includes('dark')) {
            document.documentElement.className = 'light';
        } else {
            document.documentElement.className = 'dark';
        }
    };


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
        'navWhite' : ''}`}>
        <div className="container relative flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
                {
                    navClass === "nav-light" ? (
                        <Link className="logo flex items-center gap-2" href="/">
                            {isLightNav ? (
                                <>
                                    <Image src='/images/logo-light.png' width={40} height={24} className="inline-block" alt="" />
                                    <span className="h-6 flex items-center text-lg font-semibold leading-none text-white whitespace-nowrap">
                                        {settings.company_name}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="inline-block dark:hidden">
                                        <Image src='/images/logo-dark.png' className="l-dark" width={40} height={24} alt="" />
                                        <Image src='/images/logo-light.png' className="l-light" width={40} height={24} alt="" />
                                    </span>
                                    <Image src='/images/logo-light.png' width={40} height={24} className="hidden dark:inline-block" alt="" />
                                    <span className="h-6 flex items-center text-lg font-semibold leading-none text-slate-800 dark:text-white whitespace-nowrap">
                                        {settings.company_name}
                                    </span>
                                </>
                            )}
                        </Link>
                    ) : (
                        <Link className="logo flex items-center gap-2" href="/">
                            <Image src='/images/logo-dark.png' width={40} height={24} className="inline-block dark:hidden" alt="" />
                            <Image src='/images/logo-light.png' width={40} height={24} className="hidden dark:inline-block" alt="" />
                            <span className="h-6 flex items-center text-lg font-semibold leading-none text-slate-800 dark:text-white whitespace-nowrap">
                                {settings.company_name}
                            </span>
                        </Link>
                    )
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
                <div className="hidden md:flex items-center gap-4">
                    <button
                        type="button"
                        aria-label="Tema değiştir"
                        onClick={toggleTheme}
                        className={`size-9 inline-flex items-center justify-center rounded-full transition-colors ${isLightNav ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300'}`}
                    >
                        <HiOutlineSun className="size-5 dark:hidden" />
                        <HiOutlineMoon className="size-5 hidden dark:inline-block" />
                    </button>
                    {settings.phone1 ? (
                    <div className="flex items-center space-x-2">
                        <FiPhone className={`size-5 ${isLightNav ? 'text-white' : 'text-indigo-600'}`} />
                        <a href={`tel:${settings.phone1.replace(/\s/g, '')}`} className={`font-semibold ${isLightNav ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>
                            {settings.phone1}
                        </a>
                    </div>
                ) : null}
                </div>

                <div className={`menu-extras md:hidden flex items-center gap-2 ${isLightNav ? 'text-white' : ''}`}>
                    <button
                        type="button"
                        aria-label="Tema değiştir"
                        onClick={toggleTheme}
                        className={isLightNav ? 'size-9 inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white' : 'size-9 inline-flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300'}
                    >
                        <HiOutlineSun className="size-5 dark:hidden" />
                        <HiOutlineMoon className="size-5 hidden dark:inline-block" />
                    </button>
                    <div className="menu-item">
                        <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''} ${isLightNav ? '!text-white' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
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
