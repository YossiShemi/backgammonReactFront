import React from 'react';
import Checker from '../checker/Checker';
import OutChecker from '../checker/OutChecker';

const getCheckers = (player,amount,status,canMove) => {

    if (amount!==0) {
        const checkers = [];
        //Get out of board checkers
        if (status ===2){
            for (let i = 0; i < amount; i++) {
                checkers.push(<OutChecker player={player} key={i}/>);                          
            }
        }
        //Get board checkers
        else{
            const count = amount > 5 ? 5 : amount;
            for (let i = 0; i < count; i++) {
                checkers.push(<Checker player={player} key={i}/>);                         
            }
        }
            //If there are more than 5 checlers, mark the first one with number
           if (amount > 5 && status !==2) {
                checkers[checkers.length-1]= <Checker player={player} count={amount} key={5}/> ;    
         
         }
            //If checker can move, mark the first one to move as green
           if(canMove){
            checkers[0]=  <Checker player={player} canMove={1}/>
        }
     
        return checkers


    } else {
        return null;
    }



}
export default getCheckers;