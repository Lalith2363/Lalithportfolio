import type { Experience, Education, Certification, Skill } from '../types'

export const experience: Experience[] = [
  {
    role: 'Cyber Security Intern',
    company: 'Slash Mark IT Solutions Pvt Ltd',
    location: 'India',
    period: 'Apr 2025 – Jun 2025',
    current: false,
    bullets: [
      'Built the Integrated Cyber Threat Detection system combining Python, ML, Kali Linux, and Nmap to detect and classify network threats.',
      'Wrote machine learning pipelines that improved classification accuracy over basic rule-based methods.',
      'Got hands-on experience with penetration testing processes and security log analysis.',
    ],
  },
  {
    role: 'AI / ML Intern',
    company: 'Suven Consultants & Technology Pvt. Ltd.',
    location: 'India',
    period: 'Jun 2023 – Jul 2023',
    current: false,
    bullets: [
      'Built chatbots and voice assistant applications using OpenAI APIs and ChatGPT integrations.',
      'Applied deep learning for image detection tasks — worked with CNNs and basic computer vision pipelines.',
      'Delivered working prototypes within the internship timeline.',
    ],
  },
  {
    role: 'Cyber Security Intern',
    company: 'Palo Alto Networks',
    location: 'Remote',
    period: 'Sep 2022 – Nov 2022',
    current: false,
    bullets: [
      'Studied real-world attack techniques — reconnaissance, exploitation, and post-exploitation — and how they map to standard security frameworks.',
      'Worked through threat detection and risk assessment scenarios, building a foundation in how enterprise security teams operate.',
      'Completed training on security protocols and incident response workflows.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Internshala',
    location: 'Remote',
    period: 'Jul 2022 – Oct 2022',
    current: false,
    bullets: [
      'Built web applications using HTML, CSS, and PHP with an emphasis on responsive design.',
      'Worked on front-end UI components and learned version control and development practices.',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'M. Tech in Cyber Security',
    institution: 'Jawaharlal Nehru Technological University Kakinada (JNTUK)',
    period: '2024 – Present',
    note: 'Coursework covers network security, ethical hacking, cryptography, Digital Forensics and Cyber Crime.',
  },
  {
    degree: 'B. Tech in Computer Science and Engineering',
    institution: 'Sir C R Reddy College of Engineering',
    period: '2020 – 2024',
    note: 'Core subjects: data structures, algorithms, operating systems, computer networks, DBMS.',
  },
]

export const certifications: Certification[] = [
  {
    name: 'Cybersecurity Virtual Internship',
    issuer: 'Palo Alto Networks',
    year: '2022',
  },
  {
    name: 'AI & Machine Learning Internship',
    issuer: 'Suven Consultants & Technology',
    year: '2023',
  },
]

export const skills: Skill[] = [
  // Core programming languages
  { name: 'Python', category: 'Core' },
  { name: 'Java', category: 'Core' },
  { name: 'JavaScript', category: 'Core' },
  { name: 'Bash / Shell', category: 'Core' },
  { name: 'SQL', category: 'Core' },

  // Security tools & skills
  { name: 'Kali Linux', category: 'Security' },
  { name: 'Nmap', category: 'Security' },
  { name: 'Wireshark', category: 'Security' },
  { name: 'Metasploit', category: 'Security' },
  { name: 'Burp Suite', category: 'Security' },
  { name: 'Threat Detection', category: 'Security' },
  { name: 'Vulnerability Analysis', category: 'Security' },
  { name: 'Incident Response', category: 'Security' },
  { name: 'Digital Forensics', category: 'Security' },

  // Machine Learning & AI
  { name: 'TensorFlow', category: 'AI' },
  { name: 'Scikit-learn', category: 'AI' },
  { name: 'OpenCV', category: 'AI' },
  { name: 'CNN (Convolutional Neural Networks)', category: 'AI' },
  { name: 'LSTM & Sequential Models', category: 'AI' },
  { name: 'SVM & Random Forest', category: 'AI' },
  { name: 'Transfer Learning (ResNet, VGG16, VGG19)', category: 'AI' },
  { name: 'OpenAI API & ChatGPT Integration', category: 'AI' },

  // Networking & Systems
  { name: 'TCP/IP & OSI Model', category: 'Networking' },
  { name: 'DNS & DHCP', category: 'Networking' },
  { name: 'Subnetting, Routing & Switching', category: 'Networking' },
  { name: 'Kali Linux & Parrot OS', category: 'Networking' },
  { name: 'Ubuntu Linux', category: 'Networking' },
  { name: 'Windows Security', category: 'Networking' },

  // Web & App Development
  { name: 'React', category: 'Web' },
  { name: 'React Native', category: 'Web' },
  { name: 'HTML5 & CSS3', category: 'Web' },
  { name: 'Bootstrap', category: 'Web' },
  { name: 'PHP', category: 'Web' },
]
