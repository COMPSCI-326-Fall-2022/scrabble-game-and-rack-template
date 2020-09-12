'use strict';

function shuffle(array) {
	// Fisher-Yates shuffle, used for random decoder cipher below    
        let m = array.length;
        let t;
        let i;
	
        // While there remain elements to shuffle…                                                                                
        while (m) {
	    
            // Pick a remaining element…                                                                                          
            i = Math.floor(Math.random() * m--);
	    
            // And swap it with the current element.                                                                              
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
	
        return array;
    };

export {shuffle};
