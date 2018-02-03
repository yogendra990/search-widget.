
export class vanilaSearchWidget{
    constructor(){
        this.message = " this is a test";
        this.ListofItems = ['book','pen','remote', 'keys','baseball', 'backpack', 'speakers', 'notebooks'];
        this.Items = document.getElementById('listOfSelectedItems');
        this.ElementRef = document.getElementById('searchId');
      this.Items.style.display ='none';
      this.Items.style.position = 'absolute';
      this.Items.style.width = '500px';
      this.Items.style.marginLeft = '70px';
      this.Items.style.backgroundColor ='#f9f9f9';
      this.Items.style.boxShadow = '0px 8px 16px 0px rgba(0, 0,0,0.2)';
      this.Items.style.padding = '12px 16px';
      this.Items.style.zIndex = '1';
        this.resetbtn = document.getElementById('resetbtn');
     }    
    onSearch(){       
      
    this.ElementRef.onfocus = (event) => {
        if(this.Items.childNodes.length > 0){
     while(this.Items.firstChild){
         this.Items.removeChild(this.Items.firstChild);
     }
    }
    this.ElementRef.value = '';
    this.Items.style.display = 'none';
    this.resetbtn.style.marginTop = '10px';
    }
   this.ElementRef.onkeydown = (event)=>{        
        if(event.key !== 'Tab' && event.key !=='Escape'){
        if(this.Items.childNodes.length > 0){
            while(this.Items.firstChild){
                this.Items.removeChild(this.Items.firstChild);
            }
            if(this.ElementRef.value === ''){
                this.Items.style.display = 'none'; 
            this.resetbtn.style.marginTop = '10px';
            }
           }else{
            const itemDropDown = document.getElementsByClassName('searchWidgetDropDown-content'); 
            this.Items.style.display = 'none'; 
            this.resetbtn.style.marginTop = '10px';
           }
        }
    }   
this.resetbtn.onclick = ()=>{
   this.ElementRef.value = '';
   if(this.Items.childNodes.length > 0){
    while(this.Items.firstChild){
        this.Items.removeChild(this.Items.firstChild);
    }
   }
   this.Items.style.display = 'none';
}
this.ElementRef.onkeyup= (event)=>{  
  console.log(event.target.value);
    if(event.target.value === ''){
        this.Items.style.display = 'none';
        this.resetbtn.style.marginTop = '10px';
    }
    else{
    const filteredItems = this.ListofItems.filter((value, index) =>{
        if(value.includes(event.target.value)){
            return value;
        }
    });
    filteredItems.forEach((i,k)=>{       
      let li = document.createElement('li');         
      li.innerHTML = '&#8618;'+' '+`${i}`;      
      li.style.cursor = 'pointer';
      this.Items.appendChild(li);
      this.Items.style.display ='block'; 
      this.resetbtn.style.marginTop ='200px';    
    });
}         
}     
  addEventListener('keyup',(event)=>{      
      if(event.key === 'Escape'){
          this.ElementRef.focus();
      }
     if(event.key === 'Tab'){
        //  console.log(document.activeElement === this.resetbtn);
         (this.resetbtn.focus())? this.Items.focus = ()=> { this.Items.style.backgroundColor ="darkGray"} 
                                                     : this.resetbtn.focus = ()=>{ this.resetbtn.style.backgroundColor = 'orange'};
     }
  })     
    }    
}