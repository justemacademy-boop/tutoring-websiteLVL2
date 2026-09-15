import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Team - JU STEM Academy',
  description: 'Meet the expert tutors at JU STEM Academy - Cornell University graduates dedicated to helping you succeed in STEM.',
};

const teamMembers = [
  {
    name: 'Joseph Agyemang',
    title: 'Co-Founder & Lead Consultant',
    image: '/images/joseph.jpg',
    bio: "Hi! I'm Joseph, Co-Founder and Lead Consultant of JU STEM Academy. I graduated Magna cum Laude from Cornell University with a degree in Biology and Society, and I've spent the past 4+ years discovering my passion for education. What I love most about this work is simple: every tutoring session is a chance to transform how a student sees learning and help them believe in their own abilities. Outside the classroom, I'm a die-hard Arsenal fan. I recently made the trip to the UK to watch them play live, and it was absolutely electric! I believe the beautiful game and STEM have a lot in common: both require strategy, creativity, and persistence.",
  },
  {
    name: 'Ukana Bassey',
    title: 'Co-Founder & Lead Tutor',
    image: '/images/ukana.jpg',
    bio: "Hi! I'm Ukana Bassey, Co-Founder and Lead Academic Tutor of JU STEM Academy. I graduated from Cornell University studying Biology and Society, and I've dedicated the past 4+ years to making STEM education engaging and accessible. My favorite part of this work is creating those breakthrough moments, when a student goes from frustrated to fascinated, when they realize they're capable of so much more than they thought. Outside of academics I enjoy fashion, photography, and endurance training as valuable pastimes!",
  },
  {
    name: 'Aatish Sethi',
    title: 'Tutor',
    image: '/images/aatish.jpg',
    bio: "Hi! I'm Aatish Sethi, a tutor at JU STEM Academy. I'm a first-year medical student at the University of Michigan Medical School and a recent graduate of Brown University, where I received a Sc.B. in Biochemistry and Molecular Biology in May 2026. I have over six years of experience tutoring STEM courses, and I most recently served as a Program Leader for the Math Discipline at Brown University's Sheridan Center for Teaching and Learning and a Teaching Assistant for Cell and Molecular Biology. My interest in teaching first began thanks to my high school Calculus teacher, whose principle of 'learning the why' still drives my teaching and leadership style. At Brown, I was also involved in biological research, studying the progression of ALS, investigating potential therapeutic targets for the disease, and co-authoring two research papers.",
  },
];

export default function TeamPage() {
  return (
    <section>
      <div className="container">
        <h2>Meet Our Team</h2>
        <div className="team-detailed-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={400}
                className="team-image"
              />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
