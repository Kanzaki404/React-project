import React, {useEffect, useState}from 'react'
import ListItem from './list-item/list-item'
import FavItem from './list-item/favorite-list-item'
import axios from 'axios';

let bin2 = []
const List = ({tabSelected}) => {
    const [people, setPeople] = useState([])
    const [favorite, setFavorite] = useState([])
    const baseUrl = 'https://swapi.dev/api/people/'

    useEffect(() => {
       callApi(setPeople, baseUrl)
    //    console.log(people)
      
      // eslint-disable-next-line
    },[]) 
    
    
    function setToFavoriteList (element){ // add element to fav
        console.log('setToFavorite fired')
        if(bin2.some(el => el.name === element.name)){ //check if element already exist in the list
            alert('already exists')
        }else{
        let bin = []
        bin = [...bin,element]   // set new element in bin
        bin2.push(...bin) // save it in global bin2 to keep data
        setFavorite([...bin2]) //save it to state
        }
       
    }

    function removeFromFavorite(element){ //remove element
        const index = bin2.indexOf(element) //find index of specific element
        if (index > -1) {
            bin2.splice(index, 1); //remove if correct index found
          }
        setFavorite([...bin2]) // add the new list to state (with element removed)
        
    }

    return (// tabSelected data from nav component chooses which list is shown
        <div className="listComponent">
            
            
            <div className="listItemContainer"> 
                {tabSelected === 'Search' ? <ListItem data={people} addFav={(element) => setToFavoriteList(element)} />: 
                 <FavItem favData={favorite} remFav={(elem) => removeFromFavorite(elem)}/>}
               
                
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