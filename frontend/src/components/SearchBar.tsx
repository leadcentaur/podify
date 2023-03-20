
import React, { useState, useRef, useEffect } from 'react';
import type { DataType } from '../utils/utils';
import { MdClose } from "react-icons/md";
import { QueryItem, search } from '../api/search_api';
import PodcastCard from './PodcastCard';

interface FormElements extends HTMLFormControlsCollection {
    //the input field needs a form tag with name userSearchQuery
    userSearchQuery: HTMLInputElement
}

interface YourFormElement extends HTMLFormElement {
   readonly elements: FormElements
}


const SearchBar: React.FC<{}> = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [responseData, setResponseData] = useState<any>([]);

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
        const object = await search(search_query);
        clearInput();
        setResponseData(object);
    }
    
    const clearInput = (): void => {
        setSearchQuery("");
        inputRef.current?.focus();
    }

    return (
    <div className='flex flex-col h-screen my-auto items-center bgimg bg-cover w-full'>
        <form onSubmit={handleFormSubmit} className='object-cover  rounded-t-lg'>
            <input
            className='m-3 bg-white border border-gray-200 rounded-lg p-2 shadow md:flex-row '
                id="userSearchQuery"
                type="text"
                placeholder="Enter a podcast name"
                value={searchQuery}
                onChange={handleChange}
                ref={inputRef}
            />
            <button type="submit">Search</button>
        
        </form>
        
            {responseData.map((item: any, idx: number) => (
                <PodcastCard name={item.name} iurl={item.iurl} id={item.id} desc={item.desc} surl={item.surl}/>
            ))}
        </div>

    );
}

export default SearchBar;