import { Checkbox } from "@/components/Checkbox";
import { Home, Star } from "react-feather";

import Hotel from '../../../assets/hotel.svg'
import Apartament from '../../../assets/apartament.svg'

import styles from "./filter.module.css";
import Image from "next/image";

const stars = [[5,4],[3,2,1]]

export function Filter(){

    function printStars(totalStars: number){
        const starComponent = []    
        for(let i=0; i< totalStars; i++){
            starComponent.push(<Star color={"var(--support-3)"} fill="var(--support-3)"/>)
        }
        return starComponent;
    }

    return(
        <div className={styles.filterBody}>
            <div className={styles.header}>
                <h2>Filtro</h2>   
                <p>Limpar todos os filtros</p>
            </div>

            <hr/>

            <section>
                <p className={styles.sectionTitle}>Preço</p>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <div className={styles.tag} onClick={()=>{return;} }>R$ 10,00 - R$ 390,00</div>
                        <div className={styles.outlinedTag} onClick={()=>{return;} }>R$ 10,00 - R$ 390,00</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.outlinedTag} onClick={()=>{return;} }>R$ 10,00 - R$ 390,00</div>
                        <div className={styles.outlinedTag} onClick={()=>{return;} }>R$ 10,00 - R$ 390,00</div>
                    </div>
                </div>
            </section>

            <hr/>

            <section>
                <p className={styles.sectionTitle}>Tipo de propriedade</p>
                <div className={styles.column}>
                        {stars.map((line)=>{
                            return <div className={styles.row} key={1}>
                               {line.map((numberOfStars)=>{
                                   return (
                                       <div className={styles.outlinedTag} key={numberOfStars}>
                                            {printStars(numberOfStars).map((starComponent)=>{
                                                return  starComponent
                                            })}
                                           <p className={styles.total}>(134)</p>
                                       </div>
                                   )
                                   
                            })}
                            </div>
                        })}
                </div>
            </section>

            <hr/>

            <section>
                <p className={styles.sectionTitle}>Comodidades</p>
                <div className={styles.checkox}>
                    <Checkbox value="Wi-Fi" label="Wi-Fi" />
                    <Checkbox value="Cozinha"  label="Cozinha" />
                    <Checkbox value="Máquina de Lavar" label="Máquina de Lavar" />
                    <Checkbox value="Ar-condicionado" label="Ar-condicionado" />
                    <Checkbox value="Secadora"  label="Secadora" />
                </div>
            </section>

            <hr/>

            <section>
                <p className={styles.sectionTitle}>Tipo de propriedade</p>
                <div className={styles.column}>
                    <div className={styles.outlinedTagActive} onClick={()=>{return;} }><Home/> Casa (346)</div>
                    <div className={styles.outlinedTag} onClick={()=>{return;} }>
                        <Image  src={Hotel} alt='apartament flag'/> 
                        Apartamento (234)
                    </div>
                    <div className={styles.outlinedTag} onClick={()=>{return;} }>
                        <Image  src={Apartament} alt='apartament flag'/>
                        Hotel (23)
                    </div>
                </div>
            </section>

            <hr/>

            <section>
                <p className={styles.sectionTitle}>Review Score</p>
                <div className={styles.score}>
                    <div className={styles.scoreBar}>
                        <div className={styles.scoreActive} style={{width: '90%'}}>9+</div>
                    </div>
                    <p>Excelente (543)</p>
                </div>

                <div className={styles.score}>
                    <div className={styles.scoreBar}>
                        <div className={styles.scoreActive} style={{width: '70%'}}>8+</div>
                    </div>
                    <p>Muito bom (543)</p>
                </div>

                <div className={styles.score}>
                    <div className={styles.scoreBar}>
                        <div className={styles.scoreActive} style={{width: '50%'}}>7+</div>
                    </div>
                    <p>Bom (543)</p>
                </div>
                <div className={styles.score}>
                    <div className={styles.scoreBar}>
                        <div className={styles.scoreActive}>6+</div>
                    </div>
                    <p>Ruim (543)</p>
                </div>
                <div className={styles.score}>
                    <div className={styles.scoreBar}>
                        <div className={styles.scoreActive}></div>
                    </div>
                    <p>Péssimo(14)</p>
                </div>
            </section>
        </div>
    )
}