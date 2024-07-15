import React, { useEffect, useState } from 'react';
import { Storage } from '@aws-amplify/storage';

interface Physician {
  name: string;
  imageKey: string;
}

const BASE_PATH = "PostOpCare/PostOpCare/DoctorHeadShots/";

const PHYSICIANS: Physician[] = [
  { name: "Dr. Darren Tse", imageKey: "Darren_Tse.png" },
  { name: "Dr. Corliss Best", imageKey: "Corliss_Best.png" },
  { name: "Dr. Danny Peters", imageKey: "Danny_Peters.png" },
  { name: "Dr. Grayson Roumeliotis", imageKey: "Grayson_Roumeliotis.png" },
  { name: "Dr. Jillian Macdonald", imageKey: "Jillian_Macdonald.png" },
  { name: "Dr. Megan Lim", imageKey: "Megan_Lim.png" },
  { name: "Dr. Paul Beaulé", imageKey: "Paul_Beaule.png" },
  { name: "Dr. George Grammatopoulos", imageKey: "George_Grammatopoulos.png" },
  { name: "Dr. Geoffrey F. Dervin", imageKey: "Geoffrey_Dervin.png" },
  { name: "Dr. Simon Garceau", imageKey: "Simon_Garceau.png" },
];

const PhysicianList: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const urls = await Promise.all(
          PHYSICIANS.map(async physician => {
            const fullPath = `${BASE_PATH}${physician.imageKey}`;
            const url = await Storage.get(fullPath);
            return { [physician.imageKey]: url };
          })
        );
        const urlsObject = Object.assign({}, ...urls);
        setImageUrls(urlsObject);
      } catch (error) {
        console.error('Error fetching image URLs:', error);
      }
    };

    fetchImageUrls();
  }, []);

  return (
    <div className="container physician-list">
      <div className="row">
        <div className="col-12 search-bar">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        {PHYSICIANS.map(physician => (
          <div key={physician.name} className="col-md-6 physician-item">
            <img
              src={imageUrls[physician.imageKey] || 'https://via.placeholder.com/100'}
              alt={physician.name}
            />
            <a href="#">{physician.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhysicianList;
