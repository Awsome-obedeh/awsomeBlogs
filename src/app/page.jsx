import Image from "next/image";
import styles from "./page.module.css";
import CardList from "@/components/cardList/CardList";
import Featured from "@/components/featured/Featured";

import Categories from "@/components/categoriesList/categories";
import Menu from "@/components/menu/Menu";

export default  function Home() {

  
  return (
     <div className={styles.container}>
      <Featured/>
       <Categories/>

        <div className={styles.content}>
          <CardList/>
         <Menu/>
        </div>
     </div>
  );
}
