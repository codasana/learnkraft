import { FC, useState } from 'react'
import Image from 'next/image'

export const Video: FC<{
  videoId: string
}> = ({ videoId }) => {

  return (
        
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?&autoplay=1`}
            loading="lazy"
            allowFullScreen
            title="Intro to Contentlayer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          />
        </div>
  
  )
}
