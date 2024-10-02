import "/node_modules/flag-icons/css/flag-icons.min.css";
import { RootState } from "@/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

type HeaderProps = {
  onLoaded: () => void; // Define the type for onLoaded
};

const Header: React.FC<HeaderProps> = ({ onLoaded }) => {
  useEffect(() => {
    // Simulate header being fully loaded
    onLoaded();
  }, [onLoaded]);
  const { data } = useSelector((state: RootState) => state.visitor);

  return (
    <header className="flex justify-end gap-x-8 3xl:gap-x-14 container__padding container__padding__y z-50 ">


      {data?.countryCode ? (
        <>
        <img
        src="/assets/Scan Icon ZIMOJI W.svg"
        className="h-[27px] lg:h-[35px] 3xl:h-[50px] fill-black color-black"
        alt=""
      />
      <img
          className="h-[27px] lg:h-[35px] 3xl:h-[50px] w-auto"
          src={data.country.app_icon}
          alt="country"
        />
                </>
      ) : (
        <div className="h-[27px] lg:h-[35px] 3xl:h-[50px]" />
      )}
    </header>
  );
}
export default Header;
