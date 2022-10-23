import { Circle, Trash } from "phosphor-react";
import styles from './ListTask.module.css'

import imgCheckCicle from '../assets/check.svg'

interface Content {
   content: string;
   isComplete: boolean; 
   OnDelete: (Task: string) => void;
   onUpdate: (Task: string) => void;
}

export function ListTask({content, isComplete, OnDelete, onUpdate}:Content){

    let contentTask

    function HandleDelete(){
        OnDelete(content)
    }

    function HandleConcluded(){
        onUpdate(content)
    }

    if (isComplete === true){
        contentTask = <div className={styles.check}> 
                        <img src={imgCheckCicle} alt="Check" onClick={HandleConcluded} />
                      </div>
    }else{
        contentTask = <div> 
                        <Circle 
                            size={24} 
                            onClick={HandleConcluded}
                        />
                       </div>
    }

    return (
        
        <div className={styles.list}>
            {contentTask}
            
            {isComplete === false?(
                <p>{content}</p>
            ):(
                <p className={styles.complete}>{content}</p>
            )}
            
            <div className={styles.delete} onClick={HandleDelete}>
                <Trash size={18}/>
            </div>
        </div>
    )
}