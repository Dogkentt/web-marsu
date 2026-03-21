import Image from "next/image"
import companiesData from "@/shared/data/companies.json"
import styles from "./Companies.module.scss"

const Companies = () => {
    return (
        <section className={styles["companies"]}>
            { companiesData.map((company, i) => (
                <Image className={styles["companies-item"]} key={i} src={company.image} alt={company.name} width={126} height={48} />
            )) }
        </section>
    )
}

export default Companies;