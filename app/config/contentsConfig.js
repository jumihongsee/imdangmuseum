const menuNav1 = [
  { href: "/contents/greeting", title: "인사말" },
  { href: "/contents/organization", title: "조직" },
  { href: "/contents/history", title: "연혁" },
];

const menuNav2 = [
  { href: "/contents/viewInfo", title: "관람안내" },
  { href: "/contents/facilitiesInfo", title: "시설안내" },
];

const menuNav3 = [
  { href: "/contents/permanentExhibit", title: "상설전시" },
  { href: "/contents/childExperience", title: "어린이 체험실" },
];

const menuNav4 = [
  { href: "/contents/collection", title: "소장품" },
  { href: "/contents/relicDonation", title: "유물기증" },
  { href: "/contents/scholarship", title: "학술자료" },
];

const menuNav5 = [
  { href: "/contents/board", title: "공지사항" },
  { href: "/contents/qna", title: "자주하는 질문" },
];

const menuBanner1 = {
  title: "전시관 소개",
  img: "sub_banner_greeting.jpg",
};

const menuBanner2 = {
  title: "이용안내",
  img: "sub_banner_info.jpg",
};

const menuBanner3 = {
  title: "전시",
  img: "sub_banner_exhibition.jpg",
};

const menuBanner4 = {
  title: "정보마당",
  img: "sub_banner_resources.jpg",
};

const menuBanner5 = {
  title: "소식/참여",
  img: "sub_banner_notice.jpg",
};

export const contentsConfig = {
  "/contents/greeting": {
    banner: {
      label: "인사말",
      ...menuBanner1,
    },
    menu: menuNav1,
  },
  "/contents/organization": {
    banner: {
      label: "조직",
      ...menuBanner1,
    },
    menu: menuNav1,
  },
  "/contents/history": {
    banner: {
      label: "연혁",
      ...menuBanner1,
    },
    menu: menuNav1,
  },
  "/contents/viewInfo": {
    banner: {
      label: "관람안내",
      ...menuBanner2,
    },
    menu: menuNav2,
  },
  "/contents/facilitiesInfo": {
    banner: {
      label: "시설안내",
      ...menuBanner2,
    },
    menu: menuNav2,
  },
  "/contents/permanentExhibit": {
    banner: {
      label: "상설전시",
      ...menuBanner3,
    },
    menu: menuNav3,
  },
  "/contents/childExperience": {
    banner: {
      label: "어린이 체험실",
      ...menuBanner3,
    },
    menu: menuNav3,
  },
  "/contents/collection": {
    banner: {
      label: "소장품",
      ...menuBanner4,
    },
    menu: menuNav4,
  },
  "/contents/relicDonation": {
    banner: {
      label: "유물기증",
      ...menuBanner4,
    },
    menu: menuNav4,
  },
  "/contents/scholarship": {
    banner: {
      label: "학술자료",
      ...menuBanner4,
    },
    menu: menuNav4,
  },
  "/contents/board": {
    banner: {
      label: "공지사항",
      ...menuBanner5,
    },
    menu: menuNav5,
  },
  "/contents/qna": {
    banner: {
      label: "자주하는 질문",
      ...menuBanner5,
    },
    menu: menuNav5,
  },
};

export const mainMenu = [
  {
    label: "전시관 소개",
    menu: menuNav1,
  },
  {
    label: "이용안내",
    menu: menuNav2,
  },
  {
    label: "전시",
    menu: menuNav3,
  },
  {
    label: "정보마당",
    menu: menuNav4,
  },
  {
    label: "소식/참여",
    menu: menuNav5,
  },
];
