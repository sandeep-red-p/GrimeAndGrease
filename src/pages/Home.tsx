import { useEffect, useRef, useState } from "react";

import Img from "../components/Img";

import heroImg from "../assets/home/hero.webp";
import heroImg1 from "../assets/home/hero1.webp";
import heroMobile from "../assets/home/hero-mobile.webp";
import heroMobile1 from "../assets/home/hero-mobile1.webp";

import iconGeneral from "../assets/home/icon-general.svg";
import iconEngine from "../assets/home/icon-engine.svg";
import iconElectrical from "../assets/home/icon-electrical.svg";
import iconBody from "../assets/home/icon-body.svg";
import iconBrakes from "../assets/home/icon-brakes.svg";
import iconTurbo from "../assets/home/icon-turbo.svg";
import iconSuspension from "../assets/home/icon-suspension.svg";
import iconClutch from "../assets/home/icon-clutch.svg";
import iconAc from "../assets/home/icon-ac.svg";
import iconDetailing from "../assets/home/icon-detailing.svg";
import iconPaint from "../assets/home/icon-paint.svg";
import iconInspection from "../assets/home/icon-inspection.svg";

import brandMitsubishi from "../assets/home/brand-mitsubishi.svg";
import brandSuzuki from "../assets/home/brand-suzuki.svg";
import brandMg from "../assets/home/brand-mg.svg";
import brandRangeRover from "../assets/home/brand-rangerover.svg";
import brandHyundai from "../assets/home/brand-hyundai.svg";
import brandAudi from "../assets/home/brand-audi.svg";
import brandBmw from "../assets/home/brand-bmw.svg";
import brandPorsche from "../assets/home/brand-porsche.svg";
import brandMercedes from "../assets/home/brand-mercedes.svg";
import brandVolvo from "../assets/home/brand-volvo.svg";
import brandToyota from "../assets/home/brand-toyota.svg";
import brandKia from "../assets/home/brand-kia.svg";
import brandVw from "../assets/home/brand-vw.svg";
import brandMahindra from "../assets/home/brand-mahindra.svg";
import brandTata from "../assets/home/brand-tata.svg";
import brandHonda from "../assets/home/brand-honda.svg";
import brandSkoda from "../assets/home/brand-skoda.svg";

import servicingPajero from "../assets/home/servicing-1.webp";
import servicingJetta from "../assets/home/servicing-2.webp";
import servicingAudiQ3 from "../assets/home/servicing-3.webp";
import servicingXuv500 from "../assets/home/Restored_XUV500.webp";
import servicingMercML350 from "../assets/home/Merc_ML350_2.webp";
import arrowServicePrev from "../assets/home/arrow-service-prev.svg";
import arrowServiceNext from "../assets/home/arrow-service-next.svg";

import iconStep1 from "../assets/home/icon-step1.svg";
import iconStep2 from "../assets/home/icon-step2.svg";
import iconStep3 from "../assets/home/icon-step3.svg";
import iconStepCar from "../assets/home/icon-step-car.svg";
import iconStep5 from "../assets/home/icon-step5.svg";
import section5 from "../assets/home/section5.webp";

import galleryAlto3 from "../assets/home/gallery-alto-3.webp";
import galleryEngine1 from "../assets/home/gallery-engine-1.webp";
import galleryEngine2 from "../assets/home/gallery-engine-2.webp";
import galleryGt1 from "../assets/home/gallery-gt-1.webp";
import galleryGt2 from "../assets/home/gallery-gt-2.webp";
import galleryGarage1 from "../assets/home/gallery-garage-1.webp";
import galleryGarage2 from "../assets/home/gallery-garage-2.webp";
import galleryInnovaEngineBay from "../assets/home/gallery-innova-engine-bay.webp";
import galleryDiscBrakes1 from "../assets/home/gallery-disc-brakes-1.webp";
import galleryEngineBay1 from "../assets/home/gallery-engine-bay-1.webp";
import galleryEngineBay2 from "../assets/home/gallery-engine-bay-2.webp";
import galleryEngineWork5 from "../assets/home/gallery-engine-work-5.webp";
import galleryEngineWork8 from "../assets/home/gallery-engine-work-8.webp";
import galleryOthers1 from "../assets/home/gallery-others-1.webp";
import galleryParts1 from "../assets/home/gallery-parts-1.webp";
import arrowGalleryPrev from "../assets/home/arrow-gallery-prev.svg";
import arrowGalleryNext from "../assets/home/arrow-gallery-next.svg";

const services = [
  { title: "General Service", icon: iconGeneral, flip: true },
  { title: "Engine Work", icon: iconEngine, flip: true },
  { title: "Electrical & Wiring", icon: iconElectrical, flip: true },
  { title: "Body Repair", icon: iconBody },
  { title: "Brake Service", icon: iconBrakes },
  { title: "Turbocharger Replacement", icon: iconTurbo },
  { title: "Suspension Repairs", icon: iconSuspension },
  { title: "Clutch Replacement", icon: iconClutch },
  { title: "Air Conditioning", icon: iconAc },
  { title: "Detailing", icon: iconDetailing },
  { title: "Paint Jobs", icon: iconPaint },
  { title: "Pre-Owned Car Inspection", icon: iconInspection },
];

const brandLogos = [
  { src: brandMitsubishi, alt: "Mitsubishi" },
  { src: brandSuzuki, alt: "Suzuki" },
  { src: brandMg, alt: "MG" },
  { src: brandRangeRover, alt: "Range Rover", sizeClass: "brand-xl" },
  { src: brandHyundai, alt: "Hyundai" },
  { src: brandAudi, alt: "Audi" },
  { src: brandBmw, alt: "BMW", keepColor: true },
  { src: brandPorsche, alt: "Porsche" },
  { src: brandMercedes, alt: "Mercedes-Benz" },
  { src: brandVolvo, alt: "Volvo" },
  { src: brandToyota, alt: "Toyota" },
  { src: brandKia, alt: "Kia" },
  { src: brandVw, alt: "Volkswagen" },
  { src: brandMahindra, alt: "Mahindra", sizeClass: "brand-large" },
  { src: brandTata, alt: "Tata" },
  { src: brandHonda, alt: "Honda" },
  { src: brandSkoda, alt: "Skoda" },
];

function brandLogoClassName(brand: { keepColor?: boolean; sizeClass?: string }) {
  return [brand.keepColor && "keep-color", brand.sizeClass]
    .filter(Boolean)
    .join(" ") || undefined;
}

const caseStudies = [
  {
    src: servicingPajero,
    alt: "Mitsubishi Pajero GLX raised on a workshop lift",
    tag: "Complete Engine Rebuild",
    title: "Mitsubishi Pajero GLX",
    description:
      "Persistent overheating led us to a failing cylinder head and head gasket — and once we opened the engine up, further internal wear made clear this needed a full rebuild, not a patch. We also found the turbocharger well past its efficient life and replaced it as part of the job.",
    highlights: [
      "Full rebuild: cylinder head, piston rings, bearings, timing chain, turbocharger",
      "Clutch, water pump and thermostat replaced",
      "Rebuilt the original engine instead of fitting an imported unit",
    ],
    result:
      "A reliable, original powertrain with new turbo performance — chosen over a costlier engine swap or a riskier imported replacement.",
  },
  {
    src: servicingJetta,
    alt: "Volkswagen Jetta with suspension parts laid out during service",
    tag: "Full Mechanical Refresh",
    title: "Volkswagen Jetta",
    description:
      "This Jetta came in needing more than a service — brakes, suspension, interior, and electrical systems all needed attention to bring it back to daily-driver condition. We treated it as a full refresh rather than a checklist of fixes.",
    highlights: [
      "Front & rear brake service and full suspension overhaul",
      "Headliner replacement and window regulator repair",
      "Airbag wiring repair with advanced diagnostic scanning",
      "Complete interior/exterior detail before delivery",
    ],
    result:
      "Smooth, stable ride and fully verified electrical systems — delivered after a full diagnostic re-scan and road test.",
  },
  {
    src: servicingAudiQ3,
    alt: "Audi Q3 raised on a workshop lift",
    tag: "Suspension Overhaul & Oil Leak Repair",
    title: "Audi Q3",
    description:
      "Excessive suspension noise, an unstable ride over uneven roads, and an oil leak from the front crankshaft seal — the Q3 needed both ends addressed together to restore it to peak condition.",
    highlights: [
      "Front & rear suspension rebuild: bushes, stabilizer links, shock absorbers",
      "Crankshaft oil seal, oil pump belt, and engine/torque mount replacement",
      "Precision wheel alignment and brake caliper service",
    ],
    result:
      "Ride quality restored to near-factory feel, leak-free engine, and improved steering response — verified with a full road test.",
  },
  {
    src: servicingXuv500,
    alt: "Mahindra XUV500 with the hood open during service",
    tag: "Complete Body Restoration",
    title: "Mahindra XUV500",
    description:
      "One of our most demanding rebuilds — the XUV500 arrived with extensive rust damage, all five doors beyond repair, and a compromised structure. The owner didn't want a replacement car; he wanted this car back. So we sourced a donor body shell and doors, stripped the vehicle to bare chassis, and rebuilt it panel by panel.",
    highlights: [
      "Full body shell and all-five-door replacement, sourced and matched from donor vehicles",
      "Complete strip-down: engine, transmission, interior, wiring, airbags — catalogued and reinstalled",
      "Multi-stage bodywork, paint, and factory-spec panel alignment",
      "Engine refit by a five-person team using an engine crane",
    ],
    result:
      "A structurally sound, road-ready SUV — and a car with sentimental value the owner got to keep instead of replace.",
  },
  {
    src: servicingMercML350,
    alt: "Mercedes-Benz ML 350 rear badge after electrical and suspension repair",
    tag: "Electrical & Suspension Diagnostics",
    title: "Mercedes-Benz ML 350",
    description:
      "Idle for four months, this ML 350 came to us with rodent-damaged wiring, a dead battery, and a completely failed Airmatic suspension — 64 active fault codes across the vehicle's control modules. It had to be flatbedded in; it couldn't be driven.",
    highlights: [
      "Wiring repaired circuit-by-circuit — no shortcuts or patch jobs",
      "Battery replacement and continuous live diagnostic scanning during repair",
      "Airmatic suspension function fully restored",
    ],
    result:
      "All 64 fault codes cleared and the Airmatic system fully functional — back on the road after multiple rounds of testing.",
  },
];

const processSteps = [
  { title: "Diagnosis and Quote", icon: iconStep1, flip: true },
  { title: "Service", icon: iconStep2, flip: true },
  { title: "Post-Service Testing", icon: iconStep3, flip: true },
  { title: "Cleaning and Detailing", icon: iconStepCar, flip: false },
  { title: "Vehicle Delivery", icon: iconStep5, flip: false },
];

const initialGallery = [
  { src: galleryAlto3, alt: "Maruti Alto being serviced" },
  { src: galleryEngine1, alt: "Engine repair work" },
  { src: galleryEngine2, alt: "Engine repair work" },
  { src: galleryGt1, alt: "GT car service" },
  { src: galleryGt2, alt: "GT car service" },
  { src: galleryGarage1, alt: "Grime & Grease garage" },
  { src: galleryGarage2, alt: "Grime & Grease garage" },
  { src: galleryInnovaEngineBay, alt: "Toyota Innova engine bay" },
  { src: galleryDiscBrakes1, alt: "Disc brake service" },
  { src: galleryEngineBay1, alt: "Engine bay work" },
  { src: galleryEngineBay2, alt: "Engine bay work" },
  { src: galleryEngineWork5, alt: "Engine work in progress" },
  { src: galleryEngineWork8, alt: "Engine work in progress" },
  { src: galleryOthers1, alt: "Vehicle service work" },
  { src: galleryParts1, alt: "Replacement parts" },
];

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const heroSlides = [
  {
    src: heroImg,
    mobile: heroMobile,
    alt: "Grime & Grease Garage — We love cars and all their problems",
  },
  {
    src: heroImg1,
    mobile: heroMobile1,
    alt: "Every classic has a story. We help it continue.",
  },
];

function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [servicingIndex, setServicingIndex] = useState(0);
  const [gallery] = useState(() => shuffle(initialGallery));
  const [galleryStart, setGalleryStart] = useState(0);
  const preloaded = useRef<HTMLImageElement[]>([]);
  const preloadedServicing = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    preloaded.current = initialGallery.map((item) => {
      const img = new Image();
      img.src = item.src;
      void img.decode?.().catch(() => {});
      return img;
    });
  }, []);

  useEffect(() => {
    preloadedServicing.current = caseStudies.map((item) => {
      const img = new Image();
      img.src = item.src;
      void img.decode?.().catch(() => {});
      return img;
    });
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 6400);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const scriptId = "EmbedSocialHashtagScript";

    // ht.js only scans for .embedsocial-hashtag containers when it executes,
    // and a script element runs only once. On re-entry to this route the
    // container is a fresh (empty) node, so drop any previous script and
    // append a new element to force a re-scan.
    document.getElementById(scriptId)?.remove();

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://embedsocial.com/cdn/ht.js";
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  const showPrevServicing = () =>
    setServicingIndex((i) => (i - 1 + caseStudies.length) % caseStudies.length);
  const showNextServicing = () =>
    setServicingIndex((i) => (i + 1) % caseStudies.length);

  const activeCaseStudy = caseStudies[servicingIndex];

  const showPrevGallery = () =>
    setGalleryStart((i) => (i - 1 + gallery.length) % gallery.length);
  const showNextGallery = () =>
    setGalleryStart((i) => (i + 1) % gallery.length);

  const visibleGallery = Array.from(
    { length: 4 },
    (_, slot) => gallery[(galleryStart + slot) % gallery.length],
  );

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <picture key={slide.src}>
              <source media="(max-width: 600px)" srcSet={slide.mobile} />
              <Img
                className={`hero-image${index === heroIndex ? " is-active" : ""}`}
                src={slide.src}
                alt={slide.alt}
                loading="eager"
                fetchPriority={index === 0 ? "high" : undefined}
              />
            </picture>
          ))}
        </div>
        <div className="hero-tagline-band">
          <p className="container">
            From full-scale repairs to fine detailing, Grime &amp; Grease Garage
            delivers
            <br className="tagline-break" /> expert service, genuine parts, and
            honest workmanship — all under one roof.
          </p>
        </div>
      </section>

      <section className="services container">
        <h2 className="heading-accent">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <img
                src={service.icon}
                alt=""
                style={service.flip ? { transform: "scaleY(-1)" } : undefined}
              />
              <span>{service.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="brand-strip" aria-label="Brands we service">
        <div className="brand-marquee-mask">
          <div className="brand-marquee">
            <ul className="brand-list">
              {brandLogos.map((brand) => (
                <li key={brand.alt}>
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className={brandLogoClassName(brand)}
                  />
                </li>
              ))}
            </ul>
            <ul className="brand-list" aria-hidden="true">
              {brandLogos.map((brand) => (
                <li key={brand.alt}>
                  <img
                    src={brand.src}
                    alt=""
                    className={brandLogoClassName(brand)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="servicing">
        <h2 className="servicing-title">
          Fast and Efficient Vehicle Servicing
        </h2>

        <div className="servicing-carousel">
          <div className="servicing-peek-wrap">
            <Img
              key={servicingIndex}
              className="servicing-peek"
              src={
                caseStudies[
                  (servicingIndex - 1 + caseStudies.length) % caseStudies.length
                ].src
              }
              alt=""
              aria-hidden="true"
            />
            <button
              type="button"
              className="carousel-arrow prev"
              onClick={showPrevServicing}
              aria-label="Previous case study"
            >
              <img src={arrowServicePrev} alt="" className="flip" />
            </button>
          </div>

          <div className="servicing-main" key={servicingIndex}>
            <div className="servicing-photo-wrap">
              <Img
                className="servicing-photo"
                src={activeCaseStudy.src}
                alt={activeCaseStudy.alt}
              />
              <span className="tag">{activeCaseStudy.tag}</span>
            </div>

            <div className="case-card">
              <div className="case-card-body">
                <h3>{activeCaseStudy.title}</h3>
                <p>{activeCaseStudy.description}</p>
                <ul>
                  {activeCaseStudy.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="outcome">{activeCaseStudy.result}</p>
            </div>
          </div>

          <div className="servicing-peek-wrap">
            <Img
              key={servicingIndex}
              className="servicing-peek"
              src={caseStudies[(servicingIndex + 1) % caseStudies.length].src}
              alt=""
              aria-hidden="true"
            />
            <button
              type="button"
              className="carousel-arrow next"
              onClick={showNextServicing}
              aria-label="Next case study"
            >
              <img src={arrowServiceNext} alt="" />
            </button>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-carousel">
          <div className="gallery-grid">
            {visibleGallery.map((item, slot) => (
              <div className="gallery-item" key={slot}>
                <Img src={item.src} alt={item.alt} decoding="sync" />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="carousel-arrow prev"
            onClick={showPrevGallery}
            aria-label="Previous photos"
          >
            <img src={arrowGalleryPrev} alt="" className="flip" />
          </button>
          <button
            type="button"
            className="carousel-arrow next"
            onClick={showNextGallery}
            aria-label="Next photos"
          >
            <img src={arrowGalleryNext} alt="" />
          </button>
        </div>
      </section>

      <section className="process">
        <div className="container process-inner">
          <div className="process-heading">
            <img
              className="process-heading-bg"
              src={section5}
              alt=""
              aria-hidden="true"
            />
            <h2>
              Auto repair
              <br />
              process in
              <br />
              five basic steps
            </h2>
          </div>
          <ol className="process-steps">
            {processSteps.map((step) => (
              <li key={step.title}>
                <span className="process-icon">
                  <span
                    className="process-icon-glyph"
                    style={{
                      WebkitMaskImage: `url("${step.icon}")`,
                      maskImage: `url("${step.icon}")`,
                      transform: step.flip ? "scaleY(-1)" : undefined,
                    }}
                  />
                </span>
                <span>{step.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="reviews-embed">
        <div
          className="embedsocial-hashtag reviews-embed-widget"
          data-ref="dfdf781475bb905ef5bdc56bb8315eee7dc32bca"
        >
          <a
            className="feed-powered-by-es feed-powered-by-es-slider-img es-widget-branding"
            href="https://embedsocial.com/google-reviews-widget/"
            target="_blank"
            rel="noreferrer"
            title="Embed Google reviews"
          >
            <img
              src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
              alt="EmbedSocial"
            />
            <div className="es-widget-branding-text">Embed Google reviews</div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
