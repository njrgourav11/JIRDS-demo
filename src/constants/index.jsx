import { Timer } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { School } from "lucide-react";
import { Stethoscope } from "lucide-react";
import { Drama } from "lucide-react";
import { Headset } from "lucide-react";
import { Home } from "lucide-react";
import { Handshake } from "lucide-react";
import { Cone } from "lucide-react";
import { Plane } from "lucide-react";
import { Users } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
];

export const testimonials = [
  {
    user: "Sandeep",
    company: "28 Feb, 2023",
    text: "It`s a good therapy centre Staff is very friendly, management is very good, they allow parents to the therapy. They are planning a great projects like inclusive education.Para Olympics.They are taking a kids to inclusive education .We are lucky to be joining our kid in this school.",
  },
  {
    user: "Viswanadh",
    company: "27 Jan, 2019",
    text: "I have been here for Facial Nerve Infection Physiotherapy (Bells Palsy). Anuradha madam clearly explained to me about the problem/exercises and about the 3 weeks physiotherapy process have to undergo daily. I followed her words strictly and completely recovered.",
  },
  {
    user: "Bhavani",
    company: "30 Dec, 2018",
    text: "Very good center for child development.I have been experiencing continues improvements in my child after going to this center.Anuradha madam and staff are really wonderful.",
  },
  {
    user: "G Sujatha",
    company: "14 Dec, 2018",
    text: "Dr. Anuradha diagnoses the root cause of the problem from different directions and follow creative holistic approach so that the problem is completely cured.",
  },
  {
    user: "T V G Acharyulu",
    company: "11 Nov, 2018",
    text: "Dr. Anuradha is very dedicated and passionate physiotherapist. She is very friendly and treats old people with lots of care.",
  },
  {
    user: "Basha",
    company: "29 Dec,2018",
    text: "Dr. Anuradha is very good physiotherapist with good listening ,caring and curing abilities. Patient feels in ``safe hands ``",
  },
];

export const features = [
  {
    icon: <Timer />,
    text: "Early intervention",
    description:
      "Implement early intervention strategies for children's development, utilizing specialized techniques and tools to address developmental milestones proactively.",
  },
  {
    icon: <School />,
    text: "Special education",
    description:
      "Tailor educational approaches for students with special needs, ensuring inclusivity and accessibility across different learning environments and platforms.",
  },
  {
    icon: <Stethoscope />,
    text: "Speech, Physio & Occupational therapy",
    description:
      "Offer comprehensive therapy services encompassing speech, physiotherapy, and occupational therapy to support individuals' physical and cognitive development.",
  },
  {
    icon: <BookOpenCheck />,
    text: "Remedial teaching for learning problems",
    description:
      "Provide targeted remedial teaching programs to address learning challenges, offering personalized instruction and support to enhance academic skills.",
  },
  {
    icon: <Drama />,
    text: "Counselling and parent training programmes",
    description:
      "Deliver counseling and training programs for parents and caregivers, promoting understanding and empowerment in managing their children's needs effectively.",
  },
  {
    icon: <Headset />,
    text: "Telepathy services",
    description:
      "Leverage advanced communication tools and techniques to facilitate telepathy services, enabling intuitive and efficient interactions between individuals.",
  },

  {
    icon: <Home />,
    text: "In house assessment services",
    description:
      "Thorough assessments to evaluate individual needs and progress. Insights and recommendations for tailored intervention plans.",
  },
  {
    icon: <Handshake />,
    text: "Family Sensitive & friendly ambience",
    description:
      "Create an environment that is welcoming, supportive, and family-friendly.Ensure that families feel comfortable and actively involved in their child’s development.",
  },
  {
    icon: <Cone />,
    text: "Fun, Safe, resource enriched environment",
    description:
      "Design learning spaces that are engaging, safe, and filled with age-appropriate resources.Encourage exploration, creativity, and social interaction.",
  },
  {
    icon: <Users />,
    text: "Group activities to develop social skill and functional skills",
    description:
      "Organize group activities that promote social interaction, cooperation, and teamwork.Focus on developing both social skills (e.g., sharing, taking turns) and functional skills (e.g., self-care, problem-solving).",
  },
  {
    icon: <Plane />,
    text: "Field trips",
    description:
      "Arrange educational field trips to expose children to real-world experiences.Enhance their understanding of various concepts and encourage curiosity.",
  },
];

export const checklistItems = [
  {
    title: "ASD (Autism Spectrum Disorder)",
    description:
      "A developmental disorder characterized by challenges in social communication, repetitive behaviors, and restricted interests.",
  },
  {
    title: "CP (Cerebral Palsy)",
    description:
      "A group of motor disorders caused by brain damage, affecting muscle control, movement, and posture.",
  },
  {
    title: "Multiple Disability",
    description:
      "Refers to individuals who experience more than one significant disability simultaneously, such as a combination of physical, sensory, and intellectual impairments.",
  },
  {
    title: "ADHD (Attention-Deficit/Hyperactivity Disorder)",
    description:
      "A neurodevelopmental disorder marked by difficulties in attention, impulsivity, and hyperactivity.",
  },
  {
    title: "Development Delay",
    description:
      "A delay in achieving developmental milestones (e.g., speech, motor skills) within expected timeframes.",
  },
  {
    title: "Slow Learners",
    description:
      "Individuals who take longer to grasp new concepts or skills but can eventually learn with appropriate support and patience.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
