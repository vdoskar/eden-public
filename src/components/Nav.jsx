import { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from "react-router-dom"
import translations from '../translations/nav.json';

const lang = localStorage.getItem('lang') || 'cz';
const NavStructure = [
    {
        title: translations[lang].about,
        link: "",
        submenu: [
            {
                title: translations[lang].accomodation,
                link: "ubytovani",
            },
            {
                title: translations[lang].catering,
                link: "stravovani",
            },
        ]
    },
    {
        title: translations[lang].funAndSport,
        link: "zabava-a-sport",
        submenu: []
    },
    {
        title: translations[lang].tipsForTrips,
        link: "tipy-na-vylet",
        submenu: []
    },
    {
        title: translations[lang].pricing,
        link: "cenik",
        submenu: []
    },
    {
        title: translations[lang].contact,
        link: "kontakt",
        submenu: [
            {
                title: translations[lang].reservation,
                link: "rezervace",
            }
        ]
    },
]

const NavItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMouseClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className={`navbar__item`}>
            <div className='submenu-hold'>
                <NavLink to={`/${item.link}`} >
                    {item.title}
                </NavLink>
                {item.submenu.length > 0 &&
                    <span className='open-submenu'>
                        <button 
                            className={`submenu-btn ${isOpen ? "active-submenu-btn" : ""}`} 
                            onClick={handleMouseClick} 
                        >
                            <img src="https://cdn.edenjinolice.cz/web_assets/arrow.webp" alt="Ikonka šipky dolů" className='icon'/>
                        </button>
                    </span>
                }
            </div>

            {item.submenu.length > 0 && isOpen && (
                <ul className={`navbar__submenu ${isOpen ? "navbar__submenu_active" : ""}`}>
                    {item.submenu.map((submenuItem, index) => (
                        <SubmenuItem 
                            key={index} 
                            submenuItem={submenuItem}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

const SubmenuItem = ({ submenuItem }) => {

    const [activeTab, setActiveTab] = useState('');
    const location = useLocation();

    useEffect(() => {
        setActiveTab(getActiveTab(window.location.pathname));
    }, [location]);

    const getActiveTab = (currentPath) => {
        if (currentPath === '/') {
            return 'uvod';
        } else {
            return currentPath.substring(1);
        }
    };

    return (
        <li>
            <Link to={`/${submenuItem.link}`} className={activeTab === `/${submenuItem.link}` ? 'active' : ''}>
                {submenuItem.title}
            </Link>
        </li>
    );
};

function Navigation() {
    const [previousLocation, setPreviousLocation] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navWidth = 1148;
    let resizeTimer;
    let currentLocation = useLocation();

    // ukládá poslední navštívenou stránku a zavírá nav při kliku na linky
    useEffect(() => {
        const currentPath = window.location.pathname;
        if (previousLocation != currentPath) {
            if (window.innerWidth <= navWidth && isMobileMenuOpen) {
                toggleMobileMenu();
            }
        }
        setPreviousLocation(currentPath)
    }, [currentLocation]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.querySelectorAll(".overflow")[0].style.opacity = "0.5";
        } else {
            document.querySelectorAll(".overflow")[0].style.opacity = "1";
        }
    };

    useEffect(() => {
        document.querySelectorAll(".overflow")[0].addEventListener("click", () => {
            if (window.innerWidth <= navWidth && isMobileMenuOpen) {
                toggleMobileMenu();
            }
        });
    })

    const handleMobileNav = () => {
        if (window.innerWidth >= navWidth) {
            if (document.getElementById("navbar_main").classList.contains("mobile-menu-open")) {
                document.getElementById("navbar_main").classList.remove("mobile-menu-open");
                toggleMobileMenu();
            }
        }
    }

    const debounce = (func, delay) => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(func, delay);
    };

    window.addEventListener("resize", () => {
        debounce(handleMobileNav, 100); // timer aby to nečekovalo pořád
    });

    document.addEventListener("load", () => {
        handleMobileNav()
    })

    return (
        <div className="header-container">
            <div className="logo">
                <Link to="/">
                    <img src="https://cdn.edenjinolice.cz/web_assets/logo.webp" alt="Logo Eden" width="" height=""/>
                </Link>
                <div className='langs'>
                    <LangButton givenLang="cz" />
                    <LangButton givenLang="gb" />
                    <LangButton givenLang="de" />
                </div>
            </div>
            <div className="nav-container">
                <nav id="navbar_main" className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''} main-nav`}>
                    <div className="navbar__mobile-menu-icon" onClick={toggleMobileMenu}>
                        <div className="navbar__mobile-menu-icon-line" />
                        <div className="navbar__mobile-menu-icon-line" />
                        <div className="navbar__mobile-menu-icon-line" />
                    </div>
                    <ul className="navbar__menu">
                        {NavStructure.map((item, index) => (
                            <NavItem key={index} item={item} isMobileMenuOpen={isMobileMenuOpen} />
                        ))}
                    </ul>
                </nav>
            </div >
        </div >
    )
}

const LangButton = ({ givenLang }) => {
    const [lang, setLang] = useState(localStorage.getItem('lang') || 'cz');

    const changeLanguage = (newLang) => {
        if (localStorage.getItem('lang') == newLang) return;

        localStorage.setItem('lang', newLang);
        location.reload();
        setLang(newLang);
    };

    return (
        <button onClick={() => changeLanguage(givenLang)} className='lang-button'>
            <img src={`https://cdn.edenjinolice.cz/flags/${givenLang}.svg`} alt={givenLang} />
        </button>
    );
};

export default Navigation