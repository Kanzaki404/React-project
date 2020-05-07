import React, {useEffect, useState}from 'react'
import ListItem from './list-item/list-item'
import FavItem from './list-item/favorite-list-item'
import axios from 'axios';

const List = ({tabSelected}) => {
    //let people = []
    const [people, setPeople] =useState([])
    const baseUrl = 'https://swapi.dev/api/people/'
    
    useEffect(() => {
        let temp = []
        axios.get(`${baseUrl}`)
            .then(res => {
                
             //  people.push(res.data.resulst)
             console.log(res)
             temp = [...res.data.results]
             setPeople(temp)
                console.log(res.data.results)
                console.log(people)
            })
            .catch(err => console.log('ERROR ---> ' + err))    
    },[tabSelected])

   

    // function getData(){
    //     console.log('getData Fired')
    //     axios.get(baseUrl)
    //     .then(res => {
    //         people = res.data.results
    //         console.log(people)
    //     })
    //     .catch(err => console.log('Error ---> ' + err))
    // }
    return (
        <div className="listComponent">
            <div className="searchBar">
                <input />
            </div>
           
            <div className="listItemContainer">
                {tabSelected === 'search' ? <ListItem data={people} />:  <FavItem/>}
            </div>
        </div>
    );
};


export default List