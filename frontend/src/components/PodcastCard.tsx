import { truncate } from 'fs';
import react from 'react';

interface CardProps {
    name: string,
    id: string,
    iurl: string,
    desc: string,
    surl: string,
}

const PodcastCard = ({name, id, iurl, desc, surl}: CardProps) => {
    const truncateDescription = (description: string) => {
        return description.length > 103 ? description.substring(0, 110) + "..." : description;
    }

    return (
        <a href={surl} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-3">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={iurl} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncateDescription(desc)}</p>
                </div>
        </a>
    );
}

export default PodcastCard;