import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';
import '../styles/uploadFile.css'

const CSVReader2 = ({setResSchedule}) => {

  const handleOnDrop = (data) => {
    const data_list = data.map((row) => row.data);
    const json_data = JSON.stringify(data_list);
    fetch(
        'http://localhost:3033/api/schedule',
        {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json_data,
        }
    )
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setResSchedule(result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

    return (
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
          config={{header: true}}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
    );
}
export default CSVReader2;