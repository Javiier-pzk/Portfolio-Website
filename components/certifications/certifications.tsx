import SectionTitle from "../sectionTitle"
import CertificationCard from "./certificationCard"
import hackwagonCert from "../../public/assets/images/hackwagon-cert.png"
import orbitalCert from "../../public/assets/images/orbital-cert.png"

const CertificationsPage = () => {
    return (
        <section 
            id="certifications"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 xs:px-10 xl:px-4"
        >
            <SectionTitle title="Certifications"/>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
                <CertificationCard 
                    certTitle="Orbital - Apollo 11 (Advanced)" 
                    certUrl="https://credentials.nus.edu.sg/74fdeb08-c7cc-41d6-a601-3d127fdaf7c9"
                    certIssuer="National University of Singapore"
                    certIssueDate="Aug 2021"
                    certImage={orbitalCert}
                />
                 <CertificationCard 
                    certTitle="DS102: Data Analytics With Python" 
                    certUrl="https://learn.hackwagon.com/certificate/ckeje8h4f269811jutoe401tq"
                    certIssuer="Hackwagon Academy"
                    certIssueDate="Aug 2020"
                    certImage={hackwagonCert}
                />
                <CertificationCard 
                    certTitle="DS101: Introduction To Python Programming" 
                    certUrl="https://learn.hackwagon.com/certificate/EGosiLF2SsMYyRGMG"
                    certIssuer="Hackwagon Academy"
                    certIssueDate="May 2020"
                    certImage={hackwagonCert}
                />
            </div>
            
        </section>
    )
}

export default CertificationsPage