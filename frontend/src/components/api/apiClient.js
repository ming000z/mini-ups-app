import axios from 'axios'

// export const apiMiniUPSClient = axios.create(
//     {
//         baseURL: 'http://vcm-30567.vm.duke.edu:8080'
//     }
// );

export const apiMiniUPSClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

// * change signup component to virtual machine if need
// * change createshiplabel component to virtual machine if need