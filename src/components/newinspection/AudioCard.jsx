import React, { useState, useEffect } from 'react';

const InspectionFormCard = () => {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [formData, setFormData] = useState({
    truckSerialNumber: '',
    truckModel: '',
    inspectionID: '',
    inspectorName: '',
    inspectionEmployeeID: '',
    inspectionDateTime: '',
    location: '',
    geoCoordinates: '',
    serviceMeterHours: '',
    inspectorSignature: '',
    customerName: '',
    customerID: ''
  });
  const [isRecording, setIsRecording] = useState(false);
  const [inputComplete, setInputComplete] = useState(false);

  const fields = [
    { name: 'truckSerialNumber', label: 'Truck Serial Number' },
    { name: 'truckModel', label: 'Truck Model' },
    { name: 'inspectionID', label: 'Inspection ID (Auto-incremented)' },
    { name: 'inspectorName', label: 'Inspector Name' },
    { name: 'inspectionEmployeeID', label: 'Inspection Employee ID' },
    { name: 'inspectionDateTime', label: 'Date & Time of Inspection' },
    { name: 'location', label: 'Location of Inspection' },
    { name: 'geoCoordinates', label: 'Geo Coordinates (optional)' },
    { name: 'serviceMeterHours', label: 'Service Meter Hours' },
    { name: 'inspectorSignature', label: 'Inspector Signature' },
    { name: 'customerName', label: 'Customer/Company Name' },
    { name: 'customerID', label: 'CAT Customer ID' }
  ];

  useEffect(() => {
    if (currentFieldIndex < fields.length) {
      const field = fields[currentFieldIndex];
      askForInput(field.label);
    } else {
      alert('Form completed!');
    }
  }, [currentFieldIndex]);

  const askForInput = (fieldLabel) => {
    const utterance = new SpeechSynthesisUtterance(`Please provide input for ${fieldLabel}. Say "stop" when you are done.`);
    window.speechSynthesis.speak(utterance);

    utterance.onend = () => {
      startRecognition();
    };
  };

  const startRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Your browser doesn't support the Web Speech API.");
      return;
    }

    try {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        if (transcript.toLowerCase() === 'stop') {
          recognition.stop();
          setInputComplete(true);
        } else {
          updateCurrentField(transcript);
          setInputComplete(true);
        }
      };

      recognition.onerror = (event) => {
        console.error('Recognition error:', event.error);
        alert('An error occurred while recognizing your speech. Please try again.');
        setIsRecording(false);
        setInputComplete(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } catch (error) {
      console.error('Error initializing speech recognition:', error);
    }
  };

  const updateCurrentField = (value) => {
    const fieldName = fields[currentFieldIndex].name;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const moveToNextField = () => {
    if (currentFieldIndex < fields.length - 1) {
      setCurrentFieldIndex((prevIndex) => prevIndex + 1);
      setInputComplete(false);
    }
  };

  return (
    <div className="card" style={{ width: '25rem', margin: '20px auto', padding: '20px' }}>
      <div className="card-body">
        <h5 className="card-title">Inspection Form</h5>
        <form>
          <div className="mb-3">
            <label htmlFor={fields[currentFieldIndex].name} className="form-label">
              {fields[currentFieldIndex].label}
            </label>
            <input
              type="text"
              className="form-control"
              id={fields[currentFieldIndex].name}
              value={formData[fields[currentFieldIndex].name]}
              readOnly
            />
          </div>
        </form>
        {isRecording ? (
          <p className="text-primary">Listening for input...</p>
        ) : (
          <p className="text-secondary">Waiting for input...</p>
        )}
        {inputComplete && (
          <div>
            <button
              className="btn btn-success"
              onClick={moveToNextField}
            >
              Next Field
            </button>
            <button
              className="btn btn-warning ml-2"
              onClick={startRecognition}
            >
              Retry Input
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InspectionFormCard;
