import React from 'react';

const DepartmentList: React.FC = () => (
  <div className="container department-list">
    <div className="row">
      <div className="col-md-6 department-item">
        <img src="https://via.placeholder.com/150x50" alt="The Ottawa Hospital" />
        <a href="#">The Ottawa Hospital - Department of Dermatology</a>
      </div>
      <div className="col-md-6 department-item">
        <img src="https://via.placeholder.com/150x50" alt="Humber River Hospital" />
        <a href="#">Humber River Hospital - Department of Anesthesia</a>
      </div>
      <div className="col-md-6 department-item">
        <img src="https://via.placeholder.com/150x50" alt="The Ottawa Hospital" />
        <a href="#">The Ottawa Hospital - Department of Plastic Surgery</a>
      </div>
      <div className="col-md-6 department-item">
        <img src="https://via.placeholder.com/150x50" alt="The Ottawa Hospital" />
        <a href="#">The Ottawa Hospital - Department of Radiology</a>
      </div>
    </div>
  </div>
);

export default DepartmentList;
