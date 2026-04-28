import React, { useState } from "react";

/* ============================================================
 * 데이터 영역 — 이 부분만 수정하면 페이지 내용이 업데이트됩니다.
 * ============================================================ */

const LAB_INFO = {
  name: "MIND",
  shortName: "MIND",
  nameFull: "Molecular Imaging in Neoplasia & Neurodegeneration Discovery Laboratory",
  logo: import.meta.env.BASE_URL + "logo.png",
  affiliation: "Yonsei University College of Medicine · Severance Hospital",
  address: "50-1 Yonsei-ro, Seodaemun-gu, Seoul 03722, Republic of Korea",
  email: "gayeonkim@yuhs.ac",
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

/* 논문 데이터: 최신 논문이 위쪽 (배열 첫 항목 = No.1 = 가장 최근).
 * link 필드에 PubMed/DOI URL 채워넣으면 클릭 가능한 링크로 표시됩니다. */
const PUBLICATIONS = [
  { title: "Centiloid values from deep learning-based CT parcellation: a valid alternative to FreeSurfer", venue: "Alzheimer's Res. Ther.", link: "" },
  { title: "Striatal dopamine transporter uptake predicts neuronal hypometabolism and visuospatial function in Parkinson's disease", venue: "Eur. J. Nucl. Med. Mol. Imaging", link: "" },
  { title: "Automated quantification of brain PET in PET/CT using deep learning-based CT-to-MR translation: a feasibility study", venue: "Eur. J. Nucl. Med. Mol. Imaging", link: "" },
  { title: "GAN-based Denoising for Scan Time Reduction and Motion Correction of 18F FP-CIT PET/CT: A Multicenter External Validation Study", venue: "Clin. Nucl. Med.", link: "" },
  { title: "Deep Learning–Based Precontrast CT Parcellation for MRI-Free Brain Amyloid PET Quantification", venue: "Clin. Nucl. Med.", link: "" },
  { title: "A Neuroimmune-Oncology Microphysiological Analysis Platform (NEO-MAP) for Evaluating Astrocytic Scar Formation and Microgliosis in Glioblastoma Microenvironment", venue: "Adv. Healthc. Mater.", link: "" },
  { title: "From SUV Ratio to Fill States: Advancing PET Quantification of Alzheimer Disease through Spatial Extent", venue: "Radiology", link: "" },
  { title: "Cross-Modality Image Translation From Brain 18F-FDG PET/CT Images to Fluid-Attenuated Inversion Recovery Images Using the CypixGAN Framework", venue: "Clin. Nucl. Med.", link: "" },
  { title: "11C-acetate PET/CT for reactive astrogliosis outperforms 11C-methionine PET/CT in glioma classification and survival prediction", venue: "Clin. Nucl. Med.", link: "" },
  { title: "Recent Update on PET/CT Radiotracers for Imaging Cerebral Glioma", venue: "Nucl. Med. Mol. Imaging", link: "" },
  { title: "Are the Nuclear Neuro-Imaging Biomarkers Reliable?", venue: "Nucl. Med. Mol. Imaging", link: "" },
  { title: "A Key Mediator and Imaging Target in Alzheimer's Disease: Unlocking the Role of Reactive Astrogliosis Through MAOB", venue: "Nucl. Med. Mol. Imaging", link: "" },
  { title: "Distinct changes in brain metabolism in patients with dementia and hearing loss", venue: "Brain Behav.", link: "" },
  { title: "Visualizing Cancer-Originating Acetate Uptake Through MCT1 in Reactive Astrocytes in the Glioblastoma Tumor Microenvironment", venue: "Neuro-Oncology", link: "" },
  { title: "Astrocytic scar restricting glioblastoma via glutamate-MAO-B activity in glioblastoma-microglia assembloid", venue: "Biomater. Res.", link: "" },
  { title: "Visualizing reactive astrocyte-neuron interaction in Alzheimer's disease using 11C-acetate and 18F-FDG", venue: "Brain", link: "" },
  { title: "Interrelation of striatal dopamine, brain metabolism and cognition in dementia with Lewy bodies", venue: "Brain", link: "" },
  { title: "PET/CT for Brain Amyloid: A Feasibility Study for Scan Time Reduction by Deep Learning", venue: "Clin. Nucl. Med.", link: "" },
  { title: "11C-acetate PET/CT detects reactive astrogliosis helping glioma classification", venue: "Clin. Nucl. Med.", link: "" },
  { title: "Segmentation of white matter hyperintensities on 18F-FDG PET/CT images with a generative adversarial network", venue: "Eur. J. Nucl. Med. Mol. Imaging", link: "" },
  { title: "Deep learning-based amyloid PET positivity classification model in the Alzheimer's disease continuum by using 2-[18F]FDG PET", venue: "EJNMMI Res.", link: "" },
  { title: "Postganglionic sudomotor dysfunction and brain glucose hypometabolism in patients with multiple system atrophy", venue: "J. Parkinsons Dis.", link: "" },
  { title: "Relationship between Hearing Loss and Dementia Differs According to the Underlying Mechanism", venue: "J. Clin. Neurol.", link: "" },
  { title: "Slice-selective learning for Alzheimer's disease classification using a generative adversarial network: a feasibility study of external validation", venue: "Eur. J. Nucl. Med. Mol. Imaging", link: "" },
  { title: "Multi-slice representational learning of convolutional neural network for Alzheimer's disease classification using positron emission tomography", venue: "BioMed. Eng. OnLine", link: "" },
  { title: "Semantic Segmentation of White Matter in FDG-PET using Generative Adversarial Network", venue: "J. Digit. Imaging", link: "" },
  { title: "Clinical and Striatal Dopamine Transporter Predictors of Mild Behavioral Impairment in Drug-Naive Parkinson Disease", venue: "Clin. Nucl. Med.", link: "" },
  { title: "Association of the Non-Motor Burden with Patterns of Striatal Dopamine Loss in de novo Parkinson's Disease", venue: "J. Parkinsons Dis.", link: "" },
  { title: "Elevated miR-16-5p induces somatostatin receptor 2 expression in neuroendocrine tumor cells", venue: "PLOS ONE", link: "" },
  { title: "Dysautonomia Is Linked to Striatal Dopamine Deficits and Regional Cerebral Perfusion in Early Parkinson Disease", venue: "Clin. Nucl. Med.", link: "" },
  { title: "Glucose Loading Enhances the Value of 18F-FDG PET/CT for the Characterization and Delineation of Cerebral Gliomas", venue: "Cancers (Basel)", link: "" },
  { title: "Dopaminergic depletion, β-amyloid burden, and cognition in Lewy body disease", venue: "Neurology", link: "" },
  { title: "Clinical and striatal dopamine transporter predictors of β-amyloid in dementia with Lewy bodies", venue: "Neurology", link: "" },
  { title: "Slice-Consistent 3D Volumetric Brain CT-to-MRI Translation with 2D Brownian Bridge Diffusion Model", venue: "MICCAI 2024", link: "" },
];

/* 특허 데이터: 데이터가 모이면 항목 추가 */
const PATENTS = [
  // { title: "...", number: "...", year: 2025, status: "Granted" },
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
        photo: import.meta.env.BASE_URL + "members/mijinyun_member.png",
        email: "",
        url: "https://medicine.yonsei.ac.kr/medicine/profile-view.do?empNo=eXVoczIwMjBAKUApNMUCjHYvFcRyVa7BDBBLN1WeUDYfW8lJAyhq7OmNQsE%3D",
      },
    ],
  },
  {
    group: "Research Assistant Professor",
    people: [
      {
        name: "이상원",
        nameEn: "Sangwon Lee",
        role: "Research Assistant Professor",
        photo: import.meta.env.BASE_URL + "members/sangwon.png",
        email: "",
        url: "https://medicine.yonsei.ac.kr/medicine/profile-view.do?empNo=eXVoczIwMjBAKUApNMQSi1oWFfhmVaDPDRNLN795J3uI64y4oHOVU1inClE%3D",
        photoPos: "center",
      },
    ],
  },
  {
    group: "Student Researchers",
    people: [
      { name: "김대성", nameEn: "Daesung Kim", role: "MS/PhD Student", photo: import.meta.env.BASE_URL + "members/daesung.png", email: "" },
      { name: "김가연", nameEn: "Gayeon Kim", role: "MS/PhD Student", photo: import.meta.env.BASE_URL + "members/gayeon.png", email: "gayeonkim@yuhs.ac", url: "https://www.notion.so/CV-33dfef5030bc8055ae1dc3500bdc11d9", photoPos: "center" },
      { name: "강희지", nameEn: "Heeji Kang", role: "MS Student", photo: import.meta.env.BASE_URL + "members/heeji.png", email: "" },
      { name: "이상민", nameEn: "Sangmin Lee", role: "Undergraduate Student", photo: import.meta.env.BASE_URL + "members/sangmin.png", email: "" },
      { name: "고현진", nameEn: "Hyunjin Ko", role: "Undergraduate Student", photo: import.meta.env.BASE_URL + "members/hyunjin.jpg", email: "", photoPos: "center" },
    ],
  },
  {
    group: "Researchers",
    people: [
      { name: "이명오", nameEn: "Myeongoh Lee", role: "Researcher", photo: import.meta.env.BASE_URL + "members/myeongoh.png", email: "" },
      { name: "이승준", nameEn: "Seungjun Lee", role: "Researcher", photo: import.meta.env.BASE_URL + "members/seungjun.png", email: "" },
      { name: "장나경", nameEn: "Nakyung Jang", role: "Researcher", photo: import.meta.env.BASE_URL + "members/nakyung.png", email: "", photoPos: "center" },
      { name: "임현경", nameEn: "Hyunkyung Lim", role: "Researcher", photo: import.meta.env.BASE_URL + "members/hyunkyung.png", email: "" },
    ],
  },
];

/* 교수 (PI) 상세 정보 — 사진은 public/members/mijinyun.jpg 등으로 교체 가능 */
const PROFESSOR = {
  name: "윤미진",
  nameEn: "Mijin Yun",
  degrees: "M.D., Ph.D.",
  title: "Professor",
  affiliation: "연세대학교 의과대학 핵의학과",
  affiliationEn: "Department of Nuclear Medicine, Yonsei University College of Medicine",
  photo: import.meta.env.BASE_URL + "members/mijinyun.png",
  url: "https://medicine.yonsei.ac.kr/medicine/profile-view.do?empNo=eXVoczIwMjBAKUApNMUCjHYvFcRyVa7BDBBLN1WeUDYfW8lJAyhq7OmNQsE%3D",

  metrics: {
    papers: 228,
    recentPapers: 54,
  },

  currentPositions: [
    { period: "2026 –", title: "재정경제부 전략경제자문단 바이오 분과위원장" },
    { period: "2024 –", title: "연세대학교 의과대학 도서관장" },
  ],

  pastPositions: [
    { period: "2014 – 2018", title: "세브란스병원 핵의학과 과장 및 주임교수" },
    { period: "역임", title: "세브란스 방사선안전관리의사" },
    { period: "역임", title: "세브란스 융복합센터 부소장" },
    { period: "역임", title: "대한핵의학회 학술/의무/간행이사" },
    { period: "역임", title: "다기관 공동 연구 책임자" },
  ],

  certifications: [
    "영상의학과 전문의",
    "핵의학과 전문의",
    "미국 의사 자격증",
    "미국 핵의학과 전문의",
  ],

  editorialBoards: [
    "Radiology",
    "Clinical Nuclear Medicine",
    "European Radiology",
  ],
};

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

/* 파트너 기관: 로고 클릭 시 외부 사이트로 이동 (연세대학교를 가운데 배치) */
const PARTNERS = [
  {
    name: "Severance Hospital",
    nameKr: "세브란스병원",
    logo: import.meta.env.BASE_URL + "partners/yonsei_sev.jpg",
    url: "https://sev.severance.healthcare/sev/index.do",
  },
  {
    name: "Yonsei University",
    nameKr: "연세대학교",
    logo: import.meta.env.BASE_URL + "partners/yonsei.png",
    url: "https://www.yonsei.ac.kr",
  },
  {
    name: "Yonsei Cancer Center",
    nameKr: "연세대학교 암센터",
    logo: import.meta.env.BASE_URL + "partners/yonsei_cancer.png",
    url: "https://cancer.severance.healthcare/",
  },
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "pi", label: "About PI" },
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
          <img
            src={LAB_INFO.logo}
            alt={LAB_INFO.name}
            className="h-10 w-auto"
          />
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
  const acronym = [
    ["M", "olecular"],
    ["I", "maging"],
    ["N", "eoplasia & Neurodegeneration"],
    ["D", "iscovery Laboratory"],
  ];
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#001428] text-white"
    >
      {/* CSS keyframes for sophisticated motion */}
      <style>{`
        @keyframes mindNode { 0%,100%{r:4;opacity:.85} 50%{r:6.5;opacity:1} }
        @keyframes mindNodeLg { 0%,100%{r:6;opacity:1} 50%{r:10;opacity:1} }
        @keyframes mindFlow { to { stroke-dashoffset: -60 } }
        @keyframes mindBreathe { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:.65;transform:scale(1.01)} }
        @keyframes mindOrbit { to { transform: rotate(360deg) } }
        @keyframes mindOrbitRev { to { transform: rotate(-360deg) } }
        @keyframes mindWave1 { 0%,100%{r:200;opacity:0.25} 100%{r:340;opacity:0} }
        @keyframes mindWave { 0%{r:200;opacity:0.4} 100%{r:380;opacity:0} }
        @keyframes mindParticle { 0%{transform:translateY(0);opacity:.3} 50%{opacity:.7} 100%{transform:translateY(-20px);opacity:0} }
        @keyframes mindFadeIn { from { opacity:0; transform: translateY(8px) } to { opacity:1; transform: translateY(0) } }
        .mind-node-a { animation: mindNode 3.2s ease-in-out infinite; transform-box: fill-box; }
        .mind-node-b { animation: mindNode 2.6s ease-in-out infinite; transform-box: fill-box; animation-delay: -0.5s; }
        .mind-node-c { animation: mindNode 3.6s ease-in-out infinite; transform-box: fill-box; animation-delay: -1.2s; }
        .mind-node-d { animation: mindNode 2.9s ease-in-out infinite; transform-box: fill-box; animation-delay: -0.3s; }
        .mind-node-lg { animation: mindNodeLg 2.8s ease-in-out infinite; transform-box: fill-box; }
        .mind-node-lg-2 { animation: mindNodeLg 3.4s ease-in-out infinite; transform-box: fill-box; animation-delay: -1s; }
        .mind-line { stroke-dasharray: 4 6; animation: mindFlow 5s linear infinite; }
        .mind-line-fast { stroke-dasharray: 4 6; animation: mindFlow 3s linear infinite; }
        .mind-line-slow { stroke-dasharray: 4 6; animation: mindFlow 8s linear infinite; }
        .mind-ring { transform-origin: 400px 400px; transform-box: fill-box; animation: mindOrbit 80s linear infinite; }
        .mind-ring-rev { transform-origin: 400px 400px; transform-box: fill-box; animation: mindOrbitRev 60s linear infinite; }
        .mind-crosshair { transform-origin: 400px 400px; transform-box: fill-box; animation: mindOrbit 30s linear infinite; }
        .mind-brain { animation: mindBreathe 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .mind-wave { transform-origin: 400px 400px; transform-box: fill-box; animation: mindWave 4s ease-out infinite; }
        .mind-wave-2 { transform-origin: 400px 400px; transform-box: fill-box; animation: mindWave 4s ease-out infinite; animation-delay: 1.3s; }
        .mind-wave-3 { transform-origin: 400px 400px; transform-box: fill-box; animation: mindWave 4s ease-out infinite; animation-delay: 2.6s; }
        .mind-particle-a { animation: mindParticle 4s ease-out infinite; }
        .mind-particle-b { animation: mindParticle 5s ease-out infinite; animation-delay: -1.5s; }
        .mind-particle-c { animation: mindParticle 6s ease-out infinite; animation-delay: -3s; }
        .mind-particle-d { animation: mindParticle 4.5s ease-out infinite; animation-delay: -2.2s; }
        .mind-acronym-row { animation: mindFadeIn 0.6s ease-out backwards; }
      `}</style>

      {/* Layer 1: Mesh radial gradient — adds organic, dimensional depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(at 18% 25%, #1f6dbf 0%, transparent 55%),
            radial-gradient(at 80% 30%, #003876 0%, transparent 60%),
            radial-gradient(at 70% 80%, #0a4d8c 0%, transparent 55%),
            radial-gradient(at 25% 90%, #001428 0%, transparent 60%)
          `,
        }}
      />

      {/* Layer 2: Horizontal scan lines — medical imaging slice feel */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(transparent 50%, rgba(255,255,255,1) 50%)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* Layer 4: Floating glow orbs — adds 3D depth */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-blue-400/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* MIND — large brand mark */}
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tight leading-none">
            <span className="inline-block">M</span>
            <span className="inline-block text-blue-300/70 mx-1 md:mx-2">·</span>
            <span className="inline-block">I</span>
            <span className="inline-block text-blue-300/70 mx-1 md:mx-2">·</span>
            <span className="inline-block">N</span>
            <span className="inline-block text-blue-300/70 mx-1 md:mx-2">·</span>
            <span className="inline-block">D</span>
          </h1>

          {/* Acronym reveal */}
          <ul className="mt-10 space-y-2">
            {acronym.map(([letter, rest], i) => (
              <li
                key={letter}
                className="mind-acronym-row flex items-baseline gap-4"
                style={{ animationDelay: `${0.15 + i * 0.12}s` }}
              >
                <span className="text-2xl md:text-3xl font-bold text-white w-7 md:w-9 text-center">
                  {letter}
                </span>
                <span className="text-base md:text-lg text-blue-100 leading-snug">
                  {rest}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-4">
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
          title="Articles & Patents"
          description="Peer-reviewed publications from our lab, ordered by recency."
        />

        <PublicationsTabs />
      </div>
    </section>
  );
}

function PublicationsTabs() {
  const [tab, setTab] = useState("articles");
  const [showAll, setShowAll] = useState(false);

  const articles = PUBLICATIONS;
  const patents = PATENTS;
  const visibleArticles = showAll ? articles : articles.slice(0, 10);

  return (
    <>
      {/* Tab buttons */}
      <div className="flex gap-2 mb-8 border-b border-slate-200">
        <button
          onClick={() => setTab("articles")}
          className={`px-5 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
            tab === "articles"
              ? "border-[#003876] text-[#003876]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Articles <span className="ml-1 text-xs font-mono opacity-60">{articles.length}</span>
        </button>
        <button
          onClick={() => setTab("patents")}
          className={`px-5 py-3 text-sm font-semibold transition-colors border-b-2 -mb-px ${
            tab === "patents"
              ? "border-[#003876] text-[#003876]"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Patents <span className="ml-1 text-xs font-mono opacity-60">{patents.length}</span>
        </button>
      </div>

      {/* Articles tab */}
      {tab === "articles" && (
        <>
          <ol className="divide-y divide-slate-200 border-y border-slate-200">
            {visibleArticles.map((p, i) => {
              const isLink = p.link && p.link !== "#" && p.link !== "";
              const Tag = isLink ? "a" : "div";
              return (
                <li key={i}>
                  <Tag
                    {...(isLink
                      ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`flex gap-5 py-5 group ${
                      isLink ? "hover:bg-blue-50/40 -mx-4 px-4 rounded-md transition-colors" : ""
                    }`}
                  >
                    <div className="font-mono text-sm text-slate-400 w-10 shrink-0 pt-0.5 group-hover:text-[#003876]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 leading-snug group-hover:text-[#003876] transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-sm italic text-slate-500">{p.venue}</p>
                    </div>
                    {isLink && (
                      <span className="text-slate-400 group-hover:text-[#003876] self-center">
                        ↗
                      </span>
                    )}
                  </Tag>
                </li>
              );
            })}
          </ol>

          {articles.length > 10 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 rounded-md border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-white hover:border-[#003876] transition-colors"
              >
                {showAll
                  ? "Show less ↑"
                  : `Show all ${articles.length} articles ↓`}
              </button>
            </div>
          )}
        </>
      )}

      {/* Patents tab */}
      {tab === "patents" && (
        <div>
          {patents.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              <p className="text-base">Patent list will be added soon.</p>
              <p className="mt-2 text-sm">특허 목록은 곧 업데이트될 예정입니다.</p>
            </div>
          ) : (
            <ol className="divide-y divide-slate-200 border-y border-slate-200">
              {patents.map((p, i) => (
                <li key={i} className="py-5 flex gap-5">
                  <div className="font-mono text-sm text-slate-400 w-10 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500">
                      {p.number} · {p.year} · {p.status}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </>
  );
}

function Professor() {
  const p = PROFESSOR;
  return (
    <section id="pi" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Principal Investigator"
          title="About the PI"
        />

        {/* Top: photo + identity + metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          <div className="md:col-span-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-200">
              <img src={p.photo} alt={p.name} className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {p.name}
              <span className="block md:inline text-xl md:text-2xl font-medium text-slate-500 md:ml-3 mt-1 md:mt-0">
                {p.nameEn}, {p.degrees}
              </span>
            </h3>
            <p className="mt-3 text-lg text-[#003876] font-semibold">{p.title}</p>
            <p className="mt-1 text-sm text-slate-700">{p.affiliation}</p>
            <p className="text-sm text-slate-500">{p.affiliationEn}</p>

            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#003876] text-white text-sm font-semibold hover:bg-[#0a4d8c] transition-colors w-fit"
              >
                View Faculty Profile ↗
              </a>
            )}

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="p-5 rounded-lg bg-white border border-slate-200">
                <div className="text-3xl font-bold text-[#003876]">{p.metrics.papers}</div>
                <div className="text-xs text-slate-600 mt-1">SCIE 논문</div>
              </div>
              <div className="p-5 rounded-lg bg-white border border-slate-200">
                <div className="text-3xl font-bold text-[#003876]">{p.metrics.recentPapers}</div>
                <div className="text-xs text-slate-600 mt-1">최근 3년</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: detail sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#003876] mb-5">
              Current Positions · 현직
            </h4>
            <ul className="space-y-3 mb-10">
              {p.currentPositions.map((pos) => (
                <li key={pos.title} className="flex gap-4 text-sm">
                  <span className="font-mono text-[#003876] font-semibold whitespace-nowrap shrink-0 w-24">
                    {pos.period}
                  </span>
                  <span className="text-slate-800">{pos.title}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-5">
              Past Positions · 역임
            </h4>
            <ul className="space-y-3">
              {p.pastPositions.map((pos) => (
                <li key={pos.title} className="flex gap-4 text-sm">
                  <span className="font-mono text-slate-400 whitespace-nowrap shrink-0 w-24">
                    {pos.period}
                  </span>
                  <span className="text-slate-700">{pos.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#003876] mb-5">
              Board Certifications · 전문의 자격
            </h4>
            <ul className="space-y-2 text-sm text-slate-800 mb-10">
              {p.certifications.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="text-[#003876] mt-0.5">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-5">
              Editorial Boards · 편집위원
            </h4>
            <ul className="space-y-2 text-sm text-slate-800">
              {p.editorialBoards.map((b) => (
                <li key={b} className="italic">— {b}</li>
              ))}
            </ul>
          </div>
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
                        style={{ objectPosition: m.photoPos || "top" }}
                      />
                    </div>
                    <div className="mt-4">
                      <div className="font-semibold text-slate-900 text-sm leading-tight">
                        {m.url ? (
                          <a
                            href={m.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#003876] transition-colors"
                          >
                            {m.name} ↗
                          </a>
                        ) : (
                          m.name
                        )}
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
      {/* Partner logo strip — uniform box ensures consistent visual size */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 flex flex-wrap items-center justify-center gap-12 sm:gap-20">
          {PARTNERS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-48 h-20 opacity-80 hover:opacity-100 transition-opacity"
              title={p.nameKr}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-w-full max-h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white p-1.5 flex items-center justify-center">
                <img
                  src={LAB_INFO.logo}
                  alt={LAB_INFO.name}
                  className="max-w-full max-h-full object-contain"
                />
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
            Designed & built by{" "}
            <span className="text-white font-medium">Gayeon Kim</span> · © 2026
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
        <Professor />
        <Members />
        <News />
      </main>
      <Footer />
    </div>
  );
}
