function booked(){
    var name = document.getElementById("name");
    var nameerr=document.getElementById("nameerr");
    if(name.value==""){
      name.style.borderColor='red';
      nameerr.innerHTML='Name is required';
      return false 
    }
    else{
      nameerr.innerHTML="";
      name.style.borderColor='green';
    }
    var phno = document.getElementById("phno");
    var phoneerr=document.getElementById("phoneerr");
    if(phno.value==""){
      phno.style.borderColor = 'red';
      phoneerr.innerHTML='PhoneNo is required';
      return false
     }
    else if(phno.value.length!=10){
      phno.style.borderColor='red';
      phoneerr.innerHTML='Invalid MobileNo';
      return false
     
    }
    else{
      phoneerr.innerHTML="";
      phno.style.borderColor='green';
    }
    var aadhar = document.getElementById("aadhar");
    var aadharerr=document.getElementById("aadharerr");
    if(aadhar.value==""){
      aadharerr.innerHTML='AadharNo is required';
      return false
    }
    else if(aadhar.value.length!=12){
      aadharerr.innerHTML='Invalid AadharNo';
      return false
    }
    else{
      aadharerr.innerHTML="";
    }
    var age= document.getElementById("age");
    var ageerr=document.getElementById("ageerr");
    if(age.value==""){
      ageerr.innerHTML='Age is required';
      age.style.borderColor='red';
      return false
    }
    else if(age.value>100){
      ageerr.innerHTML='Invalid Age';
      age.style.borderColor='red';
      return false
    }
    else{
      ageerr.innerHTML="";
      age.style.borderColor='green';
    }
    var tna=document.getElementById('trainname');
    
    
    if(tna.value==""){
      trainnameerr.innerHTML='TrainName is required';
      tna.style.borderColor='red';
      return false
    }
    else{
      trainnameerr.innerHTML="";
      tna.style.borderColor='green'
    }
    var tn=document.getElementById('trainno');
    if(tn.value==""){
      trainnoerr.innerHTML='TrainNo is required';
      tn.style.borderColor='red';
      return false
    }
    else{
      trainnoerr.innerHTML="";
      tn.style.borderColor='green';
    }
    var g=document.getElementById('gender');
    if(g.value==""){
      gendererr.innerHTML='Gender is required';
      g.style.borderColor='red';
      return false
    }
    else{
      gendererr.innerHTML="";
      g.style.borderColor='green';
    }
    
    
    var jf=document.getElementById('journeyfrom');
    var jt=document.getElementById('journeyto');
    var d=document.getElementById('dat').value;
    if(jf.value == ''){
      journeyfromerr.innerHTML="Journey from is required";
      jf.style.borderColor='red';
      return false
    }
    else{
      journeyfromerr.innerHTML="";
      jf.style.borderColor='green';
    }
    if(jt.value==''){
      journeytoerr.innerHTML="Journey to is required";
      jt.style.borderColor='red';
      return false
    }
    else{
      journeytoerr.innerHTML="";
      jt.style.borderColor='green';
    window.location.href = './ticket.html'
    }
       
    // to get data in object
        const ticket = {
            name : name.value,
            phone : phno.value,
            aadhar : aadhar.value,
            age : age.value,
            journeyfrom:jf.value,
            journeyto:jt.value,
            date:d,
            trainname: tna.value,
            trainno:tn.value,
            gender:g.value
        };
        console.log(ticket);
    // to push object in array
        let bookingarr=JSON.parse(localStorage.getItem('DETAILS')) || [];
       bookingarr.push(ticket);
       console.log(bookingarr);
    // to push array in localstorage
       localStorage.setItem('DETAILS',JSON.stringify(bookingarr)); 
    }