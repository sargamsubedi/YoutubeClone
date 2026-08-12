
import { useState } from 'react';
import styles from './filter.module.css'
import useData from '../store/useData';
function Filter()
{

    const [selectedFilter , setSelectedFilter] = useState("All");
    const filterOptions =useData(state=>state.filterOptions)
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