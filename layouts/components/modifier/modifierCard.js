import React from 'react'

import Image from 'next/image'

const modifierCard = ({ img }) => {
    return (
        <>

            <Image src={img}
                width={345}
                height={200}
                priority={true}

            />



        </>
    )
}

export default modifierCard