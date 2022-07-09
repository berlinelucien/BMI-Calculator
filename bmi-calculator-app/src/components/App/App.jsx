import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import BmiForm from '../BmiForm/BmiForm';
import Info from '../Info/Info';
import Bar from '../Bar/Bar';
import { getData, storeData } from '../../helpers/localStorage';

const App = () => {
    const initialState = () => getData('data') || [];
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});


    useEffect(() => {
        storeData('data', state);
        const date = state.map(obj => obj.date);
        const bmi = state.map(obj => obj.bmi);
        let newData = { date, bmi };
        setData(newData);
    }, [state]);
    
}