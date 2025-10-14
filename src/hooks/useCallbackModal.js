import { useState } from 'react';
import { addDetail } from '../components/utils/Api';

export const useCallbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    experience: '',
    specialisation: '',
    productCompany: 'Elite-BIM'
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!agreedToTerms) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please agree to the Terms of Use and Privacy Policy.'
      });
      return;
    }

    if (!formData.fullName || !formData.email || !formData.phoneNo || !formData.experience || !formData.specialisation) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please fill in all required fields.'
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      await addDetail(formData);
      
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        fullName: '',
        email: '',
        phoneNo: '',
        experience: '',
        specialisation: '',
        productCompany: 'Elite-BIM'
      });
      setAgreedToTerms(false);
      
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Something went wrong. Please try again.'
      });
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setIsOpen(false);
    }
  };

  return {
    isOpen,
    formData,
    agreedToTerms,
    status,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
    handleOverlayClick,
    setAgreedToTerms
  };
};