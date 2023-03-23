
import React, { useState, useRef, useEffect } from 'react';
import type { DataType } from '../utils/utils';
import { MdClose } from "react-icons/md";
import { search } from '../api/search_api';
import PodcastCard from './PodcastCard';
import { UnauthorizedError } from '../errors/httpErrors';
import { QueryItem, QueryResponse, YourFormElement } from '../interfaces/interfaces';
import ErrorView from './ErrorView';


const SearchBar: React.FC<{}> = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [responseData, setResponseData] = useState<any>([]);
    const [resultsError, setResultsError] = useState(false);

    //makes it so the cursor is already selected on the searchbar
    const inputRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    window.addEventListener("load", () => inputRef.current?.focus());

    const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>): void => {
        const searchInput: string = target.value;
        setSearchQuery(searchInput);
    }

    const handleFormSubmit = async (e: React.FormEvent<YourFormElement>): Promise<any> => {
        e.preventDefault();
        const search_query: string = e.currentTarget.elements.userSearchQuery.value;
        try {
            const response = await search(search_query);
            console.log(response);

            setResponseData(response);
            setResultsError(false);
        } catch (error) {
            console.error("Failed to retrive podcast results.")
            setResultsError(true);
        }
    }
    
    const clearInput = (): void => {
        setSearchQuery("");
        inputRef.current?.focus();
    }

    return (
    <div className='flex flex-col items-center'>
        <form onSubmit={handleFormSubmit} className='flex flex-col w-2/5'>
            <input
            className='m-5 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg'
                id="userSearchQuery"
                type="text"
                placeholder="Enter a podcast name"
                value={searchQuery}
                onChange={handleChange}
                ref={inputRef}
            />
        </form>
            {!resultsError && responseData.map((item: any, idx: number) => (
                <PodcastCard name={item.name} iurl={item.iurl} id={item.id} desc={item.desc} surl={item.surl}/>
            ))}

            {resultsError && <ErrorView/> }

        </div>

    );
}

export default SearchBar;