import axios from 'axios'
import "../app/style/fakeApi.css"
import React, { useState, useEffect } from 'react'

const FakeApi = () => {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const Api = async () => {
            const response = await axios.get("http://localhost:3000/data")
            const data = response.data
            console.log("Api data", data);
            setApiData(data)
        }
        Api();
    }, [])

    return (
        <div className='apiContainer'>
            <h2>Fake Api</h2>
            {apiData.map((value, index) => (
                <div className='itemsDiv' key={index}>
                    <span><b>Name: </b> {value.name}</span>
                    <span><b>Occupation: </b> {value.occupation}</span>
                </div>
            ))}
        </div>
    )
}

export default FakeApi;
