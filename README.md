# 🏛️ Imdang Museum | 임당유적전시관 클론코딩

![React](https://img.shields.io/badge/-React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge)
![SCSS](https://img.shields.io/badge/-SCSS-FFAACD?logo=sass&style=for-the-badge)

> 임당유적전시관 웹사이트를 클론 코딩한 프로젝트입니다.
>
> 기존 사이트는 Java, PHP 등으로 구현된 전통적인 다중 페이지 구조(MPA) 로 구성되어 있었으나, React / Next.js 기반의 SPA형태로 재구성하여 부드러운 화면 전환과 향상된 퍼포먼스를 구현했습니다.
>
> 또한, 원본 사이트가 한국정보접근성인증평가원에서 선정한 ‘웹 접근성 우수 사이트’ 이기 때문에, 접근성에 최적화된 구조적 마크업과 사용자 친화적 인터페이스를 학습하고자 본 프로젝트를 제작하였습니다.

---

## Overview

- **프로젝트명:** 임당유적전시관 클론코딩
- **개발기간:** 2주
- **개발인원:** 1인 (퍼블리싱 전담)
- **배포 URL:** [https://imdangmuseum.vercel.app](https://imdangmuseum.vercel.app)

---

## Key Features

- **서브페이지 공통 레이아웃 구성 ( 문의 / 서브메뉴 / 서브배너 ) **
- **JSON을 활용한 데이터 매핑**
- **Ant-design 라이브러리를 활용한 컴포넌트 구현**

---

## Tech

| 구분           | 사용 기술      |
| -------------- | -------------- |
| **Frontend**   | `React` `SCSS` |
| **Deployment** | `Vercel`       |
| **Library**    | `Ant-design`   |

---

## Folder

```bash
app
├── components
│   ├── common                    # 공통 UI 요소
│   │   ├── inquiry               # 문의 섹션
│   │   ├── searchBar             # 검색 바
│   │   ├── subBanner             # 서브 상단 배너
│   │   ├── subHeader             # 서브 페이지 타이틀/네비
│   │   ├── subList               # 리스트 페이지 기본 컴포넌트
│   │   ├── subListDetail         # 상세 페이지 컴포넌트
│   │   └── subSidebar            # 서브 좌측 네비
│   │
│   ├── layout
│   │   ├── header
│   │   └── footer
│   │
│   └── main                      # 메인 페이지 섹션
│       ├── Banner.js
│       ├── Exhibition.js
│       ├── Info.js
│       └── Notice.js
│
├── contents                      # 서브 페이지 콘텐츠 모음
│   ├── board
│   ├── childExperience
│   ├── collection
│   ├── facilitiesInfo
│   ├── greeting
│   ├── history
│   ├── organization
│   ├── permanentExhibit
│   ├── qna
│   ├── relicDonation
│   ├── scholarship
│   ├── viewInfo
│   ├── layout.js
│   └── SubLayoutWrapper.js
│
├── styles
│   └── variables.scss            # 색상·폰트·반응형 변수
│
├── globals.scss
├── layout.js
└── page.js                       # 메인 페이지

```

## Getting Started

```bash
npm install
npm run dev
```

---

## License

_Copyright © 2025 Hong Jumi All rights reserved._
