
import { useState } from 'react';
import styles from './filter.module.css'
function Filter()
{

    const [selectedFilter , setSelectedFilter] = useState("All");
    const filterOptions =["All","Comedy","Science","All","Comedy","Science","All","Comedy","Science"]
    return(
        <div className={styles.filterContainer}>

            {
                filterOptions.map(btn=> <div  key={btn} 
                                        className={`${styles.filterButton} ${selectedFilter===btn?styles.selected : ""}`}
                                        onClick={()=>setSelectedFilter(btn)}
                                        >{btn}</div> )
            }
        </div>
    )
}

export default Filter;