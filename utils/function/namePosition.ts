export const namePosition = (position:string)=>{

    let namePosition= ''
  
    switch(position){
      case '°':
        namePosition ='tuck'
        break
      case '<':
        namePosition = 'pike'
        break
      case '/':
       namePosition = 'straight'
    }
    return namePosition
  }