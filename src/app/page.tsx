import Image from "next/image";
import bird from "../../images/bird.jpg"

export default function Home() {
  return (
    <div>
      <h1 className="text-center pt-5 text-[]24px"> Image in Next JS application</h1>
      <Image
        src={bird}
        alt="bird"
        width={150}
        height={150}
        loading="lazy"
        className="w-[400px] h-[400px] ml-5 rounded-full"
      />
      <Image
        src={require("../../images/butterfly.jpg")}
        alt="butterfly"
        width={100}
        height={100}
        loading="lazy"
        className="w-[400px] h-[400px] ml-5 rounded-full"
      />
    </div>
  );
}
