import React, { useEffect, useState } from 'react';
import bci from './images/bc.png'; 
import bro from './images/bro.png'; 
import Header from './component/header';
import Menu from './component/menu';
import SideMenu2 from './component/sideMenu2';
import API_BASE_URL from './config/apiConfig';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { jwtDecode } from "jwt-decode";
import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";

function TimelineView() {

    const navigate = useNavigate();
    const access_token = localStorage.getItem('access_token');
    const decodedToken = jwtDecode(access_token);
    const userId = decodedToken.userId;

    const projectId = localStorage.getItem('nProject');
    console.log(userId);

    const [filterButtonState, setFilterButtonState] = useState(0);
    const [schedulerData, setSchedulerData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

 
  
   
    const mockedSchedulerData = [
        {
          id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
          label: {
            icon: "https://picsum.photos/24",
            title: "Joe Doe",
            subtitle: "Frontend Developer"
          },
          data: [
            {
              id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
              startDate: new Date("2024-04-13T15:31:24.272Z"),
              endDate: new Date("2024-08-28T10:28:22.649Z"),
              occupancy: 3600,
              title: "UI",
              subtitle: "Subtitle A",
              description: "array indexing Salad West Account",
              bgColor: "rgb(254,165,177)"
            },
          ]
        },
        
        {
            id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
            label: {
              icon: "https://picsum.photos/24",
              title: "UI",
              subtitle: "Frontend Developer"
            },
            data: [
              {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2024-07-13T15:31:24.272Z"),
                endDate: new Date("2024-08-28T10:28:22.649Z"),
                occupancy: 3600,
                title: "Project A",
                subtitle: "Subtitle A",
                description: "array indexing Salad West Account",
                bgColor: "rgb(254,165,177)"
              },
             
            ]
          },
    ];

      useEffect(() => {
        // Simulate fetching data from an API
        setSchedulerData(mockedSchedulerData);
      }, []);

      return (

       
       
      

    <div className='container2'>
        
         <div className="main-content">
        
        
         <div className='main-content2' style={{paddingLeft:40, paddingRight:40}}>

        
          <div className='bacWHI'>

          <section style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Scheduler
                data={mockedSchedulerData}
                isLoading={isLoading}
                onRangeChange={(newRange) => console.log(newRange)}
                onTileClick={(clickedResource) => console.log(clickedResource)}
                onItemClick={(item) => console.log(item)}
                onFilterData={() => {
                // Some filtering logic...
                setFilterButtonState(1);
                }}
                onClearFilterData={() => {
                // Some clearing filters logic...
                setFilterButtonState(0)
                }}
                config={{
                zoom: 1,
                maxRecordsPerPage:10,

                filterButtonState:-1,
                }}
            />
         </section>
            
        </div>  
          
         </div>

        
    </div>
</div> 

      );
    }




  export default TimelineView;
