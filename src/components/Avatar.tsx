import {ImgHTMLAttributes} from 'react'

import styles from './Avatar.module.css'

// colocar ?: para propriedades OPCIONAIS

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{

    hasBorder?: boolean;

}

export function Avatar( {hasBorder = true, ...props} : AvatarProps ) {
    return (

        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 

        // src={src}

        // alt={alt}

        {...props}

        />
    );
}