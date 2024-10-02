import { useEffect } from "react";

type FooterProps = {
  onLoaded: () => void; // Define the type for onLoaded
};

const Footer: React.FC<FooterProps> = ({ onLoaded }) => {
  useEffect(() => {
    // Simulate footer being fully loaded
    onLoaded();
  }, [onLoaded]);
  return (
    <footer className="flex gap-4 justify-between tracking-[1.5px] container__padding uppercase container__padding__y z-10">
      <div className="flex items-end gap-1">
        <img
          src="/assets/Copyright.svg"
          className="h-[4px] lg:h-[6px] 3xl:h-[8px]"
          alt=""
        />
        <p className="text-[4px] lg:text-[6px] 3xl:text-[8px] leading-[1] color-white">
          2024 ZIMOJI | ZIMO GROUP LIMITED. ALL RIGHTS RESERVED.
        </p>
      </div>
      <a href="https://zimogroup.org" target="_blank">
        <img
          className="h-[30.4px] lg:h-[34px] 3xl:h-[57px] w-[89px] lg:w-[100px] 3xl:w-[162px]"
          src="/assets/ZIMO OFFICIAL LICENSED.svg"
          alt="zimo group"
        />
      </a>
    </footer>
  );
}
export default Footer;
