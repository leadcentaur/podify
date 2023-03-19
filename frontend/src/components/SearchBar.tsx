
import React, { useState, useRef } from 'react';
import { Wrapper, DataResult } from './SearchBar.styles';
import type { DataType } from '../utils/utils';
import { MdClose } from "react-icons/md";
import { search } from '../api/search_api';

interface FormElements extends HTMLFormControlsCollection {
    //the input field needs a form tag with name userSearchQuery
    userSearchQuery: HTMLInputElement
}

interface YourFormElement extends HTMLFormElement {
   readonly elements: FormElements
}

const SearchBar: React.FC<{}> = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    //makes it so the cursor is already selected on the searchbar
    const inputRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    window.addEventListener("load", () => inputRef.current?.focus());

    const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>): void => {
        const searchInput: string = target.value;
        setSearchQuery(searchInput);
    }

    const handleFormSubmit = (e: React.FormEvent<YourFormElement>): void => {
        e.preventDefault();
        const search_query: string = e.currentTarget.elements.userSearchQuery.value;
        search(search_query);
    }

    async function doSomething(query: string, ms: number)  {
        await new Promise( resolve => setTimeout(resolve, ms) );
        console.log("value: " + searchQuery);
    }

    //const handleSubmit = ({target}): React.FormEvent

    const clearInput = (): void => {
        setSearchQuery("");
        inputRef.current?.focus();
    }

    return (
    
        <form onSubmit={handleFormSubmit}>
            <input
                id="userSearchQuery"
                type="text"
                placeholder="Enter a podcast name"
                value={searchQuery}
                onChange={handleChange}
                ref={inputRef}
            />
            <button type="submit">Submit</button>
        </form>
    );
    //  <div className="searchInputs">
    //         <input
    //             type="text"
    //             placeholder="Enter a podcast name"
    //             value={searchQuery}
    //             onChange={handleChange}
    //             ref={inputRef}
    //         />
    //         <div className="searchIcon">
    //             {searchQuery.length !== 0 && (
    //             <MdClose id="clearBtn" onClick={clearInput} />
    //             )}
    //         </div>
    //     </div>
    //);

}

export default SearchBar;