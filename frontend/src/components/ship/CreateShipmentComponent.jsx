import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from "../security/AuthContext"
import DisplayLabelResultComponent from './DisplayLabelResult';



function CreateShipmentComponent(){
    const [fromAddressX, setFromAddressX] = useState(0);
    const [fromAddressY, setFromAddressY] = useState(0);
    const [toAddressX, setToAddressX] = useState(0);
    const [toAddressY, setToAddressY] = useState(0);
    const [packageWeight, setPackageWeight] = useState(0);
    const [packageLength, setPackageLength] = useState("");
    const [packageWidth, setPackageWidth] = useState("");
    const [packageHeight, setPackageHeight] = useState("");

    const [resFromServer, setResFromServer] = useState(null);

    const authContext = useAuth()
    const username = authContext.upsUser


    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/labels', {
            tox:  parseInt(toAddressX),
            toy: parseInt(toAddressY),
            fromx: parseInt(fromAddressX),
            fromy: parseInt(fromAddressY),
            weight: parseFloat(packageWeight) ,
            username: username
        })
        .then(response => {
            console.log(response);
            setResFromServer(response.data)
          // Handle success here
        })
        .catch(error => {
            console.log(error);
          // Handle error here
        })
    }

    return (
        <div>
        { resFromServer === null &&          
            <form onSubmit={handleSubmit}>
            <label>
            From Address X:
            <input
                type="text"
                value={fromAddressX}
                onChange={(event) => setFromAddressX(event.target.value)}
            />
            </label>
            <label>
            From Address Y:
            <input
                type="text"
                value={fromAddressY}
                onChange={(event) => setFromAddressY(event.target.value)}
            />
            </label>
            <br />
            <label>
            To Address X:
            <input
                type="text"
                value={toAddressX}
                onChange={(event) => { setToAddressX(event.target.value)}}
            />
            </label>
            <label>
            To Address Y:
            <input
                type="text"
                value={toAddressY}
                onChange={(event) => setToAddressY(event.target.value)}
            />
            </label>
            <br />
            <label>
            Package Weight:
            <input
                type="text"
                value={packageWeight}
                onChange={(event) => setPackageWeight(event.target.value)}
            />
            </label>
            <br />
            <label>
            Package Length:
            <input
                type="text"
                value={packageLength}
                onChange={(event) => setPackageLength(event.target.value)}
            />
            </label>
            <br />
            <label>
            Package Width:
            <input
                type="text"
                value={packageWidth}
                onChange={(event) => setPackageWidth(event.target.value)}
            />
            </label>
            <br />
            <label>
            Package Height:
            <input
                type="text"
                value={packageHeight}
                onChange={(event) => setPackageHeight(event.target.value)}
            />
            </label>
            <br />
            <button type="submit">Create Shipment</button>
        </form>}
        {resFromServer && <DisplayLabelResultComponent labelResult={resFromServer} />}
        </div>
    )

    
}

export default CreateShipmentComponent