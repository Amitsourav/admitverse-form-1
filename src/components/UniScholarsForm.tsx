'use client';

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';

interface FormData {
  country?: string;
  studyLevel?: string;
  intake?: string;
  course?: string;
  name?: string;
  email?: string;
  phone?: string;
  phoneCountryCode?: string;
}

const countries = [
  {
    id: 'uk',
    name: 'United Kingdom',
    courses: '40K+',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=250&fit=crop' // Oxford University
  },
  {
    id: 'usa',
    name: 'United States',
    courses: '45K+',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop' // Harvard University
  },
  {
    id: 'ireland',
    name: 'Ireland',
    courses: '10K+',
    flag: '🇮🇪',
    image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=400&h=250&fit=crop' // Ring of Kerry, Ireland
  },
  {
    id: 'newzealand',
    name: 'New Zealand',
    courses: '5K+',
    flag: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop' // Milford Sound
  },
  {
    id: 'canada',
    name: 'Canada',
    courses: '35K+',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=400&h=250&fit=crop' // University of Toronto
  },
  {
    id: 'australia',
    name: 'Australia',
    courses: '30K+',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=250&fit=crop' // Sydney Opera House
  },
  {
    id: 'germany',
    name: 'Germany',
    courses: '25K+',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop' // Brandenburg Gate, Berlin
  },
  {
    id: 'france',
    name: 'France',
    courses: '20K+',
    flag: '🇫🇷',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop' // Eiffel Tower
  }
];

const courses = [
  'Business Administration',
  'Engineering',
  'Arts',
  'Economics',
  'Law',
  'Social Science'
];

const testimonials = [
  {
    name: 'Kaushi Rajput',
    date: '2 months ago',
    text: 'I had an excellent experience with this abroad education consultancy. From the very first counselling session, the team was extremely professional, knowledgeable, and genuinely supportive. They guided me step by step through the entire process, starting from selecting the right country and course to preparing my application, handling documentation, and even helping me understand visa requirements. They also kept me updated at every stage, which really reduced my stress. From university shortlisting to SOP and LOR guidance, everything was handled smoothly. The staff is friendly, approachable, and always ready to help. I also appreciate how transparent they were—there were no hidden charges or false promises, only genuine guidance based on my profile.',
    avatar: 'https://ui-avatars.com/api/?name=Kaushi+Rajput&background=3B82F6',
    rating: 5
  },
  {
    name: 'Shubham Rohatgi',
    date: '2 months ago',
    text: 'My brother literally had no clue on how to get admissions in Germany. We tried every possible thing be it local counsellors, multiple youtube channels but nothing gave us real clarity. AdmitVerse completely changed that for us. Their team was incredibly supportive, well-spoken, and determined throughout the entire process. They guided him step by step, explaining everything from exams to applications, and even helped tremendously with loan approval. All resulting my brother getting admission into one of the best universities in Germany. Honestly, AdmitVerse is a total stress saver. Much, much, much recommended!',
    avatar: 'https://ui-avatars.com/api/?name=Shubham+Rohatgi&background=10B981',
    rating: 5
  },
  {
    name: 'Neha Kapil',
    date: '2 months ago',
    text: 'As a student, I was initially nervous about the admission process, but AdmitVerse made everything so organized and easy to follow. Bibhash Sir&apos;s guidance was incredibly helpful. he patiently explained each step, clarified my doubts, and gave practical advice. I felt confident and supported throughout the entire journey.',
    avatar: 'https://ui-avatars.com/api/?name=Neha+Kapil&background=8B5CF6',
    rating: 5
  }
];

export function AdmitVerseForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    phoneCountryCode: 'IN +91'
  });
  const [passportValid, setPassportValid] = useState<string>('');
  const [passportApplied, setPassportApplied] = useState<string>('');
  const [englishTest, setEnglishTest] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [funding, setFunding] = useState<string>('');
  const [academics, setAcademics] = useState({
    tenth: { percentage: '', year: '', board: '' },
    twelfth: { percentage: '', year: '', board: '' },
    englishScore: ''
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Move to success page
    setCurrentStep(6);
  };

  const handlePassportTestNext = () => {
    setCurrentStep(7);
  };

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    phone: ''
  });

  const handleFinanceNext = () => {
    setCurrentStep(8);
  };

  const handleFinalSubmit = () => {
    console.log('Final submission with all data:', { 
      ...formData, 
      passportValid, 
      englishTest,
      budget,
      funding,
      academics
    });
    setCurrentStep(9);
  };

  // Extended progress steps for later stages
  const getProgressSteps = () => {
    if (currentStep <= 5) {
      return [
        { id: 1, label: 'Country', active: currentStep === 1, completed: currentStep > 1 },
        { id: 2, label: 'Level of Study & Intake', active: currentStep === 2, completed: currentStep > 2 },
        { id: 3, label: 'Program', active: currentStep === 3, completed: currentStep > 3 },
        { id: 4, label: 'Info', active: currentStep === 4, completed: currentStep > 4 },
        { id: 5, label: 'Contact', active: currentStep === 5, completed: currentStep > 5 },
      ];
    } else {
      return [
        { id: 6, label: 'Passport & Tests', active: currentStep === 6, completed: currentStep > 6 },
        { id: 7, label: 'Finances', active: currentStep === 7, completed: currentStep > 7 },
        { id: 8, label: 'Academics', active: currentStep === 8, completed: currentStep > 8 },
        { id: 9, label: 'Success', active: currentStep === 9, completed: false },
      ];
    }
  };

  const steps = getProgressSteps();

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b flex-shrink-0">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">A</span>
            </div>
            <h1 className="text-xl font-semibold">
              Admit<span className="text-blue-600">Verse</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white py-2 px-4 shadow-sm flex-shrink-0">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            {/* Modern Step Pills */}
            <div className="flex items-center justify-center space-x-1">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  {/* Step Pill */}
                  <div 
                    className={`relative flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      step.completed 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : step.active 
                        ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-200' 
                        : 'bg-gray-50 text-gray-500'
                    }`}
                  >
                    {/* Step Icon/Number */}
                    <div 
                      className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs ${
                        step.completed 
                          ? 'bg-white bg-opacity-20 text-white' 
                          : step.active 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {step.completed ? '✓' : index + 1}
                    </div>
                    
                    {/* Step Label */}
                    <span className="whitespace-nowrap">{step.label}</span>
                    
                    {/* Active Step Pulse Effect */}
                    {step.active && (
                      <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Connector Arrow */}
                  {index < steps.length - 1 && (
                    <div className={`mx-2 transition-colors duration-300 ${
                      step.completed ? 'text-blue-600' : 'text-gray-300'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto max-w-full px-8 py-2 h-full flex flex-col">
        {currentStep > 1 && (
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-1 flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Prev</span>
          </button>
        )}

        {/* Step 1: Country Selection */}
        {currentStep === 1 && (
          <div className="animate-fade-in flex-1 flex flex-col">
            <h2 className="text-3xl font-bold mb-3 text-center">Welcome To <span className="text-blue-600">Study Abroad</span> Journey!</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">Where Do You Plan To Study?</p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-6xl mx-auto w-full">
              {countries.map((country) => (
                <div
                  key={country.id}
                  onClick={() => {
                    updateFormData({ country: country.id });
                    handleNext();
                  }}
                  className="country-card"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{country.flag}</span>
                        <span className="font-semibold">{country.name}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{country.courses} Courses</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-8 mt-auto pb-4 text-green-600 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>3M+ Registered Students</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>30K+ Students Counselled</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Level of Study & Intake */}
        {currentStep === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">What Are You Planning To Pursue?</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              {['Bachelors', 'Masters'].map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    const newData = { studyLevel: level.toLowerCase() };
                    updateFormData(newData);
                    // Auto proceed if intake is already selected
                    if (formData.intake) {
                      setTimeout(() => handleNext(), 300);
                    }
                  }}
                  className={`step-button ${formData.studyLevel === level.toLowerCase() ? 'selected' : ''}`}
                >
                  {level}
                </button>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-gray-900">Which Intake Are You Planning For?</h2>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {["Jan&apos; 26", "May&apos; 26", "Sep&apos; 26"].map((intake) => (
                <button
                  key={intake}
                  onClick={() => {
                    updateFormData({ intake });
                    // Auto proceed if study level is already selected
                    if (formData.studyLevel) {
                      setTimeout(() => handleNext(), 300);
                    }
                  }}
                  className={`step-button ${formData.intake === intake ? 'selected' : ''}`}
                >
                  {intake}
                  {intake === "Jan&apos; 26" && (
                    <span className="block text-xs text-green-600 mt-2">Recommended</span>
                  )}
                </button>
              ))}
            </div>

            {/* Progress Message */}
            {(formData.studyLevel && !formData.intake) && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 animate-fade-in">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">Great! Now please select your preferred intake to continue.</p>
                  </div>
                </div>
              </div>
            )}

            {(!formData.studyLevel && formData.intake) && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 animate-fade-in">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">Perfect! Now please select your study level to continue.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center gap-8 mt-12 text-green-600 font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>200+ Expert Counsellors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>600+ University Partners</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Program Selection */}
        {currentStep === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Which Course Do You Wish To Study?</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {courses.map((course) => (
                <button
                  key={course}
                  onClick={() => {
                    updateFormData({ course });
                    handleNext();
                  }}
                  className={`step-button ${formData.course === course ? 'selected' : ''}`}
                >
                  {course}
                </button>
              ))}
            </div>

            <button className="w-full py-4 px-6 border-2 border-gray-200 rounded-2xl text-gray-600 hover:border-teal-500 transition-colors">
              🔍 Explore More Courses
            </button>

            <div className="flex justify-center gap-8 mt-12 text-green-600 font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Get SOP/LOR Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Consult Certified Experts</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Info */}
        {currentStep === 4 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">What Should We Call You?</h2>
            
            <div className="max-w-2xl">
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name || ''}
                onChange={(e) => updateFormData({ name: e.target.value })}
                className="input-field mb-8"
              />

              <div className="flex justify-end">
                <button 
                  onClick={handleNext}
                  disabled={!formData.name}
                  className="btn-primary"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Google Reviews */}
            <div className="mt-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Google Reviews</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {testimonials.map((review, index) => (
                  <div key={index} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-start gap-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm truncate">{review.name}</h4>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm">⭐</span>
                          ))}
                          <span className="text-xs text-gray-500 ml-1">{review.date}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Contact */}
        {currentStep === 5 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Amit, Share Your Contact Details, And Our Expert Counsellors Will Guide You Every Step Of The Way!
            </h2>
            
            <div className="max-w-2xl">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter Your Email ID</label>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={formData.email || ''}
                  onChange={(e) => {
                    const email = e.target.value;
                    updateFormData({ email });
                    if (email && !validateEmail(email)) {
                      setValidationErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
                    } else {
                      setValidationErrors(prev => ({ ...prev, email: '' }));
                    }
                  }}
                  className={`input-field ${validationErrors.email ? 'border-red-500' : ''}`}
                />
                {validationErrors.email && (
                  <p className="mt-2 text-sm text-red-600">{validationErrors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter Your Phone Number</label>
                <div className="flex gap-2">
                  <select
                    value={formData.phoneCountryCode}
                    onChange={(e) => updateFormData({ phoneCountryCode: e.target.value })}
                    className="input-field w-32"
                  >
                    <option>IN +91</option>
                    <option>US +1</option>
                    <option>UK +44</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="12345 67890"
                    value={formData.phone || ''}
                    onChange={(e) => {
                      const phone = e.target.value;
                      updateFormData({ phone });
                      if (phone && !validatePhone(phone)) {
                        setValidationErrors(prev => ({ ...prev, phone: 'Please enter a valid 10-digit phone number' }));
                      } else {
                        setValidationErrors(prev => ({ ...prev, phone: '' }));
                      }
                    }}
                    className={`input-field flex-1 ${validationErrors.phone ? 'border-red-500' : ''}`}
                  />
                </div>
                {validationErrors.phone && (
                  <p className="mt-2 text-sm text-red-600">{validationErrors.phone}</p>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-8">
                By submitting the form you agree to our Terms & Privacy Policy
              </p>

              <p className="font-semibold mb-8">
                P.S.: We don&apos;t spam, or use your data for illicit purpose
              </p>

              <div className="flex justify-center">
                <button 
                  onClick={handleSubmit}
                  disabled={!formData.email || !formData.phone}
                  className="btn-primary px-12"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Success Page with Passport & Tests */}
        {currentStep === 6 && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎉</span>
              <h2 className="text-3xl font-bold">Success!</h2>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">
              We&apos;ll be in touch shortly with you dcdc
            </h3>
            
            <p className="text-gray-600 mb-12">
              Maximize your free consultation by sharing more details for better expert guidance.
            </p>

            <div className="space-y-12">
              {/* Passport Question */}
              <div>
                <h4 className="text-lg font-semibold mb-6">
                  Do you have passport with validity exceeding 6 months?
                </h4>
                <div className="flex gap-4">
                  <button
                    onClick={() => setPassportValid('yes')}
                    className={`px-8 py-3 rounded-lg border-2 transition-all ${
                      passportValid === 'yes'
                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {passportValid === 'yes' && '✓ '}Yes
                  </button>
                  <button
                    onClick={() => {
                      setPassportValid('no');
                      // Reset passport applied state when switching to no
                      setPassportApplied('');
                    }}
                    className={`px-8 py-3 rounded-lg border-2 transition-all ${
                      passportValid === 'no'
                        ? 'border-gray-500 bg-gray-50 text-gray-700'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Conditional question when passport is not valid */}
              {passportValid === 'no' && (
                <div className="animate-fade-in">
                  <h4 className="text-lg font-semibold mb-6">
                    Have you applied for a passport?
                  </h4>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setPassportApplied('yes')}
                      className={`px-8 py-3 rounded-lg border-2 transition-all ${
                        passportApplied === 'yes'
                          ? 'border-blue-500 bg-blue-50 text-blue-600'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {passportApplied === 'yes' && '✓ '}Yes
                    </button>
                    <button
                      onClick={() => setPassportApplied('no')}
                      className={`px-8 py-3 rounded-lg border-2 transition-all ${
                        passportApplied === 'no'
                          ? 'border-gray-500 bg-gray-50 text-gray-700'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* English Test Question */}
              <div>
                <h4 className="text-lg font-semibold mb-6">
                  Have you appeared for IELTS/TOEFL or any English proficiency test?
                </h4>
                <div className="flex gap-4">
                  <button
                    onClick={() => setEnglishTest('yes')}
                    className={`px-8 py-3 rounded-lg border-2 transition-all ${
                      englishTest === 'yes'
                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {englishTest === 'yes' && '✓ '}Yes
                  </button>
                  <button
                    onClick={() => setEnglishTest('no')}
                    className={`px-8 py-3 rounded-lg border-2 transition-all ${
                      englishTest === 'no'
                        ? 'border-gray-500 bg-gray-50 text-gray-700'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Next Button */}
              <div className="flex justify-end pt-8">
                <button 
                  onClick={handlePassportTestNext}
                  className="btn-primary px-12"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 7: Finance Page */}
        {currentStep === 7 && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(6)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Prev</span>
              </button>
            )}

            <div className="space-y-12">
              {/* Budget Question */}
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gray-900">
                  What Is The Approximate Budget You Have In Mind Per Year?
                </h2>
                <p className="text-gray-600 mb-8">Tuition Fees + Living Cost Included</p>
                
                <div className="mb-8">
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full input-field"
                  >
                    <option value="">Select</option>
                    <option value="20-30">₹20-30 lacs</option>
                    <option value="30-40">₹30-40 lacs</option>
                    <option value="40-50">₹40-50 lacs</option>
                    <option value="50-60">₹50-60 lacs</option>
                    <option value="60+">₹60+ lacs</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-2">
                    Minimum budget to study in United Kingdom is <strong>65 lacs*</strong>
                  </p>
                </div>
              </div>

              {/* Funding Question */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  How Do You Plan To Fund Your Education?
                </h2>
                
                <div className="mb-8">
                  <select
                    value={funding}
                    onChange={(e) => setFunding(e.target.value)}
                    className="w-full input-field"
                  >
                    <option value="">Select</option>
                    <option value="self-funded">Self Funded</option>
                    <option value="family-support">Family Support</option>
                    <option value="education-loan">Education Loan</option>
                    <option value="scholarship">Scholarship</option>
                    <option value="combination">Combination of Above</option>
                  </select>
                </div>

                <p className="text-sm text-gray-600 mb-8">
                  (*Course Fees Vary From Courses & University)
                </p>

                {/* Next Button */}
                <div className="flex justify-end">
                  <button 
                    onClick={handleFinanceNext}
                    disabled={!budget || !funding}
                    className="btn-primary px-12"
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="flex justify-center gap-8 mt-12 text-green-600 font-semibold">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>SOP/LOR Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Certified Counsellors</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 8: Academics Page */}
        {currentStep === 8 && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <button
              onClick={() => setCurrentStep(7)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Prev</span>
            </button>

            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2">Great! Let&apos;s move to education</p>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">What&apos;s Your Academic History?</h2>
              
              <div className="space-y-8">
                {/* 10th Class */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Enter Your 10th %</label>
                    <input
                      type="text"
                      placeholder="e.g. 93"
                      value={academics.tenth.percentage}
                      onChange={(e) => setAcademics(prev => ({
                        ...prev,
                        tenth: { ...prev.tenth, percentage: e.target.value }
                      }))}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year Of Passing</label>
                    <input
                      type="text"
                      placeholder="YYYY"
                      value={academics.tenth.year}
                      onChange={(e) => setAcademics(prev => ({
                        ...prev,
                        tenth: { ...prev.tenth, year: e.target.value }
                      }))}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Curriculum Board</label>
                    <select
                      value={academics.tenth.board}
                      onChange={(e) => setAcademics(prev => ({
                        ...prev,
                        tenth: { ...prev.tenth, board: e.target.value }
                      }))}
                      className="input-field"
                    >
                      <option value="">Select</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                      <option value="IB">IB</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* 12th Class */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Enter Your 12th %</label>
                    <input
                      type="text"
                      placeholder="e.g. 88"
                      value={academics.twelfth.percentage}
                      onChange={(e) => setAcademics(prev => ({
                        ...prev,
                        twelfth: { ...prev.twelfth, percentage: e.target.value }
                      }))}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year Of Passing</label>
                    <input
                      type="text"
                      placeholder="YYYY"
                      value={academics.twelfth.year}
                      onChange={(e) => setAcademics(prev => ({
                        ...prev,
                        twelfth: { ...prev.twelfth, year: e.target.value }
                      }))}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Curriculum Board</label>
                    <select
                      value={academics.twelfth.board}
                      onChange={(e) => setAcademics(prev => ({
                        ...prev,
                        twelfth: { ...prev.twelfth, board: e.target.value }
                      }))}
                      className="input-field"
                    >
                      <option value="">Select</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                      <option value="IB">IB</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* 12th English Score */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">12th English Score</label>
                    <input
                      type="text"
                      placeholder="Only for UK"
                      value={academics.englishScore}
                      onChange={(e) => setAcademics(prev => ({
                        ...prev,
                        englishScore: e.target.value
                      }))}
                      className="input-field"
                    />
                  </div>
                  <div></div>
                  <div></div>
                </div>

                {/* Next Button */}
                <div className="flex justify-end pt-8">
                  <button 
                    onClick={handleFinalSubmit}
                    className="btn-primary px-12"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 9: Thank You Page */}
        {currentStep === 9 && (
          <div className="animate-fade-in max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Yay! Thank You For Submitting Details!
              </h2>
              <p className="text-gray-600 mb-6">
                Now, hop over to your Dashboard - Your hub for a stress-free study abroad journey
              </p>
              
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium mb-8 transition-colors">
                Go To My Dashboard
              </button>

              {/* Feature highlights */}
              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Manage your profile</h4>
                    <p className="text-sm text-gray-600">& get better recommendations</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Dedicated Student Counsellors</h4>
                    <p className="text-sm text-gray-600">to answer your questions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Upload Required Documents</h4>
                    <p className="text-sm text-gray-600">& make the process seamless</p>
                  </div>
                </div>
              </div>

              {/* AdmitVerse Essential promotion banner */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Studying abroad? Don&apos;t forget to pack smart.</h3>
                    <p className="text-sm mb-4 opacity-90">
                      Everything you need to move abroad—curated, student-approved, and delivered
                    </p>
                    <button className="bg-lime-400 text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-lime-300 transition-colors">
                      Pack Smart with AdmitVerse Essential →
                    </button>
                  </div>
                  <div className="ml-6">
                    <div className="w-24 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}