import { useState } from 'react';
import styles from './Filters.module.sass'
import Dropdown from '../dropdown/Dropdown';

const sportOptions = ["Logo Design", "UX Architecture"];
const timeOptions = ["All", "Article", "Case Study"];
const difficultyOptions = ["Youtube", "Vimeo"];
const levelOptions = ["Newest", "Oldest"];

const Filters = ({ contents }: any) => {
    const [sport, setSport] = useState(sportOptions[0]);
    const [time, setTime] = useState(timeOptions[0]);
    const [difficulty, setDifficulty] = useState(difficultyOptions[0]);
    const [level, setLevel] = useState(levelOptions[0]);

    return (
        <div className={styles.hero}>
            <div className={styles.filters}>
                <div className={styles.cell}>
                    <h5 className={styles.label}>TOPIC</h5>
                    <Dropdown
                        className={styles.dropdown}
                        value={sport}
                        setValue={setSport}
                        options={sportOptions}
                    />
                </div>
                <div className={styles.cell}>
                    <h5 className={styles.label}>FORMAT</h5>
                    <Dropdown
                        className={styles.dropdown}
                        value={time}
                        setValue={setTime}
                        options={timeOptions}
                    />
                </div>
                <div className={styles.cell}>
                    <h5 className={styles.label}>PLATFORM</h5>
                    <Dropdown
                        className={styles.dropdown}
                        value={difficulty}
                        setValue={setDifficulty}
                        options={difficultyOptions}
                    />
                </div>
                <div className={styles.cell}>
                    <h5 className={styles.label}>DATE</h5>
                    <Dropdown
                        className={styles.dropdown}
                        value={level}
                        setValue={setLevel}
                        options={levelOptions}
                    />
                </div>
            </div>
        </div>
    )
}

export default Filters