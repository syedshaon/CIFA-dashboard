// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';
import SmallButton from './Buttons/SmallButton';
import { Stack } from 'react-bootstrap';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="border mx-auto    border-primary  rounded-3 mt-auto mb-2" style={{width:"224px", borderWidth:"1px", padding:"2px" }}  >
     <Stack className='    rounded-3 flex flex-row ' style={{width:"218px"}}>
      <SmallButton     onClick={()=>setTheme("light")} variant={theme==="light"?"primary":"link"}>
        <svg width="14" height="14" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.5 13.5C7.30653 13.5 6.16193 13.0259 5.31802 12.182C4.47411 11.3381 4 10.1935 4 9C4 7.80653 4.47411 6.66193 5.31802 5.81802C6.16193 4.97411 7.30653 4.5 8.5 4.5C9.69347 4.5 10.8381 4.97411 11.682 5.81802C12.5259 6.66193 13 7.80653 13 9C13 10.1935 12.5259 11.3381 11.682 12.182C10.8381 13.0259 9.69347 13.5 8.5 13.5ZM7.75 0.75H9.25V3H7.75V0.75ZM7.75 15H9.25V17.25H7.75V15ZM2.13625 3.69675L3.19675 2.63625L4.7875 4.227L3.727 5.2875L2.13625 3.6975V3.69675ZM12.2125 13.773L13.273 12.7125L14.8638 14.3032L13.8032 15.3638L12.2125 13.773ZM13.8032 2.6355L14.8638 3.69675L13.273 5.2875L12.2125 4.227L13.8032 2.63625V2.6355ZM3.727 12.7125L4.7875 13.773L3.19675 15.3638L2.13625 14.3032L3.727 12.7125ZM16.75 8.25V9.75H14.5V8.25H16.75ZM2.5 8.25V9.75H0.25V8.25H2.5Z"
          fill={theme==="light"?"white":"white"}
        />
      </svg> <span className=" ms-2 text-white"> Light</span></SmallButton>
      <SmallButton   onClick={()=>setTheme("dark")} variant={theme==="dark"?"primary":"light"}>
          <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4.25C5.99985 5.29298 6.31035 6.31237 6.89192 7.17816C7.47348 8.04395 8.29975 8.7169 9.26533 9.11118C10.2309 9.50546 11.2921 9.6032 12.3134 9.39194C13.3348 9.18068 14.2701 8.66999 15 7.925V8C15 12.1423 11.6423 15.5 7.5 15.5C3.35775 15.5 0 12.1423 0 8C0 3.85775 3.35775 0.5 7.5 0.5H7.575C7.07553 0.988344 6.67886 1.57172 6.40836 2.21576C6.13786 2.8598 5.99902 3.55146 6 4.25ZM1.5 8C1.49945 9.33873 1.94665 10.6392 2.77042 11.6945C3.59419 12.7497 4.74723 13.4992 6.04606 13.8236C7.34489 14.148 8.71491 14.0287 9.93813 13.4847C11.1614 12.9407 12.1675 12.0033 12.7965 10.8215C11.6771 11.0852 10.5088 11.0586 9.40262 10.744C8.29639 10.4295 7.28888 9.83756 6.47566 9.02434C5.66244 8.21112 5.07048 7.20361 4.75596 6.09738C4.44144 4.99116 4.41477 3.82292 4.6785 2.7035C3.71818 3.2151 2.91509 3.97825 2.35519 4.91123C1.7953 5.84422 1.49968 6.91191 1.5 8Z" fill={theme==="light"?"#5E6877":"white"}   />
          </svg> 
          <span className=" ms-2"> Dark</span>
 </SmallButton>
    </Stack>
    </div>
  );
};

export default ThemeToggle;
