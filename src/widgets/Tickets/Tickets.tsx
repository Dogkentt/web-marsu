import { HeaderSection } from "@/shared/ui/HeaderSection/HeaderSection";
import { TicketCard } from "@/shared/ui/TicketCard/TicketCard";

import styles from "./Tickets.module.scss"
import ticketsData from "@/shared/data/tickets_items.json";

const Tickets = () => {
    return (
        <section className="tickets" id="tickets">
            <HeaderSection title="Ticket Options" />

            <div className={styles["tickets__cards"]}>
                {ticketsData.map(ticket => (
                    <TicketCard
                        key={ticket.id}
                        title={ticket.title}
                        text={ticket.text}
                        price={ticket.price}
                        appearance={ticket.appearance}
                    />
                ))}
            </div>
        </section>
    )
}

export default Tickets;