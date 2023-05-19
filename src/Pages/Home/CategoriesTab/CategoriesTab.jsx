import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SportCar from './SportCar/SportCar';
import MonsterTruck from './MonsterTruck/MonsterTruck';
import Truck from './Truck/Truck';

const CategoriesTab = () => {

    const [allCars, setAllCars] = useState([])
    // console.log(allCars);
    const [carCategory, setCarCategory] = useState('')
    // console.log(carCategory);

    useEffect(() => {
        fetch('http://localhost:5000/allCars')
            .then(res => res.json())
            .then(data => setAllCars(data))
    }, [])

    const categoryCar = allCars?.filter(car => car.category_id == carCategory)
    // console.log(categoryCar);

    return (
        <Tabs defaultIndex={0} onSelect={(index) => setCarCategory(index)}>
            <TabList>
                <Tab><span className='font-bold text-base hover:bg-slate-500 hover:text-white hover:p-1 duration-500 hover:rounded-md'>Car's</span></Tab>
                <Tab><span className='font-bold text-base hover:bg-slate-500 hover:text-white hover:p-1 duration-500 hover:rounded-md'>Monster Truck</span></Tab>
                <Tab><span className='font-bold text-base hover:bg-slate-500 hover:text-white hover:p-1 duration-500 hover:rounded-md'>Truck</span></Tab>
            </TabList>

            <TabPanel>
                <div className='grid lg:grid-cols-4 gap-4 px-5'>
                    {
                        categoryCar.map(car => <SportCar key={car._id} car={car}></SportCar>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-4 gap-4 px-5'>
                    {
                        categoryCar.map(car => <MonsterTruck key={car._id} car={car}></MonsterTruck>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-4 gap-4 px-5'>
                    {
                        categoryCar.map(car => <Truck key={car._id} car={car}></Truck>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default CategoriesTab;