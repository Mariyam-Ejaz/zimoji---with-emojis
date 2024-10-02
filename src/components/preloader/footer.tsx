import Copyrights from "../assets/copyrights";
import ZimoIcon from "../assets/zimo-icon";
import { useTheme } from "../theme/theme-context";

/* eslint-disable @next/next/no-img-element */
function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="flex gap-4 justify-between tracking-[1.5px] container__padding uppercase container__padding__y z-10">
      <div className="flex items-end gap-1">
        <Copyrights fill={theme === 'dark' ? 'var(--text-color)' : 'var(--text-color)'}/>
        <p className="text-[4px] lg:text-[6px] 3xl:text-[8px] leading-[1] color-white">
          2024 ZIMOJI | ZIMO GROUP LIMITED. ALL RIGHTS RESERVED.
        </p>
      </div>
      <a href="https://zimogroup.org" target="_blank">
        <ZimoIcon/>
      </a>
    </footer>
  );
}
export default Footer;
