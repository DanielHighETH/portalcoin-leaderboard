'use client'
import React, { useEffect, useState } from 'react';
import { UserData } from '@/app/types/index';
export const revalidate = 0;

const Leaderboard: React.FC = () => {
    const [data, setData] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        fetch('/api/getLeaderboard', {
            next: { revalidate: 0 }
        })
            .then((response) => response.json())
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter(item =>
        item.user.twitterHandle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="text-black">
            <h1 className="text-5xl font-bold text-white mt-5 text-center">PortalCoin Leaderboard</h1>
            <h3 className='text-2xl font-bold text-white mb-5 text-center'>Created by <a href='https://x.com/dhigh_eth' target="_blank" rel="noopener noreferrer" className='text-blue-500'>Daniel High</a></h3>
            <div className="w-full max-w-6xl mx-auto px-4">
                <input
                    type="text"
                    placeholder="Search by Twitter handle..."
                    className="mb-4 p-2 border rounded w-full sm:w-1/2 md:w-1/3 opacity-75"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <div className="flex flex-wrap -mx-2">
                    {filteredData.map((item, index) => (
                        <div key={index} className="px-2 mb-4 w-full sm:w-1/2 md:w-1/3">
                            <div className="bg-white rounded-lg shadow-md p-4 opacity-75 flex items-center space-x-4">
                                <a href={`https://x.com/${item.user.twitterHandle}`} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={item.user.twitterImage}
                                        alt={item.user.twitterHandle}
                                        className="w-12 h-12 rounded-full border-2 border-gray-400 p-1"
                                    />
                                </a>
                                <div>
                                    <div className="font-bold">
                                        <a href={`https://x.com/${item.user.twitterHandle}`} target="_blank" rel="noopener noreferrer" className='text-blue-500'>
                                            {item.user.twitterHandle}
                                        </a>
                                    </div>
                                    <div>Rank: {item.rank}</div>
                                    <div>Level: {item.currentLevel}</div>
                                    <div>Points: {item.points.toLocaleString()}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
