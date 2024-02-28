const member=["NETSANET","Niyat","Rahel","Ruth","Samrawit","Samson","Samuel","wondifraw"];
function GroupMembersList(){
    
    return (
   
    <div className="Greeting" class="new" >
        
        {member.map((member)=>{
            return<h2>{member}</h2>})  }
        
    </div>);
}


export default GroupMembersList;