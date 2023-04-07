import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div>
            <h1>Tshirt total : {tShirts.length}</h1>
        </div>
    );
};

export default Home;