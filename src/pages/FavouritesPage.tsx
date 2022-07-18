import React from 'react';
import {useAppSelector} from "../hooks/redux";

const FavouritesPage = () => {
    const {favourites} = useAppSelector(state => state.github)

    if (favourites.length === 0) {
        return (
            <p className='text-center'>No items.</p>
        )
    }

    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen '>
            <ul className='list-none '>
                {favourites.map(f => (
                    <li key={f}
                        className='border bg-gray-100 py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-200 transition-all cursor-pointer '
                    >
                        <a href={f} target='_blank'>{f}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavouritesPage;