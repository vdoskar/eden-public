import { useEffect, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Heading from "../components/Heading"
import "../css/tipyNaVylet.css"

// import WebImage from "../assets/webpage.webp"
// import TrasaImage from "../assets/path.webp"
// import MapyImage from "../assets/map.webp"
// import HeadingImage from "../assets/tipy-na-vylety.webp"

// import ValdstejnskyZamekImage from '../assets/tipy_na_vylety/valdstejnsky-zamek.webp';
// import HumprechtImage from '../assets/tipy_na_vylety/humprecht.webp';
// import HrubaSkalaImage from '../assets/tipy_na_vylety/hruba-skala.webp';
// import StareHradyImage from '../assets/tipy_na_vylety/stare-hrady.webp';
// import SychrovImage from '../assets/tipy_na_vylety/sychrov.webp';
// import TroskyImage from '../assets/tipy_na_vylety/trosky.webp';
// import KostImage from '../assets/tipy_na_vylety/kost.webp';
// import ValdstejnImage from '../assets/tipy_na_vylety/valdstejn.webp';
// import AquaCentrumJicinImage from '../assets/tipy_na_vylety/aquacentrumjicin.webp';
// import KnizeImage from "../assets/tipy_na_vylety/knize.webp"
// import JinoliceImage from "../assets/tipy_na_vylety/jinolice.webp"
// import PodtroseckeUdoliImage from "../assets/tipy_na_vylety/podtrosecke-udoli.webp"
// import MaloskalskoImage from "../assets/tipy_na_vylety/maloskalsko.webp"
// import KozakovImage from "../assets/tipy_na_vylety/kozakov.webp"
// import PrachovImage from "../assets/tipy_na_vylety/prachov.webp"
// import HruboskalskoImage from "../assets/tipy_na_vylety/hruboskalsko.webp"
// import KlokocskeImage from "../assets/tipy_na_vylety/klokocske.webp"
// import BesediceImage from "../assets/tipy_na_vylety/besedice.webp"

const Slideshow = ({ items }) => {
    const [currentItem, setCurrentItem] = useState(0);

    const handlePrev = () => {
        setCurrentItem((prevItem) => (prevItem === 0 ? items.length - 1 : prevItem - 1));
    };

    const handleNext = () => {
        setCurrentItem((prevItem) => (prevItem === items.length - 1 ? 0 : prevItem + 1));
    };

    const currentItemData = items[currentItem];

    if (!currentItemData) {
        return <div><br/>Zde není nic k zobrazení</div>; // Render alternative content or handle the empty state
    }

    const WebImage = 'https://cdn.edenjinolice.cz/web_assets/webpage.webp';
    const TrasaImage = 'https://cdn.edenjinolice.cz/web_assets/path.webp';
    const MapyImage = 'https://cdn.edenjinolice.cz/web_assets/map.webp';

    return (

        <TransitionGroup>
            <CSSTransition key={currentItem} classNames="fade" timeout={300}>
                <div className="slideshow-child">
                    <div className="slideshow-button-holder">
                        <button onClick={handlePrev} className="first" aria-label="Předchozí položka" title="Předchozí položka">
                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                            </svg>
                        </button>
                    </div>
                    <div className="slideshow-item">
                        <a href={currentItemData.img} data-lightbox={currentItemData.nazev} data-title={currentItemData.nazev}>
                            <div className="slideshow-img-holder" style={{ backgroundImage: `url(${currentItemData.img})` }} loading="lazy"></div>
                        </a>
                        <div className="slideshow-title">
                            <h3>{currentItemData.nazev}</h3>
                        </div>
                        <div className="slideshow-info">
                            <p>{currentItemData.popis}</p>
                        </div>
                        <div className="slideshow-lower-row">
                            <div>
                                {currentItemData.vzdalenost &&
                                    <p><b>Vzdálenost:</b> +- {currentItemData.vzdalenost}</p>
                                }
                                {currentItemData.delka &&
                                    <p><b>Délka trasy:</b> +- {currentItemData.delka}</p>
                                }
                                {currentItemData.obtiznost &&
                                    <p><b>Obtížnost:</b> {currentItemData.obtiznost}</p>
                                }
                            </div>
                            <div className="slideshow-links">
                                {currentItemData.web &&
                                    <span>
                                        <a href={currentItemData.web} target="_blank" rel="noopener noreferrer">
                                            <img src={WebImage} loading="lazy" alt="Ikonka webových stránek" width="32" height="32"/>
                                            Webové stránky
                                        </a>
                                    </span>
                                }
                                {currentItemData.mapy &&
                                    <span>
                                        <a href={currentItemData.mapy} target="_blank" rel="noopener noreferrer">
                                            <img src={MapyImage} loading="lazy" alt="Ikonka online map" width="32" height="32"/>
                                            Ukázat na mapě
                                        </a>
                                    </span>
                                }
                                {currentItemData.trasa &&
                                    <span>
                                        <a href={currentItemData.trasa} target="_blank" rel="noopener noreferrer">
                                            <img src={TrasaImage} loading="lazy" alt="Ikonka trasy" width="32" height="32"/>
                                            Ukázat trasu
                                        </a>
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="slideshow-button-holder">
                        <button onClick={handleNext} className="last" aria-label="Další položka" title="Další položka">
                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </button>
                    </div>
                </div>
            </CSSTransition>
        </TransitionGroup>

    );
};

function TipyNaVyletPage() {

    useEffect(() => {
        document.title = 'Tipy na výlet | Eden Jinolice';
    }, []);

    const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/tipy-na-vylety.webp';
    
    const ValdstejnskyZamekImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/valdstejnsky-zamek.webp';
    const HumprechtImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/humprecht.webp';
    const HrubaSkalaImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/hruba-skala.webp';
    const StareHradyImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/stare-hrady.webp';
    const SychrovImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/sychrov.webp';
    const TroskyImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/trosky.webp';
    const KostImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/kost.webp';
    const ValdstejnImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/valdstejn.webp';
    const AquaCentrumJicinImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/aquacentrumjicin.webp';
    const KnizeImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/knize.webp';
    const JinoliceImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/jinolice.webp';
    const PodtroseckeUdoliImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/podtrosecke-udoli.webp';
    const MaloskalskoImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/maloskalsko.webp';
    const KozakovImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/kozakov.webp';
    const PrachovImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/prachov.webp';
    const HruboskalskoImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/hruboskalsko.webp';
    const KlokocskeImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/klokocske.webp';
    const BesediceImage = 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/besedice.webp';

    const atrakce = {
        zamky: {
            title: "Zámky",
            data: [
                {
                    nazev: "Valdštejnský zámek v Jičíně",
                    img: ValdstejnskyZamekImage,
                    popis: "Valdštejnský nebo také jičínský zámek jistě neminete, tento klasicistně upravený objekt  je dominantní budovou jižní strany náměstí. Původně renesanční křídlo zámku bylo postaveno na počátku 17. století ještě v době, kdy Jičín patřil rodu Smiřických.",
                    vzdalenost: "7,5 km",
                    web: "https://www.jicin.org/valdstejnsky-zamek",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Vald%C5%A1tejnsk%C3%BD+z%C3%A1mek,+Vald%C5%A1tejnovo+n%C3%A1m%C4%9Bst%C3%AD,+Ji%C4%8D%C3%ADn/@50.457455,15.3080821,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470ea473afa0e46d:0x688a1278063418a5!2m2!1d15.3520765!2d50.436451?hl=cs-CZ&entry=ttu"
                },
                {
                    nazev: "Zámek Humprecht",
                    img: HumprechtImage,
                    popis: "Lovecký zámek Humprecht, který stojí nad Sobotkou, je dominantou kraje a jedním ze symbolů Českého ráje. Byl postaven Italem Carlo Luragem v letech 1666-1668 pro Humprechta Jana Černína z Chudenic.",
                    vzdalenost: "15 km",
                    web: "https://www.humprecht.cz/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Humprecht,+Sobotka+363,+507+43+Sobotka/@50.4755087,15.199043,13z/data=!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eae8d3007c263:0x7528b5efbd35ffd0!2m2!1d15.1698035!2d50.4702841?hl=cs-CZ&entry=ttu"
                },
                {
                    nazev: "Zámek Hrubá Skála",
                    img: HrubaSkalaImage,
                    popis: "Zámek Hrubá Skála patří mezi hlavní dominanty Českého ráje. Zámek se pne na skupině skalních věží, nacházejících se šest kilometrů na jihovýchod od města Turnov. Skaliska, sahající až do výšky šedesáti metrů, najdete nad údolím říčky Libuňky, ležící v krajině mezi hradem Trosky a hradem Valdštejn. ",
                    vzdalenost: "15 km",
                    web: "https://www.hrubaskala.info/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Z%C3%A1mek+Hrub%C3%A1+Sk%C3%A1la,+Hrub%C3%A1+Sk%C3%A1la/@50.5097212,15.2078529,13z/data=!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eb1b215a4966b:0x4c57346aaaffb6be!2m2!1d15.1941464!2d50.5449947?hl=cs-CZ&entry=ttu"
                },
                {
                    nazev: "Zámek Staré hrady",
                    img: StareHradyImage,
                    popis: "Je Vaším nejlepším tipem na rodinné výlety pro děti i dospělé a školní výlety s programem pro mateřské a základní školy v České republice. Hledáte, kam s dětmi na výlet? V našich pohádkách najdete ve čtyřech pohádkových okruzích přes 450 pohádkových bytostí.",
                    vzdalenost: "20 km",
                    web: "https://www.starehrady.cz/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Star%C3%A9+Hrady,+z%C3%A1mek,+Star%C3%A9+Hrady/@50.4333155,15.1912594,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470ea87f877c69f1:0xff94399f3d744ab5!2m2!1d15.21441!2d50.38626?hl=cs-CZ&entry=ttu"
                },
                {
                    nazev: "Zámek Sychrov",
                    img: SychrovImage,
                    popis: "Novogotický zámek Sychrov, který sloužil jako rezidence původem francouzského rodu Rohanů, znáte z pohádky Zlatovláska či Nesmrtelná teta. Zámecké pokoje jsou zařízeny původním nábytkem, obrazy a dalšími doplňky; většina místností také vyniká bohatou řezbářskou výzdobou",
                    vzdalenost: "25 km",
                    web: "http://www.zamek-sychrov.cz/cs",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Z%C3%A1mek+Sychrov,+463+44+Sychrov/@50.5503434,15.1144281,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x47094b5ad8d0ba1f:0xa0c6cad77808fad9!2m2!1d15.0889329!2d50.6262828?hl=cs-CZ&entry=ttu"
                },
            ],
        },
        hrady: {
            title: "Hrady a zříceniny",
            data: [
                {
                    nazev: "Zřícenina hradu Trosky",
                    img: TroskyImage,
                    popis: "Trosky jsou zřícenina hradu na vrcholu stejnojmenného vrchu v katastrálním území obce Troskovice v okrese Semily v Libereckém kraji. Nachází se na území Chráněné krajinné oblasti Český ráj a zároveň také Geoparku Český ráj. Hrad je ve vlastnictví státu a je přístupný veřejnosti.",
                    vzdalenost: "11 km",
                    web: "https://hrad-trosky.cz/cs",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/St%C3%A1tn%C3%AD+Hrad+Trosky,+Rovensko+pod+Troskami/@50.4998734,15.2217945,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eae3a668ed627:0xa80135cdad9eabba!2m2!1d15.2308401!2d50.5165389?entry=ttu"
                },
                {
                    nazev: "Hrad Kost",
                    img: KostImage,
                    popis: "Vykročte na hradby majestátní pevnosti obklopenou třemi údolími. Obdivujte hradní paláce, kapli sv. Anny, středověkou mučírnu nebo černou kuchyni. Kromě kompletní prohlídky hrad nabízí také zkrácenou – bezbariérovou.",
                    vzdalenost: "16 km",
                    web: "https://www.kost-hrad.cz/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Hrad+Kost,+Podkost,+Libo%C5%A1ovice/@50.4746347,15.179355,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470c24a0e7f175c1:0x64828d42b808e48f!2m2!1d15.1351987!2d50.4902037?hl=cs-CZ&entry=ttu"
                },
                {
                    nazev: "Zřícenina hradu Valdštejn",
                    img: ValdstejnImage,
                    popis: "Valdštejn je zřícenina hradu v okrese Semily blízko Turnova, v oblasti Českého ráje. Rodový hrad pánů z Valdštejna pochází z druhé poloviny 13. století. Je jedním z nejstarších hradů v oblasti. Nyní je Valdštejn v držení města Turnova. ",
                    vzdalenost: "17,5 km",
                    web: "https://www.hrad-valdstejn.cz/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/vald%C5%A1tejn/@50.5184255,15.153633,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eb23494ddf569:0x6e36d0aeac214dd7!2m2!1d15.1676389!2d50.562447?entry=ttu"
                },
            ]
        },
        rekreace: {
            title: "Rekreace a koupání",
            data: [
                {
                    nazev: "Aqua Centrum Jičín",
                    img: AquaCentrumJicinImage,
                    popis: "Plavecké a oddechové centrum, bazény, sauny, atrakce, masáže, občerstvení… Nabízeny jsou i vodní pohybové aktivity nebo kurzy plavání.",
                    vzdalenost: "8 km",
                    web: "https://www.sport-jicin.cz/koupani/aqua-centrum",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Aqua+centrum,+Revolu%C4%8Dn%C3%AD+1268,+506+01+Ji%C4%8D%C3%ADn/@50.4582444,15.3268705,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470ea477ced723eb:0x59f263e7cf123d34!2m2!1d15.3628359!2d50.4404391?hl=cs&entry=ttu"
                },
                {
                    nazev: "Koupaliště a rybník Kníže",
                    img: KnizeImage,
                    popis: "Koupaliště nabízí celou škálu doplňkových služeb a vodních atrakcí, je zde možnost pronajmout si víceúčelové hřiště, plážový kurt, hřiště na pétanque, lodičku. V ceně (proti záloze) jsou k dispozici lehátka, slunečníky, vybavení jako míče či koule na pétanque a úložné schránky.",
                    vzdalenost: "8 km",
                    web: "https://www.sport-jicin.cz/koupani/koupaliste-knize",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Koupali%C5%A1t%C4%9B+Kn%C3%AD%C5%BEe,+Jaro%C5%A1ov,+Ji%C4%8D%C3%ADn/@50.4582444,15.3103912,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470ea46fc24f275d:0xf6a77e365a354b79!2m2!1d15.3500192!2d50.4438801?entry=ttu"
                },
                {
                    nazev: "Jinolické rybníky",
                    img: JinoliceImage,
                    popis: "Jinolické rybníky je soustava tří rybníků ležící u obce Jinolice v CHKO Český ráj. Jsou sídlem našeho rekračního zařízení Eden a dalších turistických atrakcí.",
                    vzdalenost: "",
                    web: "",
                    mapy: ""
                },
            ]
        },
        cykloturistika: {
            title: "Cykloturistika",
            desc: "Cykloturistika patří k neojblíbenějším aktivitám návštěvníků Českého ráje, nabízíme několik tipů střední náročnosti na výlety v okolí Jinolic:",
            data: [
                {
                    nazev: "Výlet Podtroseckým údolím",
                    img: PodtroseckeUdoliImage,
                    popis: "Výlet začíná i končí v obci Hrubá Skála. Trasa je nenáročná, vhodná i pro rodiny z dětmi, většina trasy vede po zpevněných cestách, bez velkého provozu aut. Trasa není doporučována pro silniční kola.",
                    delka: "18 km",
                    obtiznost: "středně náročná",
                    trasa: "https://www.ceskehory.cz/cyklotrasy/hruba-skala-kacanovy.html"
                },
                {
                    nazev: "Okruh Maloskalskem",
                    img: MaloskalskoImage,
                    popis: "Nenáročný okruh po krásách Maloskalska.",
                    delka: "19 km",
                    obtiznost: "středně náročná",
                    trasa: "https://www.ceskehory.cz/cyklotrasy/mala-skala.html"
                },
                {
                    nazev: "Okruh kolem Kozákova",
                    img: KozakovImage,
                    popis: "Okruh vede ze Semil kolem Kozákova a přes Lomnici nad Popelkou se vrací zase do Semil. Po cestě projedete skrze několik skalních měst a malebných městeček v jejich okolí.",
                    delka: "45 km",
                    obtiznost: "středně náročná",
                    trasa: "https://www.ceskehory.cz/cyklotrasy/kozakov-semily.html"
                },
                
            ]
        },
        skaly: {
            title: "Skalní města",
            data: [
                {
                    nazev: "Prachovské skály",
                    img: PrachovImage,
                    popis: "Nejznámější skalní město, které patří k nejdříve navštěvovanou oblast Českého ráje v jeho historii. Velký okruh vás seznámí s velkým množstvím zajímavých míst Prachovských skal a je nejatraktivnější a nejzajímavější cestou skalními masívy.",
                    vzdalenost: "3 km",
                    web: "https://prachovskeskaly.cz/cs/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Prachovsk%C3%A9+sk%C3%A1ly,+J.+M.+Schlik+s.r.o.,+Blata+15,+506+01+Ji%C4%8D%C3%ADn/@50.471953,15.2902927,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470ea57465bfb54b:0xc7f58108a17e4abd!2m2!1d15.2850918!2d50.4683522!3e0?entry=ttu",
                },
                {
                    nazev: "Hruboskalské skalní město",
                    img: HruboskalskoImage,
                    popis: "Mezi hradem Valdštejn a zámkem Hrubá Skála nedaleko Turnova v Českém ráji se nachází oblast zvaná jako Hruboskalské skalní město. Pověstmi opředené skalní město nabízí nevšední zážitky pro horolezce i laiky na více než 400 věžích, jejichž nejvyšší dosahuje až do výše 50 metrů.",
                    vzdalenost: "15 km",
                    web: "https://www.cesky-raj.info/dr-cs/710-hruboskalsko.html",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Hruboskalsko/@50.517609,15.2038962,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eb22814c56367:0xc322055ac2ad20be!2m2!1d15.1842657!2d50.5525243!3e0?hl=cs&entry=ttu",
                },
                {
                    nazev: "Klokočské skály",
                    img: KlokocskeImage,
                    popis: "Chráněné území se skládá se ze dvou skalních bloků a mnoha údolí či roklin. V jihovýchodní části skal se dochovala zřícenina hradu Rotštejn. Různé skalní rokliny obsahují pseudokrasové jeskyně, které obsahují mimo zajímavé fauny také archeologické nálezy z doby bronzové.",
                    vzdalenost: "19 km",
                    web: "https://www.cesky-raj.info/dr-cs/687-klokocske-skaly.html",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Kloko%C4%8Dsk%C3%A9+sk%C3%A1ly,+Kloko%C4%8D%C3%AD+56,+511+01+Kloko%C4%8D%C3%AD/@50.5423703,15.2043396,12z/data=!4m14!4m13!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eb152fda966bb:0x6bdf41c148d247e7!2m2!1d15.2222889!2d50.5969683!3e0?hl=cs&entry=ttu",
                },
                {
                    nazev: "Besedické skály",
                    img: BesediceImage,
                    popis: "Romantický labyrint pískovcových skal leží nad levým břehem Jizery poblíž obce Besedice v Českém ráji. Skalami vede okružní cesta, která nás seznámí s nejvýznamnějšími místy této oblasti. V seskupení skal U Kalicha uprostřed pěti skalních roklí se skrývá oltář s vytesaným kalichem a letopočtem 1634.",
                    vzdalenost: "22 km",
                    web: "https://www.cesky-raj.info/dr-cs/678-besedicke-skaly.html",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Besedick%C3%A9+sk%C3%A1ly+-+skaln%C3%AD+m%C4%9Bsto+Kalich,+Besedice+3,+468+22+Koberovy/@50.5516424,15.1783706,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eb43e9499a803:0xaa782557579be6ec!2m2!1d15.2027989!2d50.62663!3e0?entry=ttu",
                },
            ]
        }

    }


    return (
        <div className="main">
            <Heading text="Tipy na výlet" img={HeadingImage} />
            <div className="slideshow">
                {Object.keys(atrakce).map((category) => (
                    <div key={category} className="slideshow-category">
                        <section className="main-section">
                            <h2>{atrakce[category].title}</h2>
                        </section>
                        
                        {atrakce[category].desc && 
                            <p>{atrakce[category].desc}</p>
                        }
                        <Slideshow items={atrakce[category].data} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TipyNaVyletPage