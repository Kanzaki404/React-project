import React, {useEffect, useState}from 'react'
import ListItem from './list-item/list-item'
import FavItem from './list-item/favorite-list-item'
import axios from 'axios';


const List = ({tabSelected}) => {
    const [people, setPeople] = useState([])
    const [favorite, setFavorite] = useState([])
    const baseUrl = 'https://swapi.dev/api/people/'

    useEffect(() => {
       callApi(setPeople, baseUrl)
    //    console.log(people)
      
      setToFavoriteList(favorite) // eslint-disable-next-line
    },[]) 
    
    let bin = []
    function setToFavoriteList (element){
        
        console.log('setToFavorite fired')
        bin.push(element)
        setFavorite(bin)
        console.log(bin)
       // console.log(favorite)
    }

    return (
        <div className="listComponent">
            
            <button className="toTop">To top</button>
            <div className="listItemContainer">
                {tabSelected === 'Search' ? <ListItem data={people} addFav={(element) => setToFavoriteList(element)} />: 
                 <FavItem favData={favorite} />}
               
                
            </div>
        </div>
    );
};


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
        //console.log(temp2)
        if(res.data.next !== null){
           callApi(setPeople,res.data.next)
        }
        
       
    })
    .catch(err => console.log('ERROR ---> ' + err))    
}

export default List