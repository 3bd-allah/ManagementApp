
export const validateTitle = (title)=>{
    
    if(title.trim().length < 3 || title.trim().length === 0 ){
        return false;
    }
    return true;
}

export const validateDescription= (description) =>{
    if(description.trim().length < 3 || description.length === 0 || description.trim().length > 500){
        return false;
    }
    return true; 
    
}