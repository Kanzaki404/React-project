import React, {useEffect, useState}from 'react'
import ListItem from './list-item/list-item'
import FavItem from './list-item/favorite-list-item'
import axios from 'axios';

let binForPeople = []
let binForPlanets = []
const List = ({tabSelected}) => {
    const [people, setPeople] = useState([])
    const [planets, setPlanets] = useState([])
    const [favoritePeople, setFavoritePeople] = useState([])
    const [favoritePlanets, setFavoritePlanets] = useState([])
    const baseUrl = 'https://swapi.dev/api/people/';
    const baseUrlPlanets = 'https://swapi.dev/api/planets/';

    useEffect(() => {
       callApi(setPeople, baseUrl)
       callApiPlanets(setPlanets, baseUrlPlanets)
       
      // eslint-disable-next-line
    },[]) 
    
    
    function setToFavoriteList (element, from){ // add element to fav
        if(from === "people"){
            console.log('setToFavorite fired')
            if(binForPeople.some(el => el.name === element.name)){ //check if element already exist in the list
                alert('already exists')
            }else{
            let bin = []
            bin = [...bin,element]   // set new element in bin
            binForPeople.push(...bin) // save it in global binForPeople to keep data
            setFavoritePeople([...binForPeople]) //save it to state
            }
        }else{
            console.log('setToFavorite fired')
            if(binForPlanets.some(el => el.name === element.name)){ //check if element already exist in the list
                alert('already exists')
            }else{
            let bin = []
            bin = [...bin,element]   // set new element in bin
            binForPlanets.push(...bin) // save it in global binForPlanets to keep data
            setFavoritePlanets([...binForPlanets]) //save it to state
            }
        }
      
       
    }

    function removeFromFavorite(element,from){ //remove element
        if(from === "people"){
            console.log('here1')
            const indexPeople = binForPeople.indexOf(element) //find index of specific element
            if (indexPeople > -1) {
                binForPeople.splice(indexPeople, 1); //remove if correct index found
              }
            setFavoritePeople([...binForPeople]) // add the new list to state (with element removed)
        }else{
            console.log('here2')
            const indexPlanets = binForPlanets.indexOf(element) //find index of specific element
            if (indexPlanets > -1) {
                binForPlanets.splice(indexPlanets, 1); //remove if correct index found
              }
            setFavoritePlanets([...binForPlanets]) // add the new list to state (with element removed)
        }
       
        
    }

    return (// tabSelected data from nav component chooses which list is shown
        <div className="listComponent">
            
            
            <div className="listItemContainer"> 
                {tabSelected === 'Search' ? <ListItem data={people} dataPlanets={planets} addFav={(element,from)  => setToFavoriteList(element,from)} />: 
                 <FavItem favData={favoritePeople} favDataPlanets={favoritePlanets} remFav={(elem,from) => removeFromFavorite(elem,from)}/>}
               
                
            </div>
        </div>
    ); 
};


let temp2 = []
function callApi(setPeople, baseUrl){
    let temp = []  
    axios.get(`${baseUrl}`)
    .then(res => {
        temp = [...res.data.results]
        temp2.push(...temp)
        setPeople([...temp2])
        console.log(res)
        if(res.data.next !== null){
           callApi(setPeople,res.data.next)
        }
        
       
    })
    .catch(err => console.log('ERROR ---> ' + err))    
}

let temp2Plantes = []
function callApiPlanets(setPlanets, baseUrlPlanets){
    
    //const baseUrl = 'https://swapi.dev/api/people/'
    let temp = []
    axios.get(`${baseUrlPlanets}`)
    .then(res => {
        temp = [...res.data.results]
        temp2Plantes.push(...temp)
        setPlanets([...temp2Plantes])
        if(res.data.next !== null){
            console.log('cameHere')
           callApiPlanets(setPlanets,res.data.next)
        }
        
       
    })
    .catch(err => console.log('ERROR ---> ' + err))    
}

export default List