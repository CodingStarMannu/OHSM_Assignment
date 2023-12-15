import { useState } from 'react';
import Status from "../../components/statusBar/Status";
import Styles from './AddBusiness.module.css';
import InputField from "../../components/input/InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


export default function AddBusiness() {

    const [formData, setFormData] = useState({
        propertyType: '',
        propertyName: '',
        phoneNumber: '',
        email: '',
        address: '',
        state: '',
        city: '',
        pincode: ''
    });

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };


      const handleSetup = async (e) => {
        e.preventDefault();
        const storedToken = localStorage.getItem('jwt_token_key');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedToken}`,
          };
        const url = "http://localhost:8000/business/setup"; 
        try {
          const response = await axios.post(url, formData,{headers});
          console.log('Business setup response:', response.data);
          navigate('/onboarding');
        
        } catch (error) {
          console.error('Error setting up business:', error);
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        }
      };


  return (
    <>
    <Status/>
    <div className={Styles.layout}>

        <div className={Styles.headingContainer}>

            <div className={Styles.container}>
            <div className={Styles.arrowBody}></div>
            <div className={Styles.arrowHead}></div>
            </div>
            <div className={Styles.heading}>
            <h1> Property Setup</h1>
            </div>
        </div>
        <div className={Styles.displayLogo}>Display Logo</div>
        <div className={Styles.bar}></div>

        <div className={Styles.businessContainer}>

        <div className={Styles.businessInformationText}>BUSINESS INFORMATION</div>
        <div className={Styles.formContainer}>
        <form  >
        <InputField label="Property Type" type="text"  name="propertyType" value={formData.propertyType} onChange={handleChange} placeholder="Property Type" />
        <InputField label="Property name" type="text" name="propertyName" value={formData.propertyName} onChange={handleChange}placeholder="Vista Property" />
        <InputField label="Phone number" type="number"   name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone number" />
        <InputField label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
        <InputField label="Address" type="text"  name="address" value={formData.address} onChange={handleChange} placeholder="123 Serene Street, Rajpur" />
        <InputField label="State" type="text"  name="state" value={formData.state} onChange={handleChange} placeholder="Uttrakhand" />
        <InputField label="City" type="text"   name="city" value={formData.city} onChange={handleChange} placeholder="Dehradun" />  
        <InputField label="Pincode" type="number"  name="pincode" value={formData.pincode} onChange={handleChange} placeholder="e.g. 220011" />  
        </form>
        </div>
        <Link to='/onboarding'>
            <div  onClick={handleSetup} className={Styles.addInventoryButton}>
                <div className={Styles.addInventoryIconContainer}>
                <div className={Styles.addInventoryIcon}>
                <div className={Styles.addInventoryIconInner}>
                    <div className={Styles.addInventoryCircle}></div>
                    <div className={Styles.addInventoryCheck}></div>
                </div>
                </div>
                <div className={Styles.addInventoryText}>Add Inventory</div>
            </div>
            </div>
            </Link>
        <Link to='/onboarding'>
        <button  type="button" className={Styles.setupButton}>
        <div className={Styles.setupText} onClick={handleSetup}>Complete your setup</div>
        </button>
        </Link>
      

        </div>
    </div>
  
    </>
  )
}
