// var userinfo = users;
//Raphael Oracion 300263011 Assignment #2
var clickcheck = 0;
var resultsinfo = results;
const totalthings = document.querySelector(`h3`)
totalthings.innerText = `Total ${resultsinfo.length}`


function showContact(listlength,start,end) {
    var thelist = document.querySelector(".contact-list")
    
    if(clickcheck == 0){

    
    for (i = start; i < end; i++) {
        var cfcontact = document.createElement("li")
        cfcontact.className = "contact-item cf"


        var contactinfo = document.createElement("div")
        contactinfo.className = "contact-details"

        var profilepic = document.createElement("img")
        profilepic.className = "avatar"
        profilepic.src = resultsinfo[i].picture.thumbnail
        contactinfo.appendChild(profilepic)

        var uname = document.createElement("h3")
        var fullname = resultsinfo[i].name.first + " " + resultsinfo[i].name.last
        uname.innerText = fullname
        contactinfo.appendChild(uname)

        var contactemail = document.createElement("span")
        contactemail.className = "email"
        var fname = resultsinfo[i].name.first
        var lname = resultsinfo[i].name.last
        contactemail.innerText = `${fname}.${lname}@example.com`
        contactinfo.appendChild(contactemail)

        cfcontact.appendChild(contactinfo)

        var joininfo = document.createElement("div")
        joininfo.className = "joined-details"

        var joindate = document.createElement("span")
        joindate.className = "date"
        var resultdate = new Date(resultsinfo[i].registered.date)
        var thedate = resultdate.toISOString().substring(0,10)
        joindate.innerText = `Joined ${thedate}`
        joininfo.appendChild(joindate)

        cfcontact.appendChild(joininfo)

        
        thelist.appendChild(cfcontact)




    }
    clickcheck = 1
}
else{
    thelist.innerHTML = ""
    clickcheck = 0
    //apparently I have to double click
}

}





