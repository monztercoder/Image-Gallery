import React from 'react'

const ImageCard = ({image}) => {

    const tags = image.tags.split(',')


    return (
    <div className=" rounded shadow-lg mx-6 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:w-1/3 lg:w-1/4">
            <img src={image.webformatURL} alt="" className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-blue-700 text-xl mb-2">
                    Photo By {image.user}
                </div>
            
                <ul>
                    <li>
                        <strong>Views:</strong> {image.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong> {image.downloads}
                    </li>
                    <li>
                        <strong>Likes:</strong> {image.likes}
                    </li>
                </ul>
            </div>
        <div className="px-6 py-4">
            {tags.map((tag,index) => {
            return  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"> #{tag}
                </span>
            })}
        </div>
    </div>
    )
}

export default ImageCard
