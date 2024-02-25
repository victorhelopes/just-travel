'use client'
import StoreProvider from "./StoreProvider";
import TicketsList from "./components/ticketList";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <StoreProvider>
        <TicketsList/>
      </StoreProvider>
    </main>
  );
}
