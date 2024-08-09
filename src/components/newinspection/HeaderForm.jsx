import React, { useState } from 'react';

const HeaderForm = () => {
  const [inspectionId, setInspectionId] = useState(1); // Auto-increment Inspection ID
  const [formData, setFormData] = useState({
    truckSerialNumber: '',
    truckModel: '',
    inspectorName: '',
    inspectionEmployeeId: '',
    inspectionDateTime: '',
    inspectionLocation: '',
    geoCoordinates: '',
    serviceMeterHours: '',
    inspectorSignature: '',
    customerName: '',
    catCustomerId: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', { ...formData, inspectionId });
    setInspectionId(inspectionId + 1); // Increment the inspection ID
    // Reset form after submission
    setFormData({
      truckSerialNumber: '',
      truckModel: '',
      inspectorName: '',
      inspectionEmployeeId: '',
      inspectionDateTime: '',
      inspectionLocation: '',
      geoCoordinates: '',
      serviceMeterHours: '',
      inspectorSignature: '',
      customerName: '',
      catCustomerId: '',
    });
  };

  return (
    <div className="container">
      <h2 className="my-4">Truck Inspection Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="truckSerialNumber" className="form-label">Truck Serial Number</label>
              <input
                type="text"
                className="form-control"
                id="truckSerialNumber"
                name="truckSerialNumber"
                placeholder="Enter Truck Serial Number"
                value={formData.truckSerialNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="truckModel" className="form-label">Truck Model</label>
              <input
                type="text"
                className="form-control"
                id="truckModel"
                name="truckModel"
                placeholder="Enter Truck Model"
                value={formData.truckModel}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inspectorName" className="form-label">Inspector Name</label>
              <input
                type="text"
                className="form-control"
                id="inspectorName"
                name="inspectorName"
                placeholder="Enter Inspector Name"
                value={formData.inspectorName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inspectionEmployeeId" className="form-label">Inspection Employee ID</label>
              <input
                type="text"
                className="form-control"
                id="inspectionEmployeeId"
                name="inspectionEmployeeId"
                placeholder="Enter Employee ID"
                value={formData.inspectionEmployeeId}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inspectionDateTime" className="form-label">Date & Time of Inspection</label>
              <input
                type="datetime-local"
                className="form-control"
                id="inspectionDateTime"
                name="inspectionDateTime"
                value={formData.inspectionDateTime}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inspectionLocation" className="form-label">Location of Inspection</label>
              <input
                type="text"
                className="form-control"
                id="inspectionLocation"
                name="inspectionLocation"
                placeholder="Enter Location"
                value={formData.inspectionLocation}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="geoCoordinates" className="form-label">Geo Coordinates (Optional)</label>
              <input
                type="text"
                className="form-control"
                id="geoCoordinates"
                name="geoCoordinates"
                placeholder="Enter Geo Coordinates"
                value={formData.geoCoordinates}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="serviceMeterHours" className="form-label">Service Meter Hours (Odometer reading)</label>
              <input
                type="number"
                className="form-control"
                id="serviceMeterHours"
                name="serviceMeterHours"
                placeholder="Enter Odometer Reading"
                value={formData.serviceMeterHours}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inspectorSignature" className="form-label">Inspector Signature</label>
              <input
                type="text"
                className="form-control"
                id="inspectorSignature"
                name="inspectorSignature"
                placeholder="Enter Inspector Signature"
                value={formData.inspectorSignature}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="customerName" className="form-label">Customer Name / Company Name</label>
              <input
                type="text"
                className="form-control"
                id="customerName"
                name="customerName"
                placeholder="Enter Customer/Company Name"
                value={formData.customerName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="catCustomerId" className="form-label">CAT Customer ID</label>
              <input
                type="text"
                className="form-control"
                id="catCustomerId"
                name="catCustomerId"
                placeholder="Enter CAT Customer ID"
                value={formData.catCustomerId}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inspectionId" className="form-label">Inspection ID</label>
              <input
                type="text"
                className="form-control"
                id="inspectionId"
                value={inspectionId}
                readOnly
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HeaderForm;
