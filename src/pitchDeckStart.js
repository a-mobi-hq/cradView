import React, { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { jwtDecode } from "jwt-decode";
import API_BASE_URL from './config/apiConfig';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SideMenu2P from './component/sideMenu2P';

const PitchDeck = () => {
  const navigate = useNavigate()
 
  const projectId = localStorage.getItem('nProject');
  const prototypeType = localStorage.getItem('selectedPrototype');

 const access_token = localStorage.getItem('access_token');
   const decodedToken = jwtDecode(access_token);
   const userId = decodedToken.userId;

  return (
    <>
    <div className='container2'>
    <SideMenu2P />
    <div className="main-content">
    
    <div className='const'>
      <div className='row'>
          <div className='col-md-12'> 
            <div className='pitchShow1'>
              <p className='pitTop'>Learn</p>
              <p>publishing and graphic design, Lorem 
                ipsum is a placeholder text commonly used to 
                demonstrate the visual form of a document or a 
                typeface without </p>
            </div>
          </div>

          <div className='col-md-12'> 
            <div className='pitchShow2'>
              <p className='pitTop'>Upload Files</p>
              <p>publishing and graphic design, Lorem 
                ipsum is a placeholder text commonly used to 
                demonstrate the visual form of a document or a 
                typeface without </p>
            </div>
          </div>

          <div className='col-md-12'> 
            <div className='pitchShow1'>
              <p className='pitTop'>Resources</p>
              <p>publishing and graphic design, Lorem 
                ipsum is a placeholder text commonly used to 
                demonstrate the visual form of a document or a 
                typeface without </p>
            </div>
          </div>

      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default PitchDeck;
