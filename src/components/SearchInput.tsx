import React, {useEffect, useState} from "react";
import TextInput from "./ui/TextInput";
import Button from "./ui/Button";
import SearchIcon from "./ui/SearchIcon";
export default function SearchInput() {
    return (
        <form>
            <div className="relative w-full ">
                <TextInput type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search a Gift " required />
                <Button  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-cyan-700 rounded-r-lg border border-cyan-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        <SearchIcon />
                </Button>
            </div>
        </form>
    );
}