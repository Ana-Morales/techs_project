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
            setResSchedule(JSON.parse('[{"Mentor":"David Hose","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":null,"08:40:00":"Olympus","09:00:00":null,"09:20:00":null,"09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":"Wayne Industries","11:00:00":null,"11:20:00":null,"11:40:00":null},{"Mentor":"Fletcher Richman","Day":"Tuesday","Block":"AM","08:00:00":null,"08:20:00":"Pied Piper","08:40:00":"Xavier Corp","09:00:00":null,"09:20:00":"Olympus","09:40:00":null,"10:00:00":null,"10:20:00":null,"10:40:00":null,"11:00:00":null,"11:20:00":null,"11:40:00":null}]'));
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