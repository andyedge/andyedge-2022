import React, { useState, FC } from 'react'
import cn from 'classnames'
import OutsideClickHandler from 'react-outside-click-handler'
import styles from './Dropdown.module.sass'
import Icon from '../../icon/Icon'

export interface SetFilterProps {
    index: number
    value: number
}

declare interface DropdownProps {
    filterIndex: number
    value: string
    setValue: (arg1: SetFilterProps) => void
    options: string[]
}

const Dropdown: FC<DropdownProps> = ({ filterIndex, value, setValue, options } : DropdownProps) => {
    const [visible, setVisible] = useState(false)

    const handleClick = (value: any) => {
        setValue(value)
        setVisible(false)
    }

    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div className={cn(styles.dropdown, { [styles.active]: visible })}>
                <div className={styles.head} onClick={() => setVisible(!visible)}>
                    <div className={styles.selection}>{value}</div>
                    <div className={styles.arrow}>
                        <Icon name='arrow-bottom' size={10} />
                    </div>
                </div>
                <div className={styles.body}>
                    {options.map((option: string, index: number) => (
                        <div
                            className={cn(styles.option, {
                                [styles.selectioned]: option === value,
                            })}
                            onClick={() => handleClick({
                                index: filterIndex,
                                value: index
                            })}
                            key={index}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </OutsideClickHandler>
    )
}

export default Dropdown