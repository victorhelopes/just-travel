'use client'
import StoreProvider from "./StoreProvider";

import { Filter } from "./components/filter";
import Pagination from "./components/pagination";
import SearchBar from "./components/searchBar";
import TicketsList from "./components/ticketList";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <StoreProvider>
        <SearchBar/>
      <div className={styles.body}>
        <Filter/>
        <div className={styles.ticketList}>
          <TicketsList/>
          <Pagination/>
        </div>
      </div>
      </StoreProvider>
    </main>
  );
}
