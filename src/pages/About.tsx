import heroTeam from '../assets/about/hero-team.png'
import whatWeDoImg from '../assets/about/what-we-do.png'
import whyChoose1 from '../assets/about/why-choose-1.png'
import whyChoose2 from '../assets/about/why-choose-2.png'
import photoAngath from '../assets/about/angath.png'
import photoManjunath from '../assets/about/manjunath.png'
import photoSaqib from '../assets/about/saqib.png'
import photoKumar from '../assets/about/kumar.png'

const team = [
  {
    name: 'Angath Krishnadas',
    role: 'Founder & Managing Partner',
    quote: 'The One Who Started It All',
    specializes: 'Maruti, Fiat, BMW, Mercedes-Benz, Range Rover, Porsche',
    photo: photoAngath,
    bio: [
      'By age eight, he was already spending weekends learning the ropes at a local garage — an obsession that took him to TOC Automotive College Malaysia and hands-on experience with Mazda and Nissan-Renault,',
      'before he founded Grime & Grease in 2019, growing it from a 150 sq. ft. garage to a 2,200 sq. ft. premium facility. Some say his first word was "Car."',
    ],
  },
  {
    name: 'Manjunath Gangane',
    role: 'Team Head, Restoration & Technical Excellence',
    quote: 'The Vintage Virtuoso',
    specializes: 'Fiat, Ambassador, Audi and other premium marques',
    photo: photoManjunath,
    bio: [
      'With over 35 years in the trade — including running his own garage in Gulbarga — Manjunath has led multiple full-scale restorations, breathing new life into iconic machines with rare patience and precision.',
      'Today he also mentors the next generation of technicians, making him one of the true pillars of the workshop.',
    ],
  },
  {
    name: 'Saqib Pasha',
    role: 'Technical Specialist, Premium & Performance Segment',
    quote: 'The Young Turk of Performance',
    specializes: 'BMW, Audi, Mercedes-Benz, Mitsubishi, Lamborghini, Porsche',
    photo: photoSaqib,
    bio: [
      'Brings 13 years of technical experience to premium and performance vehicles — from advanced diagnostics and ECU coding to high-precision repairs on some of the most sophisticated engineering on the road.',
      'His calm confidence and constant drive to learn make him a rising star of the next generation.',
    ],
  },
  {
    name: 'B. K. Kumar',
    role: 'Technical Specialist & Infrastructure Backbone',
    quote: 'Kumar Anna Can Fix Anything',
    specializes: 'Brand-agnostic all-rounder',
    photo: photoKumar,
    bio: [
      'Kumar handles anything under the sun — from routine general service to complex major overhauls — with flawless execution and a calm, solution-oriented approach.',
      'His core strength lies in electrical systems and garage infrastructure, giving him a rare understanding of how a workshop should run, not just technically but structurally.',
    ],
  },
]

function About() {
  return (
    <>
      <section className="about-hero">
        <img
          className="about-hero-image"
          src={heroTeam}
          alt="The Grime & Grease Garage team"
        />
        <div className="about-hero-band">
          <p className="container">
            Founded by Angath Krishnadas, Grime &amp; Grease Garage was born
            from a lifelong passion for cars and the pure joy of
            understanding how machines breathe, move, and endure. What
            began with childhood tire changes and weekend garage visits
            grew into a commitment to honest, high-quality automotive
            care.
            <br />
            <br />
            For us, servicing a car is almost sacred — an engine must
            function in perfect harmony, and watching it run for lakhs of
            kilometres is our greatest satisfaction.
            <br />
            <br />
            We believe in transparency above all: if something can&rsquo;t
            be fixed, we&rsquo;ll tell you. As both former customers and
            experienced mechanics, we understand your car from the inside
            out — and treat it with the respect it deserves.
          </p>
        </div>
      </section>

      <section className="what-we-do container">
        <div className="what-we-do-image">
          <img src={whatWeDoImg} alt="Engine repair at Grime & Grease Garage" />
        </div>
        <div>
          <h2 className="heading-accent">What We Do</h2>
          <p>
            At Grime &amp; Grease, we handle complete car care with
            precision and honesty. Our services include engine diagnostics
            and repairs, general servicing, detailing, paint jobs and full
            bodywork, and accident restoration.
            <br />
            <br />
            Whether it&apos;s routine maintenance or a complex mechanical
            issue, our team brings skilled hands and a transparent process
            to every job — restoring performance, resolving issues, or
            simply refreshing how your car looks and feels.
          </p>
        </div>
      </section>

      <section className="why-choose container">
        <div>
          <h2 className="heading-accent">Why Choose Us</h2>
          <p>
            At Grime &amp; Grease, your car is treated with the same care
            we&apos;d give our own. Every service is handled by skilled
            hands who take the time to walk you through what&apos;s being
            done and why.
            <br />
            <br />
            Backed by precise diagnostics and honest advice, your car
            leaves us performing better, running cleaner, and built to
            last.
          </p>
        </div>
        <div className="why-choose-images">
          <img src={whyChoose1} alt="A vehicle in the workshop" />
          <img src={whyChoose2} alt="Technician working under the hood" />
        </div>
      </section>

      <section className="team container">
        <h2 className="heading-accent">Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div
              className={`team-card${index % 2 === 1 ? ' reverse' : ''}`}
              key={member.name}
            >
              <div className="team-visual">
                <div className="team-photo">
                  <img src={member.photo} alt={member.name} />
                </div>
                <div className="team-photo-fill">
                  {member.bio.map((paragraph, i) => (
                    <p className="team-bio" key={i}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-quote">&ldquo; {member.quote} &rdquo;</p>
                <p className="team-specializes-label">Specializes in</p>
                <p className="team-specializes">{member.specializes}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
