import { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from "react-router-dom"

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
        const currentPath = window.location.pathname;
        const tab = getActiveTab(currentPath);
        setActiveTab(tab);
    }, [location]);

    const getActiveTab = (currentPath) => {
        switch (currentPath) {
            case '/': return 'uvod';
            case '': return 'uvod';
            case '/tipy-na-vylet': return 'tipy-na-vylet';
            case '/kontakt': return 'kontakt';
            case '/cenik': return 'cenik';
            case '/ubytovani': return 'ubytovani';
            case '/rezervace': return 'rezervace';
            case '/stravovani': return 'stravovani';
            case '/zabava-a-sport': return 'zabava-a-sport';
            case '/novinky': return 'novinky';
            default: return 'uvod';
        }
    };

    return (
        <li>
            <Link 
                to={`/${submenuItem.link}`} 
                className={activeTab === `/${submenuItem.link}` ? 'active' : ''}
                >
                    {submenuItem.title}
            </Link>

        </li>
    );
};

function Navigation() {

    const Logo = 'https://cdn.edenjinolice.cz/web_assets/logo.webp';

    const NavStructure = [
        {
            title: "O nás",
            link: "",
            submenu: [
                {
                    title: "Ubytování",
                    link: "ubytovani",
                },
                {
                    title: "Stravování",
                    link: "stravovani",
                },
            ]
        },
        {
            title: "Zábava a sport",
            link: "zabava-a-sport",
            submenu: []
        },
        {
            title: "Tipy na výlet",
            link: "tipy-na-vylet",
            submenu: []
        },
        {
            title: "Ceník",
            link: "cenik",
            submenu: []
        },
        {
            title: "Kontakt",
            link: "kontakt",
            submenu: [
                {
                    title: "Rezervace",
                    link: "rezervace",
                }
            ]
        },
    ]

    const [prevLocation, setPrevLocation] = useState('');
    let currLocation = useLocation();

    // ukládá poslední navštívenou stránku a zavírá nav při kliku na linky
    useEffect(() => {
        const currentPath = window.location.pathname;
        if (prevLocation != currentPath) {
            if (window.innerWidth <= navWidth && isMobileMenuOpen) {
                toggleMobileMenu();
            }
        }
        const prevPath = setPrevLocation(currentPath)

    }, [currLocation]);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navWidth = 812
    let resizeTimer;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.querySelectorAll(".overflow")[0].style.opacity = "0.5";
            console.log("mobile menu open")
        } else {
            document.querySelectorAll(".overflow")[0].style.opacity = "1";
            console.log("mobile menu closed")
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
                    <img src={Logo} alt="Logo Eden" width="" height=""/>
                </Link>
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

export default Navigation