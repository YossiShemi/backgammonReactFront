import React from 'react';
import Checker from '../checker/Checker';
import OutChecker from '../checker/OutChecker';

const getCheckers = (player,amount,status) => {

    if (amount!==0) {
        //checkers array
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

           if (amount > 5 && status !==2) {
            checkers[0]= <Checker player={player} count={amount} key={5}/> ;    
        }
     
        return checkers
    } else {
        return null;
    }



}
export default getCheckers;