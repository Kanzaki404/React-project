import React, {useEffect, useState}from 'react'
import ListItem from './list-item/list-item'
import FavItem from './list-item/favorite-list-item'
import axios from 'axios';


const List = ({tabSelected}) => {
    const [people, setPeople] = useState([])
    const baseUrl = 'https://swapi.dev/api/people/'
    useEffect(() => {
       callApi(setPeople, baseUrl)
       console.log(people)
       

      // eslint-disable-next-line
    },[]) 

    // useEffect(() =>{
    //    filterr(people,input,setPeople)
    // },[input])
    

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
            
            <button className="toTop">To top</button>
            <div className="listItemContainer">
                {tabSelected === 'search' ? <ListItem data={people} />:  <FavItem/>}
               
                
            </div>
        </div>
    );
};


// function filterr(people,input,setPeople){
//     console.log(input)
//     people.filter((e) =>{
//     e.name.includes(input).map(setPeople(e))
//     });
// }

let temp2 = []
function callApi(setPeople, baseUrl){
    
    //const baseUrl = 'https://swapi.dev/api/people/'
    let temp = []
    
    axios.get(`${baseUrl}`)
    .then(res => {
        
        //  people.push(res.data.resulst)
        temp = [...res.data.results]
        temp2.push(...temp)
        setPeople([...temp2])
        console.log(temp2)
        if(res.data.next !== null){
           callApi(setPeople,res.data.next)
        }
        
       
    })
    .catch(err => console.log('ERROR ---> ' + err))    
}

export default List