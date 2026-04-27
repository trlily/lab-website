import React, { useState } from "react";

/* ============================================================
 * 데이터 영역 — 이 부분만 수정하면 페이지 내용이 업데이트됩니다.
 * ============================================================ */

const LAB_INFO = {
  name: "Brain Imaging & AI Lab",
  shortName: "BIAL",
  affiliation: "Yonsei University College of Medicine · Severance Hospital",
  address: "50-1 Yonsei-ro, Seodaemun-gu, Seoul 03722, Republic of Korea",
  email: "bial@yuhs.ac",
  phone: "+82-2-2228-0000",
  vision:
    "Advancing precision medicine through translational neuroimaging and artificial intelligence.",
  subVision:
    "We develop next-generation imaging biomarkers and deep learning models to better understand the human brain — from molecular pathology to clinical decision-making.",
};

const RESEARCH_AREAS = [
  {
    title: "Quantitative PET Imaging",
    description:
      "Developing standardized quantification pipelines for amyloid, tau, and PSMA PET to support clinical and translational research.",
    icon: "🧠",
  },
  {
    title: "Deep Learning for Medical Imaging",
    description:
      "Building generative and discriminative models for denoising, segmentation, and disease classification across MR/PET/CT modalities.",
    icon: "🤖",
  },
  {
    title: "Neurodegenerative Disease",
    description:
      "Investigating Alzheimer's disease, Parkinson's disease, and related disorders using multimodal imaging biomarkers.",
    icon: "🔬",
  },
  {
    title: "Clinical Translation",
    description:
      "Translating research prototypes into clinically deployable software in collaboration with Severance Hospital.",
    icon: "🏥",
  },
];

/* 논문 데이터: 연도별로 정리. featured: true 인 논문은 강조 표시됩니다. */
const PUBLICATIONS = [
  {
    year: 2026,
    items: [
      {
        title:
          "Adaptive denoising of low-dose amyloid PET via uncertainty-guided diffusion models",
        authors: "Kim G, Lee SW, Park J, et al.",
        venue: "NeuroImage",
        link: "#",
        featured: true,
      },
      {
        title:
          "Combined PET/MR pipeline for harmonized PSMA quantification across vendors",
        authors: "Park J, Kim G, et al.",
        venue: "European Journal of Nuclear Medicine",
        link: "#",
        featured: false,
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        title:
          "Self-supervised representation learning for tau PET staging in early Alzheimer's disease",
        authors: "Lee SW, Kim G, Cho M, et al.",
        venue: "Medical Image Analysis",
        link: "#",
        featured: true,
      },
      {
        title:
          "Cross-vendor harmonization of brain MRI using cycle-consistent diffusion",
        authors: "Cho M, Park J, et al.",
        venue: "IEEE TMI",
        link: "#",
        featured: false,
      },
      {
        title:
          "A multi-center validation study of automated hippocampal segmentation in dementia",
        authors: "Kim G, et al.",
        venue: "Alzheimer's & Dementia",
        link: "#",
        featured: false,
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        title:
          "Deep-learning-based attenuation correction for whole-body PET/MR",
        authors: "Park J, Lee SW, et al.",
        venue: "Journal of Nuclear Medicine",
        link: "#",
        featured: false,
      },
    ],
  },
];

/* 직급별 그룹 구조. 같은 그룹 안의 사람은 people 배열에 순서대로.
 * 사진은 placeholder — 실제 사진 URL로 교체하면 자동 반영됩니다.
 * nameEn / email은 비워둬도 OK (값이 있는 경우만 표시됨). */
const MEMBERS = [
  {
    group: "Professor",
    people: [
      {
        name: "윤미진",
        nameEn: "Mijin Yun, M.D., Ph.D.",
        role: "Principal Investigator",
        photo: "https://placehold.co/240x240/003876/ffffff?text=Photo",
        email: "",
      },
    ],
  },
  {
    group: "Research Professor",
    people: [
      {
        name: "이상원",
        nameEn: "Sangwon Lee",
        role: "Research Professor",
        photo: "https://placehold.co/240x240/0a4d8c/ffffff?text=Photo",
        email: "",
      },
    ],
  },
  {
    group: "Student Researchers",
    people: [
      { name: "김대성", nameEn: "Daesung Kim", role: "Student Researcher", photo: "https://placehold.co/240x240/1f6dbf/ffffff?text=Photo", email: "" },
      { name: "김가연", nameEn: "Gayeon Kim", role: "Student Researcher", photo: "https://placehold.co/240x240/1f6dbf/ffffff?text=Photo", email: "gayeonkim@yuhs.ac" },
      { name: "강희지", nameEn: "Heeji Kang", role: "Student Researcher", photo: "https://placehold.co/240x240/1f6dbf/ffffff?text=Photo", email: "" },
      { name: "이상민", nameEn: "Sangmin Lee", role: "Student Researcher", photo: "https://placehold.co/240x240/1f6dbf/ffffff?text=Photo", email: "" },
      { name: "고현진", nameEn: "Hyunjin Ko", role: "Student Researcher", photo: "https://placehold.co/240x240/1f6dbf/ffffff?text=Photo", email: "" },
    ],
  },
  {
    group: "Researchers",
    people: [
      { name: "김남헌", nameEn: "Namheon Kim", role: "Researcher", photo: "https://placehold.co/240x240/3b82c4/ffffff?text=Photo", email: "" },
      { name: "이명오", nameEn: "Myeongoh Lee", role: "Researcher", photo: "https://placehold.co/240x240/3b82c4/ffffff?text=Photo", email: "" },
      { name: "이승준", nameEn: "Seungjun Lee", role: "Researcher", photo: "https://placehold.co/240x240/3b82c4/ffffff?text=Photo", email: "" },
      { name: "홍슬기", nameEn: "Seulgi Hong", role: "Researcher", photo: "https://placehold.co/240x240/3b82c4/ffffff?text=Photo", email: "" },
      { name: "이민지", nameEn: "Minji Lee", role: "Researcher", photo: "https://placehold.co/240x240/3b82c4/ffffff?text=Photo", email: "" },
      { name: "장나경", nameEn: "Nakyung Jang", role: "Researcher", photo: "https://placehold.co/240x240/3b82c4/ffffff?text=Photo", email: "" },
      { name: "강성진", nameEn: "Sungjin Kang", role: "Researcher", photo: "https://placehold.co/240x240/3b82c4/ffffff?text=Photo", email: "" },
      { name: "임현경", nameEn: "Hyunkyung Lim", role: "Researcher", photo: "https://placehold.co/240x240/3b82c4/ffffff?text=Photo", email: "" },
    ],
  },
];

const NEWS = [
  {
    date: "2026-04-15",
    title: "Two papers accepted at MICCAI 2026",
    body: "Our work on adaptive PET denoising and multimodal harmonization will be presented at MICCAI 2026, Daejeon.",
  },
  {
    date: "2026-03-02",
    title: "New industry collaboration with a domestic PET/MR vendor",
    body: "We launched a 2-year joint project on AI-driven attenuation correction for next-generation PET/MR scanners.",
  },
  {
    date: "2026-01-20",
    title: "Welcome to our new members",
    body: "Two graduate students and one postdoctoral researcher joined the lab in the Spring 2026 semester.",
  },
  {
    date: "2025-11-08",
    title: "NIH-style multi-center grant awarded",
    body: "Our lab received funding to lead a 5-center study on early Alzheimer's biomarkers.",
  },
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "members", label: "Members" },
  { id: "news", label: "News" },
];

/* ============================================================
 * 컴포넌트 영역
 * ============================================================ */

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#003876] to-[#1f6dbf] flex items-center justify-center text-white font-bold">
            B
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold text-slate-900">
              {LAB_INFO.name}
            </div>
            <div className="text-[11px] text-slate-500">
              {LAB_INFO.affiliation}
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-700 hover:text-[#003876] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold px-4 py-2 rounded-md bg-[#003876] text-white hover:bg-[#0a4d8c] transition-colors"
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#003876] via-[#0a4d8c] to-[#1f6dbf] text-white"
    >
      {/* placeholder background image overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://placehold.co/1600x900/003876/ffffff?text=Brain+Imaging+%26+AI')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
            Recruiting graduate students for 2026 Fall
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            {LAB_INFO.vision}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
            {LAB_INFO.subVision}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#research"
              className="px-6 py-3 rounded-md bg-white text-[#003876] font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Research
            </a>
            <a
              href="#publications"
              className="px-6 py-3 rounded-md bg-transparent border border-white/40 font-semibold hover:bg-white/10 transition-colors"
            >
              Recent Publications →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl mb-12">
      <div className="text-xs font-semibold tracking-widest uppercase text-[#003876]">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

function Research() {
  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Research"
          title="Areas of Focus"
          description="We work at the intersection of medical imaging, machine learning, and clinical neuroscience to translate research into impact."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESEARCH_AREAS.map((area) => (
            <div
              key={area.title}
              className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-[#003876] hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-4">{area.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#003876] transition-colors">
                {area.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section id="publications" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Publications"
          title="Selected Publications"
          description="A curated list of recent peer-reviewed work. ★ indicates featured publications."
        />
        <div className="space-y-12">
          {PUBLICATIONS.map((group) => (
            <div key={group.year}>
              <div className="flex items-baseline gap-4 mb-5">
                <h3 className="text-2xl font-bold text-[#003876]">
                  {group.year}
                </h3>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <ul className="space-y-3">
                {group.items.map((p, idx) => (
                  <li
                    key={idx}
                    className={`p-5 rounded-lg border transition-colors ${
                      p.featured
                        ? "bg-blue-50/60 border-blue-200"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {p.featured && (
                        <span className="mt-1 text-amber-500" title="Featured">
                          ★
                        </span>
                      )}
                      <div className="flex-1">
                        <a
                          href={p.link}
                          className="text-base font-semibold text-slate-900 hover:text-[#003876] leading-snug"
                        >
                          {p.title}
                        </a>
                        <div className="mt-1 text-sm text-slate-600">
                          {p.authors}
                        </div>
                        <div className="mt-1 text-sm italic text-slate-500">
                          {p.venue}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-white"
          >
            View full publication list →
          </a>
        </div>
      </div>
    </section>
  );
}

function Members() {
  return (
    <section id="members" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Team"
          title="Lab Members"
          description="A multidisciplinary team of clinicians, engineers, and scientists."
        />
        <div className="space-y-16">
          {MEMBERS.map((group) => (
            <div key={group.group}>
              <div className="flex items-baseline gap-4 mb-8">
                <h3 className="text-xl font-bold text-[#003876] whitespace-nowrap">
                  {group.group}
                </h3>
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs text-slate-500 font-mono">
                  {group.people.length}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.people.map((m) => (
                  <div key={m.name} className="text-center group">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-200 group-hover:ring-[#003876] transition-all">
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="font-semibold text-slate-900 text-sm leading-tight">
                        {m.name}
                      </div>
                      {m.nameEn && (
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          {m.nameEn}
                        </div>
                      )}
                      <div className="text-xs text-[#003876] mt-1 font-medium">
                        {m.role}
                      </div>
                      {m.email && (
                        <a
                          href={`mailto:${m.email}`}
                          className="text-[11px] text-slate-500 hover:text-[#003876] mt-1 inline-block break-all"
                        >
                          {m.email}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Updates"
          title="News & Announcements"
          description="Latest activities, awards, and announcements from the lab."
        />
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200" />
          <ul className="space-y-8">
            {NEWS.map((n) => (
              <li key={n.date} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-white border-2 border-[#003876] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#003876]" />
                </div>
                <div className="text-xs font-mono text-slate-500">{n.date}</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {n.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#001f44] text-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white text-[#003876] font-bold flex items-center justify-center">
                B
              </div>
              <div>
                <div className="text-white font-semibold">{LAB_INFO.name}</div>
                <div className="text-xs text-blue-200">
                  {LAB_INFO.affiliation}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-md text-blue-200">
              {LAB_INFO.subVision}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>{LAB_INFO.address}</li>
              <li>
                <a href={`mailto:${LAB_INFO.email}`} className="hover:text-white">
                  {LAB_INFO.email}
                </a>
              </li>
              <li>{LAB_INFO.phone}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <a href="https://www.yonsei.ac.kr" className="hover:text-white">
                  Yonsei University
                </a>
              </li>
              <li>
                <a href="https://sev.severance.healthcare" className="hover:text-white">
                  Severance Hospital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Google Scholar</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">GitHub</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-blue-300">
          <div>© {new Date().getFullYear()} {LAB_INFO.name}. All rights reserved.</div>
          <div>
            Designed with care · Built with React + Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
 * 메인 페이지
 * ============================================================ */

export default function LabHomepage() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Research />
        <Publications />
        <Members />
        <News />
      </main>
      <Footer />
    </div>
  );
}
