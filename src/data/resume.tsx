import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Java } from "@/components/ui/svgs/java";
import { SpringBoot } from "@/components/ui/svgs/springboot";
import { Spring } from "@/components/ui/svgs/spring";
import { Javascript } from "@/components/ui/svgs/javascript";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Kafka } from "@/components/ui/svgs/kafka";
import { Oracle } from "@/components/ui/svgs/oracle";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Redis } from "@/components/ui/svgs/redis";
import { Elasticsearch } from "@/components/ui/svgs/elasticsearch";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Taeguk Kim",
  initials: "TK",
  url: "https://devqabs.github.io",
  location: "Seoul, Korea",
  locationLink: "https://www.google.com/maps/place/Seoul",
  description:
    "9년차 웹 개발자 · Java/Spring Backend 전문 · MSA 아키텍처 & 대용량 데이터 처리",
  summary:
    "Atos와 더존비즈온에서 9년간 백엔드 개발을 담당하고 있습니다. MSA 아키텍처 설계부터 Kafka 기반 대용량 데이터 처리(일 2억 5천만 건), EMR 헬스케어 플랫폼 구축, 필리핀 국세청 조세 시스템 구축까지 다양한 프로젝트를 팀장으로 리드했습니다. TDD와 코드 리뷰를 통한 코드 품질 개선을 지향하며, 항상 프로젝트에 자부심을 가지고 책임감 있게 개발합니다.\n\n**🎖 자격증**\n\n- [AWS Certified Solutions Architect – Associate](https://www.credly.com/badges/0926a6dc-0c6b-49d9-b44a-c088a6459dfe/public_url)\n- [Certified Kubernetes Administrator (CKA)](https://www.credly.com/badges/9eca1576-16bb-4b4a-bcf7-04f8a29c52b9/public_url)",
  avatarUrl: "/me.png",
  skills: [
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: SpringBoot },
    { name: "Spring", icon: Spring },
    { name: "JavaScript", icon: Javascript },
    { name: "React", icon: ReactLight },
    { name: "Kafka", icon: Kafka },
    { name: "Oracle", icon: Oracle },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Redis", icon: Redis },
    { name: "Elasticsearch", icon: Elasticsearch },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "devqabs@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/devqabs",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/taeguk-kim-619283170/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Blog: {
        name: "Blog",
        url: "https://always-intern.tistory.com/",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:devqabs@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "위하고 헬스케어 (Wehago Healthcare)",
      href: "https://www.wehagoh.com/",
      badges: ["팀장", "선임"],
      location: "더존비즈온 · Seoul",
      title: "팀장 / Backend Senior Engineer",
      logoUrl: "",
      start: "Jul 2023",
      end: undefined,
      description:
        "• MSA 아키텍처 설계 및 구축\n• Kafka CDC & Apache Flink 기반 실시간 데이터 집계\n• Elasticsearch 기반 검색 및 오류 수집 시스템 구현\n• Backend 공통 기능 및 프로세스 개발 총괄\n• Agile sprint 방식으로 개발 업무 진행\n• TDD 주도 개발 및 코드 리뷰로 서비스 코드 품질 개선 주도\n• EMR 도메인 전반 이해 및 적용",
    },
    {
      company: "BIR Tax Agent System",
      href: "https://eis.bir.gov.ph/#/main",
      badges: ["팀장", "주임"],
      location: "더존비즈온 · Philippines",
      title: "팀장 / Backend Engineer",
      logoUrl: "",
      start: "Jan 2021",
      end: "Jun 2023",
      description:
        "• 필리핀 국세청(BIR) 조세 프로젝트 구축\n• MSA 아키텍처 구축 (API Gateway, Nexus, Redis 등)\n• 필리핀 대기업 조세 수집용 Open API 및 Jar 파일 배포\n• Kafka 기반 대규모 데이터 처리 시스템 구축 (평균 일 2억 5천만 건)\n• 글로벌 개발자와 영어로 의사소통\n• 조세 비즈니스 도메인 이해",
    },
    {
      company: "위하고 할일 (Wehago)",
      href: "https://www.wehago.com",
      badges: ["팀원", "주임"],
      location: "더존비즈온 · Seoul",
      title: "Backend Engineer",
      logoUrl: "",
      start: "Jun 2020",
      end: "Dec 2020",
      description:
        "• MSA 기반 할일 서비스 개발 및 유지보수\n• React, Spring, PostgreSQL 기술 스택 활용\n• MSA 아키텍처 전반 학습 및 적용\n• 서비스 성능 개선",
    },
    {
      company: "현대종합특수강 MES/SCM",
      href: "https://www.douzone.com",
      badges: ["팀원", "대리"],
      location: "더존비즈온 · Pohang / China",
      title: "Software Engineer",
      logoUrl: "",
      start: "Apr 2017",
      end: "Jan 2020",
      description:
        "• 현대종합특수강 SCM(포항) 및 MES(중국) 품질 시스템 구축 및 유지보수\n• Java 1.6, Oracle, Xplatform 사용\n• Procedure 및 Function 중심으로 개발 업무 수행\n• 제조업 비즈니스 도메인 이해",
    },
  ],
  education: [
    {
      school: "더존비즈온",
      href: "https://www.douzone.com",
      degree: "9년 근속 · Backend Software Engineer",
      logoUrl: "",
      start: "2017",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "위하고 헬스케어 플랫폼",
      href: "https://www.wehagoh.com/",
      dates: "2023.07 ~ 현재",
      active: true,
      description:
        "더존비즈온의 EMR(전자의무기록) 기반 헬스케어 플랫폼.\n\n- MSA 아키텍처 설계 및 구축\n- Kafka CDC & Apache Flink 활용 실시간 데이터 집계\n- Elasticsearch 기반 검색 및 오류 수집 시스템 구현\n- 팀장으로서 TDD 문화 도입 및 Agile sprint 방식 주도",
      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Apache Flink",
        "Elasticsearch",
        "Redis",
        "PostgreSQL",
        "Docker",
        "MSA",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.wehagoh.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "BIR Tax Agent System",
      href: "https://eis.bir.gov.ph/#/main",
      dates: "2021.01 ~ 2023.06",
      active: false,
      description:
        "필리핀 국세청(Bureau of Internal Revenue) 전자세금계산서 발행 시스템.\n\n- MSA 아키텍처 구축 (API Gateway, Nexus, Redis)\n- Kafka 기반으로 **일 평균 2억 5천만 건** 데이터 처리\n- 필리핀 대기업 대상 Open API 및 SDK 배포\n- 글로벌 팀과 영문으로 협업",
      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Oracle",
        "Redis",
        "API Gateway",
        "MSA",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://eis.bir.gov.ph/#/main",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "위하고 할일 서비스",
      href: "https://www.wehago.com",
      dates: "2020.06 ~ 2020.12",
      active: false,
      description:
        "더존비즈온 그룹웨어 플랫폼 '위하고' 내 할일 관리 서비스.\n\n- MSA 기반 마이크로서비스 개발 및 유지보수\n- React + Spring + PostgreSQL 풀스택 개발\n- 서비스 성능 개선 및 안정화",
      technologies: ["Java", "Spring", "React", "PostgreSQL", "MSA"],
      links: [
        {
          type: "Website",
          href: "https://www.wehago.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "현대종합특수강 MES/SCM",
      href: "https://www.douzone.com",
      dates: "2017.04 ~ 2020.01",
      active: false,
      description:
        "현대종합특수강의 포항 SCM 및 중국 공장 MES 품질 시스템 구축.\n\n- Java 기반 제조 실행 시스템 개발\n- Oracle Procedure / Function 중심 데이터 처리 로직 구현\n- 제조업 비즈니스 도메인 이해",
      technologies: ["Java", "Oracle", "Xplatform", "SCM", "MES"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
