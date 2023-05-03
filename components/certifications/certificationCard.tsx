import Image, { StaticImageData } from "next/image";
import { TbFileCertificate } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  certTitle: string;
  certUrl: string;
  certIssuer: string;
  certIssueDate: string;
  certImage: StaticImageData;
}

const CertificationCard = ({
  certTitle,
  certUrl,
  certIssuer,
  certIssueDate,
  certImage,
}: Props) => {
  return (
    <a href={certUrl} target="_blank">
      <div className="w-full h-80 rounded-lg bg-hoverColor flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      
        <h2 className="px-7 pt-7 text-xl font-titleFont font-semibold tracking-wide group-hover:text-textYellow">
          {certTitle}
        </h2>
        <div className="w-full h-100 overflow-hidden">
          <Image src={certImage} alt="cert image" object-fit="cover" />
        </div>
        <div className="px-7 pb-7 text-sm text-textDark">
          <p>{certIssuer}</p>
          <p>Issued {certIssueDate}</p>
        </div>
      </div>
    </a>
  );
};

export default CertificationCard;
