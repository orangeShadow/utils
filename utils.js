export default {
    empty(obj,path) {         
        if(!obj) return true;
        if(typeof path === 'undefined') return false;        
        if(typeof path !== 'string') throw new Error('Path is not a string');
        if(!path) return true;
        
        let BreakException = {};
        
        try {
            path.split('.').forEach( item => {                        
                if(typeof obj[item]==='undefined') throw BreakException; 
                
                if(!obj[item]) throw BreakException;                 
                obj = obj[item];                            
            });
            return false;
        } catch(e) {
            if (e !== BreakException) throw e;
        }
        
        return true;
    }
};
