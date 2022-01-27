import React, {useEffect, useState} from 'react';
import styles from './Clock.module.scss'

type ClockPropsType = {}
const getTime = (num: number) => num < 10 ? '0' + num : num

export const AnalogClock = (props: ClockPropsType) => {

    const foo = () => {
        return Number(date.getSeconds())
    }

    const [date, setDate] = useState<Date>(new Date())
    const [sec, setSec] = useState(foo())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
            setSec(sec => sec + 1)
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])

    const deg = 6

    const hoursString = getTime(date.getHours() * 30)
    const minutesString = getTime(date.getMinutes() * deg)
    const secondsString = getTime(sec * deg)

    return (
        <div className={styles.clockWrapper}>
            <div className={styles.hour}>
                <div className={styles.hours}
                     style={{transform: `rotate(${+hoursString + (+minutesString / 12)}deg)`}}>{}</div>
            </div>
            <div className={styles.minute}>
                <div className={styles.minutes} style={{transform: `rotate(${+minutesString}deg)`}}>{}</div>
            </div>
            <div className={styles.second}>
                <div className={styles.seconds} style={{transform: `rotate(${+secondsString}deg)`}}>{}</div>
            </div>
        </div>
    )
};
