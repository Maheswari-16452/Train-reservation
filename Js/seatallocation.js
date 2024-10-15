 // document.addEventListener("click",()=>{
    // try{
        var details=JSON.parse(localStorage.getItem('DETAILS'))||[];
        console.log(details);
        // }
        // catch(error){
        //     console.error("Error in details from localstorage:",error);
        // }
        let lowerallocated=0;
        let middleallocated=0;
        let upperallocated=0;
    // oru array function panna forEach oru object function panna map
        details.forEach(candidate => {
            if(candidate.age>=60){
                const lowerseat=document.getElementsByClassName('l');
                if(lowerallocated<lowerseat.length){
                    lowerseat[lowerallocated].classList.add('allocated');
                    lowerseat[lowerallocated].innerHTML="Name:"+candidate.name +"<br>"+"Allocated"; 
                    //For seat allocation(in what seat)
                    const allocationNo=lowerseat[lowerallocated].getAttribute('id');
                    console.log(allocationNo);
                    candidate.allocationNo=allocationNo;
                    localStorage.setItem('SEATALLOCATION',JSON.stringify(details));
                    console.log(details)
                    lowerseat[lowerallocated].style.borderColor='black';
                    lowerseat[lowerallocated].style.borderRadius='10px';
                    lowerseat[lowerallocated].style.backgroundColor='whitesmoke';
                    lowerseat[lowerallocated].style.color='black';
                    lowerseat[lowerallocated].style.fontWeight='bolder';
                    lowerseat[lowerallocated].style.border='1px solid ';
                    lowerseat[lowerallocated].style.width='100px ';
                    lowerseat[lowerallocated].style.height='40px';
                    lowerseat[lowerallocated].style.paddingTop='10px';
                    lowerseat[lowerallocated].style.marginTop='20px';
                    lowerseat[lowerallocated].style.textAlign='center';
                    lowerallocated++;
                }
                else{
                    console.log('No lower berths');
                }
            }
            else if(candidate.age>=40 && candidate.age<=59){
                const middleseat=document.getElementsByClassName('m');
                if(middleallocated<middleseat.length){
                    
                    middleseat[middleallocated].classList.add('allocated');
                    middleseat[middleallocated].innerHTML="Name:"+candidate.name +"<br>"+"Allocated";
                   
                    //For seat allocation(in what seat)
                    const allocationNo=middleseat[middleallocated].getAttribute('id');
                    console.log(allocationNo);
                    candidate.allocationNo=allocationNo;
                    localStorage.setItem('SEATALLOCATION',JSON.stringify(details));
                    console.log(details)
                    middleseat[middleallocated].style.borderColor='black';
                    middleseat[middleallocated].style.borderRadius='10px';
                    middleseat[middleallocated].style.backgroundColor='whitesmoke';
                    middleseat[middleallocated].style.color='black';
                    middleseat[middleallocated].style.fontWeight='bolder';
                    middleseat[middleallocated].style.border='1px solid ';
                    middleseat[middleallocated].style.width='100px ';
                    middleseat[middleallocated].style.height='40px';
                    middleseat[middleallocated].style.paddingTop='10px';
                    middleseat[middleallocated].style.marginTop='20px';
                    middleseat[middleallocated].style.textAlign='center';
                    middleallocated++;
                }
                else{
                    console.log('No middle berths');
                }
            }
            else if(candidate.age<=39){
            const upperseat=document.getElementsByClassName('u');
                if(upperallocated<upperseat.length){
                    upperseat[upperallocated].innerHTML="Allocated";
                    upperseat[upperallocated].classList.add('allocated');
                   
                    upperseat[upperallocated].innerHTML="Name:"+candidate.name+"<br>"+"Allocated";
                   
                    //For seat allocation(in what seat)
                    const allocationNo=upperseat[upperallocated].getAttribute('id');
                    console.log(allocationNo);
                    candidate.allocationNo=allocationNo;
                    localStorage.setItem('SEATALLOCATION',JSON.stringify(details));
                    console.log(details);
                    upperseat[upperallocated].style.borderColor='black';
                    upperseat[upperallocated].style.borderRadius='10px';
                    upperseat[upperallocated].style.backgroundColor='whitesmoke';
                    upperseat[upperallocated].style.color='black';
                    upperseat[upperallocated].style.fontWeight='bolder';
                    upperseat[upperallocated].style.border='1px solid ';
                    upperseat[upperallocated].style.width='100px ';
                    upperseat[upperallocated].style.height='40px';
                    upperseat[upperallocated].style.paddingTop='10px';
                    upperseat[upperallocated].style.marginTop='20px';
                    upperseat[upperallocated].style.textAlign='center';
                    upperallocated++;
                }
                else{
                    console.log('No upper berths');
                }
    
    
            }
    
    
        });
    
        const upper = document.querySelectorAll('.u');
        console.log(upper);
    upper.forEach(ele => {
        ele.addEventListener('click', () => {
            console.log(ele.id); 
            details.forEach(val =>{
                if(ele.id == val.allocationNo){
                    Swal.fire({
                        title:"Candidate Detail",
                        text:val.name+ "  "+val.age+ "  "+val.phone+"  "+val.aadhar+"  "+val.journeyfrom+"  "+val.journeyto+"  "+val.date+"  "+val.trainname+"  "+val.trainno+"  "+val.gender,
                        icon:"success"
                    });
                }
            })
        })
    })
        
    
    const middle = document.querySelectorAll('.m');
    // console.log(middle);
    middle.forEach(ele => {
        ele.addEventListener('click', () => {
            console.log(ele.id); 
            details.forEach(val =>{
                if(ele.id == val.allocationNo){
    
                    Swal.fire({
                        title:"Candidate Detail",
                        text:val.name + "   " + val.age + "  "+val.phone + "  "+val.aadhar+"  "+val.journeyfrom+"  "+val.journeyto+"  "+val.date+"  "+val.trainname+"  "+val.trainno+"  "+val.gender,
                        icon:"success"
                    })
                }
            })  
        })
    })
    
    
    const lower = document.querySelectorAll('.l');
    console.log(lower);
    lower.forEach(ele => {
        ele.addEventListener('click', () => {
            console.log(ele.id); 
            details.forEach(val =>{
                if(ele.id == val.allocationNo){
                    Swal.fire({
                        title:"Candidate Detail",
                        text:val.name + "   " + val.age+"  "+val.phone+"  "+val.aadhar+"  "+val.journeyfrom+"  "+val.journeyto+"  "+val.date+"  "+val.trainname+"  "+val.trainno+"  "+val.gender,
                        icon:"success"
                    })
                }
            })
        });
    });
    