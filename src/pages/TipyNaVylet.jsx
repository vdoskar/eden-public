import { useEffect, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Heading from "../components/Heading"
import "../css/tipyNaVylet.css"

import translations from '../translations/tipyNaVylet.json';
const lang = localStorage.getItem('lang') || 'cz';

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
		return <div><br />Not found</div>; // Render alternative content or handle the empty state
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
									<p><b>{translations[lang].distance}:</b> +- {currentItemData.vzdalenost}</p>
								}
								{currentItemData.delka &&
									<p><b>{translations[lang].duration}:</b> +- {currentItemData.delka}</p>
								}
								{currentItemData.obtiznost &&
									<p><b>{translations[lang].difficulty}:</b> {currentItemData.obtiznost}</p>
								}
							</div>
							<div className="slideshow-links">
								{currentItemData.web &&
									<span>
										<a href={currentItemData.web} target="_blank" rel="noopener noreferrer">
											<img src={WebImage} loading="lazy" alt="Ikonka webových stránek" width="32" height="32" />
											{translations[lang].website}
										</a>
									</span>
								}
								{currentItemData.mapy &&
									<span>
										<a href={currentItemData.mapy} target="_blank" rel="noopener noreferrer">
											<img src={MapyImage} loading="lazy" alt="Ikonka online map" width="32" height="32" />
											{translations[lang].map}
										</a>
									</span>
								}
								{currentItemData.trasa &&
									<span>
										<a href={currentItemData.trasa} target="_blank" rel="noopener noreferrer">
											<img src={TrasaImage} loading="lazy" alt="Ikonka trasy" width="32" height="32" />
											{translations[lang].trace}
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
		document.title = translations[lang].heading + " | Eden Jinolice";
	}, []);

	const HeadingImage = 'https://cdn.edenjinolice.cz/web_assets/tipy-na-vylety.webp';

    const atrakce = {
        zamky: {
            title: translations[lang].castlesLabel,
            data: [
                {
                    nazev: translations[lang].castles.valdstejn.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/valdstejnsky-zamek.webp',
                    popis: translations[lang].castles.valdstejn.description,
                    vzdalenost: "7,5 km",
                    web: "https://www.jicin.org/valdstejnsky-zamek",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Vald%C5%A1tejnsk%C3%BD+z%C3%A1mek,+Vald%C5%A1tejnovo+n%C3%A1m%C4%9Bst%C3%AD,+Ji%C4%8D%C3%ADn/@50.457455,15.3080821,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470ea473afa0e46d:0x688a1278063418a5!2m2!1d15.3520765!2d50.436451?hl=cs-CZ&entry=ttu"
                },
                {
                    nazev: translations[lang].castles.humprecht.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/humprecht.webp',
                    popis: translations[lang].castles.humprecht.description,
                    vzdalenost: "15 km",
                    web: "https://www.humprecht.cz/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Humprecht,+Sobotka+363,+507+43+Sobotka/@50.4755087,15.199043,13z/data=!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eae8d3007c263:0x7528b5efbd35ffd0!2m2!1d15.1698035!2d50.4702841?hl=cs-CZ&entry=ttu"
                },
                {
                    nazev: translations[lang].castles.hrubaSkala.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/hruba-skala.webp',
                    popis: translations[lang].castles.hrubaSkala.description,
                    vzdalenost: "15 km",
                    web: "https://www.hrubaskala.info/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Z%C3%A1mek+Hrub%C3%A1+Sk%C3%A1la,+Hrub%C3%A1+Sk%C3%A1la/@50.5097212,15.2078529,13z/data=!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eb1b215a4966b:0x4c57346aaaffb6be!2m2!1d15.1941464!2d50.5449947?hl=cs-CZ&entry=ttu"
                },
                {
                    nazev: translations[lang].castles.stareHrady.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/stare-hrady.webp',
                    popis: translations[lang].castles.stareHrady.description,
                    vzdalenost: "20 km",
                    web: "https://www.starehrady.cz/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Star%C3%A9+Hrady,+z%C3%A1mek,+Star%C3%A9+Hrady/@50.4333155,15.1912594,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470ea87f877c69f1:0xff94399f3d744ab5!2m2!1d15.21441!2d50.38626?hl=cs-CZ&entry=ttu"
                },
                {
                    nazev: translations[lang].castles.sychrov.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/sychrov.webp',
                    popis: translations[lang].castles.sychrov.description,
                    vzdalenost: "25 km",
                    web: "http://www.zamek-sychrov.cz/cs",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Z%C3%A1mek+Sychrov,+463+44+Sychrov/@50.5503434,15.1144281,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x47094b5ad8d0ba1f:0xa0c6cad77808fad9!2m2!1d15.0889329!2d50.6262828?hl=cs-CZ&entry=ttu"
                }
            ]
        },
        hrady: {
            title: translations[lang].ruinsLabel,
            data: [
                {
                    nazev: translations[lang].ruins.trosky.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/trosky.webp',
                    popis: translations[lang].ruins.trosky.description,
                    vzdalenost: "11 km",
                    web: "https://hrad-trosky.cz/cs",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/St%C3%A1tn%C3%AD+Hrad+Trosky,+Rovensko+pod+Troskami/@50.4998734,15.2217945,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eae3a668ed627:0xa80135cdad9eabba!2m2!1d15.2308401!2d50.5165389?entry=ttu"
                },
                {
                    nazev: translations[lang].ruins.kost.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/kost.webp',
                    popis: translations[lang].ruins.kost.description,
                    vzdalenost: "16 km",
                    web: "https://www.kost-hrad.cz/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Hrad+Kost,+Podkost,+Libo%C5%A1ovice/@50.4746347,15.179355,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470c24a0e7f175c1:0x64828d42b808e48f!2m2!1d15.1351987!2d50.4902037?hl=cs-CZ&entry=ttu"
                },
                {
                    nazev: translations[lang].ruins.valdstejn.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/valdstejn.webp',
                    popis: translations[lang].ruins.valdstejn.description,
                    vzdalenost: "17,5 km",
                    web: "https://www.hrad-valdstejn.cz/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/vald%C5%A1tejn/@50.5184255,15.153633,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eb23494ddf569:0x6e36d0aeac214dd7!2m2!1d15.1676389!2d50.562447?entry=ttu"
                }
            ]
        },
        rekreace: {
            title: translations[lang].recreationLabel,
            data: [
                {
                    nazev: translations[lang].recreation.aquaJicin.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/aquacentrumjicin.webp',
                    popis: translations[lang].recreation.aquaJicin.description,
                    vzdalenost: "8 km",
                    web: "https://www.sport-jicin.cz/koupani/aqua-centrum",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Aqua+centrum,+Revolu%C4%8Dn%C3%AD+1268,+506+01+Ji%C4%8D%C3%ADn/@50.4582444,15.3268705,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470ea477ced723eb:0x59f263e7cf123d34!2m2!1d15.3628359!2d50.4404391?hl=cs&entry=ttu"
                },
                {
                    nazev: translations[lang].recreation.knizePond.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/knize.webp',
                    popis: translations[lang].recreation.knizePond.description,
                    vzdalenost: "8 km",
                    web: "https://www.sport-jicin.cz/koupani/koupaliste-knize",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Koupali%C5%A1t%C4%9B+Kn%C3%AD%C5%BEe,+Jaro%C5%A1ov,+Ji%C4%8D%C3%ADn/@50.4582444,15.3103912,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470ea46fc24f275d:0xf6a77e365a354b79!2m2!1d15.3500192!2d50.4438801?entry=ttu"
                },
                {
                    nazev: translations[lang].recreation.jinolicePonds.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/jinolice.webp',
                    popis: translations[lang].recreation.jinolicePonds.description,
                    vzdalenost: "",
                    web: "",
                    mapy: ""
                }
            ]
        },
        cykloturistika: {
            title: translations[lang].cyclingLabel,
            desc: translations[lang].cyclingDescription,
            data: [
                {
                    nazev: translations[lang].cycling.podtroseckeValley.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/podtrosecke-udoli.webp',
                    popis: translations[lang].cycling.podtroseckeValley.description,
                    delka: "18 km",
                    obtiznost:  translations[lang].cycling.podtroseckeValley.difficulty,
                    trasa: "https://www.ceskehory.cz/cyklotrasy/hruba-skala-kacanovy.html"
                },
                {
                    nazev: translations[lang].cycling.maloskalsko.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/maloskalsko.webp',
                    popis: translations[lang].cycling.maloskalsko.description,
                    delka: "19 km",
                    obtiznost: translations[lang].cycling.maloskalsko.difficulty,
                    trasa: "https://www.ceskehory.cz/cyklotrasy/mala-skala.html"
                },
                {
                    nazev: translations[lang].cycling.kozakov.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/kozakov.webp',
                    popis: translations[lang].cycling.kozakov.description,
                    delka: "45 km",
                    obtiznost: translations[lang].cycling.kozakov.difficulty,
                    trasa: "https://www.ceskehory.cz/cyklotrasy/kozakov-semily.html"
                }
            ]
        },
        skaly: {
            title: translations[lang].rockCitiesLabel,
            data: [
                {
                    nazev: translations[lang].rockCities.prachovRocks.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/prachov.webp',
                    popis: translations[lang].rockCities.prachovRocks.description,
                    vzdalenost: "3 km",
                    web: "https://prachovskeskaly.cz/cs/",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Prachovsk%C3%A9+sk%C3%A1ly,+J.+M.+Schlik+s.r.o.,+Blata+15,+506+01+Ji%C4%8D%C3%ADn/@50.471953,15.2902927,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470ea57465bfb54b:0xc7f58108a17e4abd!2m2!1d15.2850918!2d50.4683522!3e0?entry=ttu"
                },
                {
                    nazev: translations[lang].rockCities.hruboskalsko.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/hruboskalsko.webp',
                    popis: translations[lang].rockCities.hruboskalsko.description,
                    vzdalenost: "15 km",
                    web: "https://www.cesky-raj.info/dr-cs/710-hruboskalsko.html",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Hruboskalsko/@50.517609,15.2038962,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eb22814c56367:0xc322055ac2ad20be!2m2!1d15.1842657!2d50.5525243!3e0?hl=cs&entry=ttu"
                },
                {
                    nazev: translations[lang].rockCities.klokocskeRocks.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/klokocske.webp',
                    popis: translations[lang].rockCities.klokocskeRocks.description,
                    vzdalenost: "19 km",
                    web: "https://www.cesky-raj.info/dr-cs/687-klokocske-skaly.html",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Kloko%C4%8Dsk%C3%A9+sk%C3%A1ly,+Kloko%C4%8D%C3%AD+56,+511+01+Kloko%C4%8D%C3%AD/@50.5423703,15.2043396,12z/data=!4m14!4m13!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eb152fda966bb:0x6bdf41c148d247e7!2m2!1d15.2222889!2d50.5969683!3e0?hl=cs&entry=ttu"
                },
                {
                    nazev: translations[lang].rockCities.besediceRocks.name,
                    img: 'https://cdn.edenjinolice.cz/web_assets/tipy_na_vylety/besedice.webp',
                    popis: translations[lang].rockCities.besediceRocks.description,
                    vzdalenost: "22 km",
                    web: "https://www.cesky-raj.info/dr-cs/678-besedicke-skaly.html",
                    mapy: "https://www.google.com/maps/dir/Eden+Jinolice,+Libu%C5%88/Besedick%C3%A9+sk%C3%A1ly+-+skaln%C3%AD+m%C4%9Bsto+Kalich,+Besedice+3,+468+22+Koberovy/@50.5516424,15.1783706,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x470ea511019ce8d5:0x1d00af105e501190!2m2!1d15.3046931!2d50.4744622!1m5!1m1!1s0x470eb43e9499a803:0xaa782557579be6ec!2m2!1d15.2027989!2d50.62663!3e0?entry=ttu"
                }
            ]
        }
    }


	return (
		<div className="main">
			<Heading text={translations[lang].heading} img={HeadingImage} />
			<div className="slideshow">
				{Object.keys(atrakce).map((category) => (
					<div key={category} className="slideshow-category">
						<section className="main-section">
							<h2>{atrakce[category].title}</h2>
						</section>

						{atrakce[category].desc &&
							<p style={{fontSize:"1rem !important", padding: "5px 10px !important"}}>{atrakce[category].desc}</p>
						}
						<Slideshow items={atrakce[category].data} />
					</div>
				))}
			</div>
		</div>
	)
}

export default TipyNaVyletPage