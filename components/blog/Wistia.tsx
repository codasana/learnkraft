import { FC, useState } from 'react'
import Image from 'next/image'

export const Wistia: FC<{
  videoUrl: string
}> = ({ videoUrl }) => {

  return (
        
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            loading="lazy"
            allowFullScreen
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          />
        </div>
  
  )
}
