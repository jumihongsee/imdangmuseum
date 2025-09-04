'use client'
import { useState } from 'react'
import Link from 'next/link'
import './header.scss'
import { Menu } from 'antd';


export default function Header({isFixed}){
    const [mainOpen, mainSetOpen] = useState(false);
    const [moOpen, moSetOpen] = useState(false);
    const [moSubOpen, moSetSubOpen] = useState(false);
   


    const items = [
    {
        key: 'sub-main-menu-1',
        label: '전시관 소개',
        children: [
        {
            key: 'g1',
            label: <Link href="/">인사말</Link>,
            type: 'group',
     
        },
        {
            key: 'g2',
            label: <Link href="/">조직</Link>,
            type: 'group',
        },
        {
            key: 'g3',
            label: <Link href="/">연혁</Link>,
            type: 'group',
        },
        {
            key: 'g4',
            label: <Link href="/">박물관 MI</Link>,
            type: 'group',
        },
        ],
    },
    {
        key: 'sub-main-menu-2',
        label: '이용안내',
        children: [
        {
            key: 'g1',
            label: <Link href="/">관람안내</Link>,
            type: 'group',
     
        },
        {
            key: 'g2',
            label: <Link href="/">시설안내</Link>,
            type: 'group',
        },
        {
            key: 'g3',
            label: <Link href="/">찾아오시는길</Link>,
            type: 'group',
        },
   
        ],
    },
     {
        key: 'sub-main-menu-3',
        label: '전시',
        children: [
        {
            key: 'g1',
            label: <Link href="/">상설전시</Link>,
            type: 'group',
     
        },
        {
            key: 'g2',
            label: <Link href="/">특별전시</Link>,
            type: 'group',
        },
        {
            key: 'g3',
            label: <Link href="/">어린이 체험실</Link>,
            type: 'group',
        },
   
        ],
    },
   
    ];


  const onClick = (e) => {
    console.log('click ', e);
  };

    const moHandleToggle =(prev)=>{
        moSetOpen(prev => !prev)
    }

    const moSubHandleToggle = (prev) =>{
        moSetSubOpen(prev => !prev)
    }

    console.log(isFixed)

    return(
        <header id='header' className={`header ${isFixed ? 'fixed' : ''}`}>
            <div className="logo">
                <a href="/" title="임당유적전시관 메인으로">임당유적전시관</a>
            </div>
            <nav className='gnb'>
                <div className="gnb-menu"
                    onMouseEnter={()=> mainSetOpen(true)}
                    onMouseLeave={()=> mainSetOpen(false)}
                    onFocus={(e)=>{
                        mainSetOpen(true)
                    }}
                    onBlur={(e)=>{
                        if(!e.currentTarget.contains(e.relatedTarget)){
                            mainSetOpen(false)
                        }
                    }}
                >
                    <ul>
                        <li>
                            <a href="" aria-haspopup="true" aria-expanded={mainOpen ? "true" : "false"}>
                                <span>전시관 소개</span>
                            </a>
                            <div className={`gnb-sub ${mainOpen ? "active" : ""}`} >
                                <ul>
                                    <li>
                                        <a href="">인사말</a>
                                    </li>
                                    <li>
                                        <a href="">조직</a>
                                    </li>
                                    <li>
                                        <a href="">연혁</a>
                                    </li>
                                    <li>
                                        <a href="">박물관 MI</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="" aria-haspopup="true" aria-expanded={mainOpen ? "true" : "false"}>
                                <span>이용안내</span>
                            </a>
                            <div className={`gnb-sub ${mainOpen ? "active" : ""}`} >
                                <ul>
                                    <li>
                                        <a href="">관람안내</a>
                                    </li>
                                    <li>
                                        <a href="">시설안내</a>
                                    </li>
                                    <li>
                                        <a href="">찾아오시는길</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="" aria-haspopup="true" aria-expanded={mainOpen ? "true" : "false"}>
                                <span>전시</span>
                            </a>
                            <div className={`gnb-sub ${mainOpen ? "active" : ""}`} >
                                <ul>
                                    <li>
                                        <a href="">상설전시</a>
                                    </li>
                                    <li>
                                        <a href="">특별전시</a>
                                    </li>
                                    <li>
                                        <a href="">어린이 체험실</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="" aria-haspopup="true" aria-expanded={mainOpen ? "true" : "false"}>
                                <span>교육/행사</span>
                            </a>
                             <div className={`gnb-sub ${mainOpen ? "active" : ""}`} >
                                <ul>
                                    <li>
                                        <a href="">박물관교육</a>
                                    </li>
                                    <li>
                                        <a href="">문화행사</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="" aria-haspopup="true" aria-expanded={mainOpen ? "true" : "false"}>
                                <span>정보마당</span>
                            </a>
                            <div className={`gnb-sub ${mainOpen ? "active" : ""}`} >
                                <ul>
                                    <li>
                                        <a href="">소장품</a>
                                    </li>
                                    <li>
                                        <a href="">유물기증</a>
                                    </li>
                                    <li>
                                        <a href="">학술자료</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="" aria-haspopup="true" aria-expanded={mainOpen ? "true" : "false"}>
                                <span>소식/참여</span>
                            </a>
                            <div className={`gnb-sub ${mainOpen ? "active" : ""}`} >
                                <ul>
                                    <li>
                                        <a href="">공지사항</a>
                                    </li>
                                    <li>
                                        <a href="">자주하는 질문</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
           
                    </ul>
                </div>
                <div className={`gnb-back ${mainOpen ? "active" : ""}`}></div>
            </nav>
            <div className="top-util">
                <ul>
                    <li className='util-menu-1'>
                        <a href="https://www.grandculture.net/gyeongsan" target="_blank" title="새창으로 이동 디지털경산문화대전">디지털경산문화대전</a>
                    </li>
                    <li className='util-menu-2'>
                        <a href="/imdangmuseum/main/contents/location">오시는 길</a>
                    </li>
                </ul>
            </div>
            <button className={`nav-toggle ${moOpen ? "active": ""}`} title='전체메뉴 열기' onClick={moHandleToggle}>
                <div className="icon-menu">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </button>
            <div className={`menu-mo ${moOpen ? "active" : ""}`}>
                    <div className="menu-mo-header">
                        <div className="mo-logo">
                            <a href="/" title="임당유적전시관 메인으로">임당유적전시관</a>
                        </div>
                        <div className="top-util">
                            <ul>
                                <li className='util-menu-1'>
                                    <a href="https://www.grandculture.net/gyeongsan" target="_blank" title="새창으로 이동 디지털경산문화대전">디지털경산문화대전</a>
                                </li>
                                <li className='util-menu-2'>
                                    <a href="/imdangmuseum/main/contents/location">오시는 길</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                        <Menu
                            onClick={onClick}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            items={items}
                        />

            </div>
            <div className={`menu-mo-back ${moOpen ? "active" : ""}`}></div>
        </header>
    )
}