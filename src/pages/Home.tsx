import { useEffect, useState } from 'react'

import heroImg from '../assets/home/hero.png'
import heroImg1 from '../assets/home/hero1.png'
import heroMobile from '../assets/home/hero-mobile.jpg'
import heroMobile1 from '../assets/home/hero-mobile1.jpg'

import iconGeneral from '../assets/home/icon-general.svg'
import iconEngine from '../assets/home/icon-engine.svg'
import iconElectrical from '../assets/home/icon-electrical.svg'
import iconBody from '../assets/home/icon-body.svg'
import iconBrakes from '../assets/home/icon-brakes.svg'
import iconTurbo from '../assets/home/icon-turbo.svg'
import iconSuspension from '../assets/home/icon-suspension.svg'
import iconClutch from '../assets/home/icon-clutch.svg'
import iconAc from '../assets/home/icon-ac.svg'
import iconDetailing from '../assets/home/icon-detailing.svg'
import iconPaint from '../assets/home/icon-paint.svg'
import iconInspection from '../assets/home/icon-inspection.svg'

import brandMitsubishi from '../assets/home/brand-mitsubishi.svg'
import brandSuzuki from '../assets/home/brand-suzuki.svg'
import brandMg from '../assets/home/brand-mg.svg'
import brandRangeRover from '../assets/home/brand-rangerover.svg'
import brandHyundai from '../assets/home/brand-hyundai.svg'
import brandAudi from '../assets/home/brand-audi.svg'
import brandBmw from '../assets/home/brand-bmw.svg'
import brandPorsche from '../assets/home/brand-porsche.svg'
import brandMercedes from '../assets/home/brand-mercedes.svg'
import brandVolvo from '../assets/home/brand-volvo.svg'
import brandToyota from '../assets/home/brand-toyota.svg'
import brandKia from '../assets/home/brand-kia.svg'
import brandVw from '../assets/home/brand-vw.svg'
import brandMahindra from '../assets/home/brand-mahindra.svg'
import brandTata from '../assets/home/brand-tata.svg'
import brandHonda from '../assets/home/brand-honda.svg'
import brandSkoda from '../assets/home/brand-skoda.svg'

import servicingPajero from '../assets/home/servicing-1.svg'
import servicingJetta from '../assets/home/servicing-2.svg'
import servicingAudiQ3 from '../assets/home/servicing-3.svg'
import servicingXuv500 from '../assets/home/case-studies-xuv500-crop.png'
import arrowServicePrev from '../assets/home/arrow-service-prev.svg'
import arrowServiceNext from '../assets/home/arrow-service-next.svg'

import iconStep1 from '../assets/home/icon-step1.svg'
import iconStep2 from '../assets/home/icon-step2.svg'
import iconStep3 from '../assets/home/icon-step3.svg'
import iconStepCar from '../assets/home/icon-step-car.svg'
import iconStep5 from '../assets/home/icon-step5.svg'
import section5 from '../assets/home/section5.svg'

import gallery1 from '../assets/home/gallery-1.svg'
import gallery2 from '../assets/home/gallery-2.svg'
import gallery3 from '../assets/home/gallery-3.svg'
import gallery4 from '../assets/home/gallery-4.svg'
import arrowGalleryPrev from '../assets/home/arrow-gallery-prev.svg'
import arrowGalleryNext from '../assets/home/arrow-gallery-next.svg'

const services = [
  { title: 'General Service', icon: iconGeneral, flip: true },
  { title: 'Engine Work', icon: iconEngine, flip: true },
  { title: 'Electrical & Wiring', icon: iconElectrical, flip: true },
  { title: 'Body Repair', icon: iconBody },
  { title: 'Brake Service', icon: iconBrakes },
  { title: 'Turbocharger Replacement', icon: iconTurbo },
  { title: 'Suspension Repairs', icon: iconSuspension },
  { title: 'Clutch Replacement', icon: iconClutch },
  { title: 'Air Conditioning', icon: iconAc },
  { title: 'Detailing', icon: iconDetailing },
  { title: 'Paint Jobs', icon: iconPaint },
  { title: 'Pre-Owned Car Inspection', icon: iconInspection },
]

const brandLogos = [
  { src: brandMitsubishi, alt: 'Mitsubishi' },
  { src: brandSuzuki, alt: 'Suzuki' },
  { src: brandMg, alt: 'MG' },
  { src: brandRangeRover, alt: 'Range Rover' },
  { src: brandHyundai, alt: 'Hyundai' },
  { src: brandAudi, alt: 'Audi' },
  { src: brandBmw, alt: 'BMW', keepColor: true },
  { src: brandPorsche, alt: 'Porsche' },
  { src: brandMercedes, alt: 'Mercedes-Benz' },
  { src: brandVolvo, alt: 'Volvo' },
  { src: brandToyota, alt: 'Toyota' },
  { src: brandKia, alt: 'Kia' },
  { src: brandVw, alt: 'Volkswagen' },
  { src: brandMahindra, alt: 'Mahindra' },
  { src: brandTata, alt: 'Tata' },
  { src: brandHonda, alt: 'Honda' },
  { src: brandSkoda, alt: 'Skoda' },
]

const caseStudies = [
  {
    src: servicingPajero,
    alt: 'Mitsubishi Pajero GLX raised on a workshop lift',
    tag: 'Complete Engine Rebuild',
    title: 'Mitsubishi Pajero GLX',
    description:
      'Persistent overheating led us to a failing cylinder head and head gasket — and once we opened the engine up, further internal wear made clear this needed a full rebuild, not a patch. We also found the turbocharger well past its efficient life and replaced it as part of the job.',
    highlights: [
      'Full rebuild: cylinder head, piston rings, bearings, timing chain, turbocharger',
      'Clutch, water pump and thermostat replaced',
      'Rebuilt the original engine instead of fitting an imported unit',
    ],
    result: [
      'A reliable, original powertrain with new turbo performance — chosen',
      'over a costlier engine swap or a riskier imported replacement.',
    ],
  },
  {
    src: servicingJetta,
    alt: 'Volkswagen Jetta with suspension parts laid out during service',
    tag: 'Full Mechanical Refresh',
    title: 'Volkswagen Jetta',
    description:
      'This Jetta came in needing more than a service — brakes, suspension, interior, and electrical systems all needed attention to bring it back to daily-driver condition. We treated it as a full refresh rather than a checklist of fixes.',
    highlights: [
      'Front & rear brake service and full suspension overhaul',
      'Headliner replacement and window regulator repair',
      'Airbag wiring repair with advanced diagnostic scanning',
      'Complete interior/exterior detail before delivery',
    ],
    result: [
      'Smooth, stable ride and fully verified electrical systems — delivered',
      'after a full diagnostic re-scan and road test.',
    ],
  },
  {
    src: servicingAudiQ3,
    alt: 'Audi Q3 raised on a workshop lift',
    tag: 'Suspension Overhaul & Oil Leak Repair',
    title: 'Audi Q3',
    description:
      'Excessive suspension noise, an unstable ride over uneven roads, and an oil leak from the front crankshaft seal — the Q3 needed both ends addressed together to restore it to peak condition.',
    highlights: [
      'Front & rear suspension rebuild: bushes, stabilizer links, shock absorbers',
      'Crankshaft oil seal, oil pump belt, and engine/torque mount replacement',
      'Precision wheel alignment and brake caliper service',
    ],
    result: [
      'Ride quality restored to near-factory feel, leak-free engine, and',
      'improved steering response — verified with a full road test.',
    ],
  },
  {
    src: servicingXuv500,
    alt: 'Mahindra XUV500 with the hood open during service',
    contain: true,
    tag: 'Complete Body Restoration',
    title: 'Mahindra XUV500',
    description:
      "One of our most demanding rebuilds — the XUV500 arrived with extensive rust damage, all five doors beyond repair, and a compromised structure. The owner didn't want a replacement car; he wanted this car back. So we sourced a donor body shell and doors, stripped the vehicle to bare chassis, and rebuilt it panel by panel.",
    highlights: [
      'Full body shell and all-five-door replacement, sourced and matched from donor vehicles',
      'Complete strip-down: engine, transmission, interior, wiring, airbags — catalogued and reinstalled',
      'Multi-stage bodywork, paint, and factory-spec panel alignment',
      'Engine refit by a five-person team using an engine crane',
    ],
    result: [
      'A structurally sound, road-ready SUV — and a car with sentimental',
      'value the owner got to keep instead of replace.',
    ],
  },
]

const processSteps = [
  { title: 'Diagnosis and Quote', icon: iconStep1, flip: true },
  { title: 'Service', icon: iconStep2, flip: true },
  { title: 'Post-Service Testing', icon: iconStep3, flip: true },
  { title: 'Cleaning and Detailing', icon: iconStepCar, flip: false },
  { title: 'Vehicle Delivery', icon: iconStep5, flip: false },
]

const initialGallery = [
  { src: gallery1, alt: 'Recent work — vehicle detail 1' },
  { src: gallery2, alt: 'Recent work — vehicle detail 2' },
  { src: gallery3, alt: 'Recent work — vehicle detail 3' },
  { src: gallery4, alt: 'Recent work — vehicle detail 4' },
]

const heroSlides = [
  {
    src: heroImg,
    mobile: heroMobile,
    alt: 'Grime & Grease Garage — We love cars and all their problems',
  },
  {
    src: heroImg1,
    mobile: heroMobile1,
    alt: 'Every classic has a story. We help it continue.',
  },
]

function Home() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [servicingIndex, setServicingIndex] = useState(0)
  const [gallery, setGallery] = useState(initialGallery)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(id)
  }, [])

  const showPrevServicing = () =>
    setServicingIndex((i) => (i - 1 + caseStudies.length) % caseStudies.length)
  const showNextServicing = () =>
    setServicingIndex((i) => (i + 1) % caseStudies.length)

  const activeCaseStudy = caseStudies[servicingIndex]

  const galleryStep = () =>
    window.matchMedia('(max-width: 960px)').matches ? 1 : 2

  const showPrevGallery = () =>
    setGallery((g) => {
      const step = galleryStep()
      return [...g.slice(-step), ...g.slice(0, -step)]
    })
  const showNextGallery = () =>
    setGallery((g) => {
      const step = galleryStep()
      return [...g.slice(step), ...g.slice(0, step)]
    })

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <picture key={slide.src}>
              <source media="(max-width: 960px)" srcSet={slide.mobile} />
              <img
                className={`hero-image${index === heroIndex ? ' is-active' : ''}`}
                src={slide.src}
                alt={slide.alt}
              />
            </picture>
          ))}
        </div>
        <div className="hero-tagline-band">
          <p className="container">
            From full-scale repairs to fine detailing, Grime &amp; Grease
            Garage delivers expert service, genuine parts, and honest
            workmanship — all under one roof.
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
                style={service.flip ? { transform: 'scaleY(-1)' } : undefined}
              />
              <span>{service.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="brand-strip" aria-label="Brands we service">
        <div className="brand-marquee">
          <ul className="brand-list">
            {brandLogos.map((brand) => (
              <li key={brand.alt}>
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className={brand.keepColor ? 'keep-color' : undefined}
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
                  className={brand.keepColor ? 'keep-color' : undefined}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="servicing">
        <h2 className="servicing-title">Fast and Efficient Vehicle Servicing</h2>

        <div className="servicing-carousel">
          <div className="servicing-peek-wrap">
            <img
              className="servicing-peek"
              src={caseStudies[(servicingIndex - 1 + caseStudies.length) % caseStudies.length].src}
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

          <div className="servicing-main">
            <div className="servicing-photo-wrap">
              <img
                className={`servicing-photo${activeCaseStudy.contain ? ' contain' : ''}`}
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
              <p className="outcome">
                {activeCaseStudy.result.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="servicing-peek-wrap">
            <img
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
            {gallery.map((item) => (
              <div className="gallery-item" key={item.src}>
                <img src={item.src} alt={item.alt} />
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
            <img className="process-heading-bg" src={section5} alt="" aria-hidden="true" />
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
                      transform: step.flip ? 'scaleY(-1)' : undefined,
                    }}
                  />
                </span>
                <span>{step.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

export default Home
