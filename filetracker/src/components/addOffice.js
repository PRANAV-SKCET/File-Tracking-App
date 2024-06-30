// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { AuthContext } from './context';
// import { TextField, Button, Grid, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// function AddOffice() {
//     const { districtId } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         officeId: '',
//         officeName: '',
//         officeLocation: '',
//         email: '',
//         password: '',
//         districtId: districtId
//     });
//     const [responseMessage, setResponseMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8080/addOffice', formData)
//             .then(response => {
//                 setResponseMessage(response.data);
    
//                 if (response.data === "New Office Added") {
//                     setTimeout(() => {
//                         navigate("/adminWorking");
//                     }, 1500); 
//                 } else {
//                     setTimeout(() => {
//                         setResponseMessage('');
//                     }, 1500);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     };
    

//     return (
//         <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
//             <Grid item xs={12} sm={8} md={6} lg={4}>
//                 <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                     <Typography variant="h4" gutterBottom>Add Office</Typography>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <TextField
//                         name="officeId"
//                         value={formData.officeId}
//                         onChange={handleChange}
//                         label="Office Id"
//                         variant="outlined"
//                         margin="normal"
//                         fullWidth
//                         required
//                     />
//                     <TextField
//                         name="officeName"
//                         value={formData.officeName}
//                         onChange={handleChange}
//                         label="Office Name"
//                         variant="outlined"
//                         margin="normal"
//                         fullWidth
//                         required
//                     />
//                     <TextField
//                         name="officeLocation"
//                         value={formData.officeLocation}
//                         onChange={handleChange}
//                         label="Office Location"
//                         variant="outlined"
//                         margin="normal"
//                         fullWidth
//                         required
//                     />
//                     <TextField
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         label="Email"
//                         variant="outlined"
//                         margin="normal"
//                         fullWidth
//                         required
//                     />
//                     <TextField
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         label="Password"
//                         variant="outlined"
//                         margin="normal"
//                         fullWidth
//                         required
//                     />
//                     <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
//                         Add New Office
//                     </Button>
//                     {responseMessage && (
//                         <Typography variant="body1" style={{ marginTop: '10px' }}>
//                             {responseMessage}
//                         </Typography>
//                     )}
//                 </form>
//             </Grid>
//         </Grid>
//     );
// }

// export default AddOffice;
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function AddOffice() {
    const { districtId } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        officeId: '',
        officeName: '',
        officeLocation: '',
        email: '',
        password: '',
        districtId: districtId
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/addOffice', formData)
            .then(response => {
                setResponseMessage(response.data);
    
                if (response.data === "New Office Added") {
                    setTimeout(() => {
                        navigate("/adminWorking");
                    }, 1500); 
                } else {
                    setTimeout(() => {
                        setResponseMessage('');
                    }, 1500);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const backgroundStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/blue-background_23-2147633356.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1719532800&semt=ais_user")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const textFieldStyle = {
        backgroundColor: 'white',
        width: '100%',
        height: '56px', // Standard height for MUI outlined TextField
        marginBottom: '16px' // Add some space between fields for better layout
    };

    return (
        <Grid container style={backgroundStyle}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        <AccountBalanceIcon style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                        Add Office
                    </Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="officeId"
                        name="officeId"
                        value={formData.officeId}
                        onChange={handleChange}
                        label="Office Id"
                        variant="outlined"
                        required
                        sx={textFieldStyle}
                    />
                    <TextField
                       type="officeName"
                        name="officeName"
                        value={formData.officeName}
                        onChange={handleChange}
                        label="Office Name"
                        variant="outlined"
                        required
                        sx={textFieldStyle}
                    />
                    <TextField
                        type="officeLocation"
                        name="officeLocation"
                        value={formData.officeLocation}
                        onChange={handleChange}
                        label="Office Location"
                        variant="outlined"
                        required
                        sx={textFieldStyle}
                    />
                    <TextField
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Email"
                        variant="outlined"
                        required
                        sx={textFieldStyle}
                    />
                    <TextField
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        label="Password"
                        variant="outlined"
                        required
                        sx={textFieldStyle}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                        Add New Office
                    </Button>
                    {responseMessage && (
                        <Typography variant="body1" style={{ marginTop: '10px' }}>
                            {responseMessage}
                        </Typography>
                    )}
                </form>
            </Grid>
        </Grid>
    );
}

export default AddOffice;
