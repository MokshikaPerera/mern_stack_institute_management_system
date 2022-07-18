import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
import axios from "axios";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const Horizontalchart =() => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
        const options = {
            indexAxis:'x',
            elements:{
                bar:{
                    borderWidth:2, 
                    
                },
            },
            responsive:true,
            plugins:{
                legend:{
                   
                },
                title:{
                    display:true,
                    
                    text:'Staff Count Bar Chart',
                },
            },
        };
        const labels=['Academic','nonAcademic']

        const [data,setData] = useState({
            labels,
            datasets: [
                {
                  label: 'Count',
                  data:[],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(177, 1, 145, 0.8)',
                  
                  
                },
                
               
              ],

        });
       

        useEffect(()=>{
            const fetchData=async()=>{
                const url = 'http://localhost:5000/api/staff/'
                const labelSet = []
                const dataSet1 = [];
                
                fetch(url, {
                    method:'GET'
                }).then(data => {
                    console.log("Api data",data)
                    const res = data.json();
                    return res
                }).then((res)=>{
                    console.log("ressss",res)
                   
                    for (const val of labels) {
                        const data=('http://localhost:5000/api/staff/countDocuments/'+String(val)) ;
                        axios.get(data).then(function(response){
                            dataSet1.push(response.data);
                            setShow(false);
                        })
                    }
                 
                    
                    
                    console.log("data set 1 is :",dataSet1);
                  
                    
                    
                    setData({
                        labels,
                        datasets: [
                            {
                              label: 'Accademic/Non-Accademic',
                              data:dataSet1,
                              borderColor: 'rgb(255, 99, 132)',
                              backgroundColor: '#ffefa6',
                            },
                           
                            
                          ],
            
                    })
                }).catch(e =>{
                    console.log("error",e)
                })
            }
            fetchData();
        },[])
        

   
    return(
       
        <Bar data={data} options={options}/>
        
        
        )
}
export default Horizontalchart;