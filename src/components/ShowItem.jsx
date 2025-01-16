import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'

function ShowItem() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log("Error Fetch DATA !!! : ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    const products = data.products;
    console.log(products)

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    // const currentPost = products.slice(firstPostIndex, lastPostIndex); 
   

    return (

        <div className='bg-gray-200 w-screen items-start'>

            <div className='container flex justify-between'>
                <h1 className='text-4xl m-5 text-blue-800'>Products</h1>
                <div className='m-5'> Sort By :
                    <select className='bg-white w-32 h-10 rounded-md self-center mx-6 px-2'>
                        <option value="none" hidden>Select</option>
                        <option value="AAA">Name</option>
                        <option value="BBB">Price</option>
                    </select>
                </div>
            </div>

            {products?.map((val) => (
                <div key={val.id}>
                    <ListItem id={val.id} title={val.title} price={val.price} src={val.thumbnail} />
                </div>
            ))}


           

            <div className='pagination container flex justify-end bg-blue-400 p-3'>
                <ul className='flex space-x-2'>
                    <li><a href="#" className='bg-blue-100 px-3 py-1 rounded-md'>{`<`}</a></li>
                    <li><a href="#" className='bg-blue-100 px-3 py-1 rounded-md'>1</a></li>
                    <li><a href="#" className='bg-blue-100 px-3 py-1 rounded-md'>2</a></li>
                    <li><a href="#" className='bg-blue-100 px-3 py-1 rounded-md'>3</a></li>
                    <li><a href="#" className='bg-blue-100 px-3 py-1 rounded-md'>4</a></li>
                    <li><a href="#" className='bg-blue-100 px-3 py-1 rounded-md'>5</a></li>
                    <li><a href="#" className='bg-blue-100 px-3 py-1 rounded-md'>{`>`}</a></li>
                </ul>
            </div>

        </div>
    )
}

export default ShowItem
