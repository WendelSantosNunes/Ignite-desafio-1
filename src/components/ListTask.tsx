import { Circle, Trash } from "phosphor-react";
import styles from './ListTask.module.css'
import ImgTrash from '../assets/trash.svg'

export function ListTask(){
    return (
        <>
            <div className={styles.list}>
                <Circle size={24}/>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <div>
                    <Trash size={18}/>
                </div>
            </div>
        </>
    )
}