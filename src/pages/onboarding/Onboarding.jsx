import style from "./OnBoarding.module.css";
import InputField from "../../components/input/InputField";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Onboarding() {

  const [formData, setFormData] = useState({
    propertySpaceName: '',
    propertyInventoryType: '',
    otherPropertyInventoryType: '',
    capacity: '',
    amenities: '',
    availabilityStatus: '',
    notes: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('http://localhost:8000/inventory/create', formData);
      console.log('Inventory created:', response.data);
      navigate('/signup');
    } catch (error) {
      console.error('Error creating inventory:', error);
      // Handle errors accordingly
    }
  };

  const handleCancel = () => {
    navigate('/addbusiness');
  };

  return (
    <>
      <div className={style.layout}>
        <div className={style.heading}>Inventory</div>
        <div className={style.formContainer}>
          <form>
            <InputField
              label="Property Space Name"
              name="propertySpaceName"
              type="text"
              value={formData.propertySpaceName}
              onChange={handleChange}
              placeholder="Dormitory-201"
            />
            <InputField
              label="Property Inventory Type"
              name="propertyInventoryType"
              type="text"
              value={formData.propertyInventoryType}
              onChange={handleChange}
              placeholder="Others"
            />
            <InputField
              label="Other Property Inventory Type"
              name="otherPropertyInventoryType"
              type="text"
              value={formData.otherPropertyInventoryType}
              onChange={handleChange}
              placeholder="Add Property Inventory"
            />
            <InputField
              label="Capacity"
              name="capacity"
              type="number"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Number of capacity"
            />
            <InputField
              label="Amenities"
              name="amenities"
              type="text"
              value={formData.amenities}
              onChange={handleChange}
              placeholder="Available amenities"
            />
            <InputField
              label="Availability Status"
              name="availabilityStatus"
              type="text"
              value={formData.availabilityStatus}
              onChange={handleChange}
              placeholder="Active"
            />
            <InputField
              label="Notes (if any)"
              name="notes"
              type="text"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add notes if any..."
            />
          </form>
        </div>
        <div className={style.cancelButton} onClick={handleCancel}>
          <div className={style.buttonText}>Cancel</div>
        </div>
        <div className={style.buttonContainer}>
          <div className={style.saveButton} onClick={handleSave}>
            Save
          </div>
        </div>
      </div>
    </>
  );
}
