/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components


// Images
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function data() {
  const [tableData, setTableData] = useState({
    columns: [
      { Header: 'Nom', accessor: 'Nom', align: 'left' },
      { Header: 'Prenom', accessor: 'Prenom', align: 'left' },
      { Header: 'CIN', accessor: 'CIN', align: 'center' },
      { Header: 'EMAIL', accessor: 'EMAIL', align: 'center' },
      { Header: 'USERNAME', accessor: 'USERNAME', align: 'center' },
      { Header: 'PASSWORD', accessor: 'PASSWORD', align: 'center' },
      { Header: 'Accepter', accessor: 'accepter', align: 'center' },
      { Header: 'Refuser', accessor: 'refuser', align: 'center' }
    ],
    rows: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/demande_inscri/getall');
        const fetchedData = response.data;

        const mappedRows = fetchedData.map(item => ({
          Nom: item.nom ,
          Prenom: item.prenom,
          CIN: item.cin,
          EMAIL: item.email,
          USERNAME: item.username,
          PASSWORD: item.password,
          accepter: <button className="btn btn-success" onClick={() => handleAccept(item.id_Demande)}>Accept</button>,
          refuser: <button className="btn btn-danger" onClick={() => handleRefuse(item.id_Demande)}>Refuse</button>,
          // Add other properties as needed based on your table structure
        }));

        setTableData({
          ...tableData,
          rows: mappedRows,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleAccept = async (id) => {
    try {
      // Logic to handle accept action
      console.log('Accept request with ID:', id);
      // Fetch the specific request information
      const response = await axios.get(`http://localhost:8080/demande_inscri/getById/${id}`);
      const requestData1 = response.data;
  
      // Save the request information to the user using /user/save endpoint
      await axios.post('http://localhost:8080/user/save', requestData1);
      console.log('Request accepted and saved successfully!');
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  return tableData;
}
