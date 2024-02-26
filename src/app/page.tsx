'use client'
import StoreProvider from "./StoreProvider";
import Pagination from "./components/pagination";
import TicketsList from "./components/ticketList";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <StoreProvider>
        <TicketsList/>
        <Pagination/>
      </StoreProvider>
    </main>
  );
}
