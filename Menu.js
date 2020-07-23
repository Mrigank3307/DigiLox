class Menu {
    constructor () {
this.button1 = createButton ("Store a new password")
this.button2 = createButton ("Check your passwords")
this.button3 = createButton ("How to use?")

this.storeUsername = createElement ('h3')
this.storePassword = createElement ('h3')
this.storeNote = createElement ('h3')
this.storeKey = createElement ('h3')
this.storeInputUsername = createInput ("")
this.storeInputPassword = createInput ("")
this.storeInputNote = createInput ("")
this.storeInputKey = createInput ("key")
this.submitB = createButton ("Register a new password")

this.howTitle = createElement('h1')
this.howContent1 = createElement ('h3')
this.howContent2 = createElement ('h3')
this.howContent3 = createElement ('h3')
this.howContent4 = createElement ('h3')
this.howContent5 = createElement ('h3')
this.submitted = createElement ('h3')

this.checkKey = createElement ('h3')
this.checkInputKey = createInput ("")
this.usernameE = createElement ('h3')
this.passwordE = createElement ('h3')
this.noteE = createElement ('h3')
this.checkB = createButton ("Check My Password")

this.hideStoring()
this.hideHow()
this.hideCheck ()
    }

    hideStoring () {
        this.storeUsername.hide()
        this.storePassword.hide()
        this.storeNote.hide()
        this.storeKey.hide()
        this.storeInputUsername.hide()
        this.storeInputPassword.hide()
        this.storeInputNote.hide()
        this.storeInputKey.hide()
        this.submitB.hide()
        this.submitted.hide()
    }

    showStoring () {
        this.storeUsername.show()
        this.storePassword.show()
        this.storeNote.show()
        this.storeKey.show()
        this.storeInputUsername.show()
        this.storeInputPassword.show()
        this.storeInputNote.show()
        this.storeInputKey.show()
       this.submitB.show()
       this.submitted.show()
    }

    hideHow () {
this.howTitle.hide()
this.howContent1.hide()
this.howContent2.hide()
this.howContent3.hide()
this.howContent4.hide()
this.howContent5.hide()
    }


    showHow () {
        this.howTitle.show()
        this.howContent1.show()
        this.howContent2.show()
this.howContent3.show()
this.howContent4.show()
this.howContent5.show()
    }

    readTheThing (thingie) {
    var players = database.ref("Data about users/" + login.loginUsername.value() + "/" + "logins" + "/" + this.checkInputKey.value() + "/" + thingie);
    players.on("value",function (data){
    if (thingie === "password") {
        enteredPassword = data.val()
    }
    else if (thingie === "username") {
        enteredUsername = data.val()
    }
    else if (thingie === "note") {
        enteredNote = data.val()
    }
    }) 
}

    hideCheck() {
this.checkKey.hide()
this.checkInputKey.hide()
this.usernameE.hide()
this.passwordE.hide()
this.noteE.hide()
this.checkB.hide()
    }

    showCheck() {
        this.checkKey.show()
        this.checkInputKey.show()
        this.usernameE.show()
        this.passwordE.show()
        this.noteE.show()
        this.checkB.show()
    }

giveHtmls () {
    this.storeUsername.html ("Enter your username for the site")
    this.storeUsername.position (300,50)
this.submitB.position (300,400)
    this.storePassword.html ("Enter your password for the site")
    this.storePassword.position (300 , 120)
    this.storeNote.html ("Enter any notes that you have , such as site name")
    this.storeNote.position (300,190)
    this.storeKey.html ("Enter a keyword, You will have to enter this keyword when you want to access this particular info, This is also case sensitive, Please do not leave this blank")
    this.storeKey.position (300,260)
    this.storeInputUsername.position (300,100)
    this.storeInputPassword.position (300,170)
    this.storeInputNote.position (300,240)
    this.storeInputKey.position (300,350)

    this.howTitle.html ("How to use the DigiLocker")
    this.howTitle.position (600,10)
    this.howContent1.html ("This DigiLocker has 2 features, The 'Store a password' feature and 'Check your passwoord' feature ")
    this.howContent1.position (300,70)
    this.howContent2.html ("The save a password feature requires you to enter your username, password , and site name, You can also add a note to remember anything you want")
this.howContent2.position (300, 170)
    this.howContent3.html ("If you want to update a password, Enter it's keyword and then you can enter the new username and password")
this.howContent3.position (300,230)
this.howContent4.html ("If you want to check a password you have already submitted click the button that says 'Check Your Passwords'")
this.howContent4.position (300,290)
this.howContent5.html ("Enter the key that you entered while entering the site's information , and Presto!")
this.howContent5.position (300,340)

this.checkKey.html ("Please enter the key for which site you are entering")
this.checkKey.position (300,100)
this.checkInputKey.position (300,150)
this.checkB.position (300,185)

this.usernameE.html ("Your username is " + enteredUsername)
this.passwordE.html ("your password is " + enteredPassword)
this.noteE.html ("You note is " + enteredNote)

this.usernameE.position (300,200)
this.passwordE.position (300, 250)
this.noteE.position (300,300)


}

writePass (thing, keys , passing , usersss, notez) {
    var x = "Data about users/" + thing + "/logins/"  + keys + "/"
       database.ref(x).update({
      password:passing ,
      username:usersss,
      note : notez
       });   
 }


    display () {
this.giveHtmls()



this.button1.style ('background-color' , 'transparent')
this.button1.style ('width' , '250px')
this.button1.style ('height' , '100px')
this.button1.style ('font-size' , '25px')
this.button1.position (0,0)

this.button2.style ('background-color' , 'transparent')
this.button2.style ('width' , '250px')
this.button2.style ('height' , '100px')
this.button2.style ('font-size' , '25px')
this.button2.position (0,100)

this.button3.style ('background-color' , 'transparent')
this.button3.style ('width' , '250px')
this.button3.style ('height' , '100px')
this.button3.style ('font-size' , '25px')
this.button3.position (0,200)

this.button1.mousePressed(()=>{
this.sucessfullLogin.hide()
this.showStoring()
this.hideHow()
this.hideCheck ()
})

this.button2.mousePressed(()=>{
    this.sucessfullLogin.hide()
    this.hideStoring()
    this.hideHow()
    this.showCheck()
})

this.button3.mousePressed(()=>{
    this.sucessfullLogin.hide()
    this.hideStoring()
    this.showHow()
    this.hideCheck ()
})

this.submitB.mousePressed (()=>{
    this.submitted.html ("You have successfully registered/updated a new password")
    this.submitted.position (300 ,500)
    this.writePass (login.loginUsername.value() , this.storeInputKey.value() ,  this.storeInputPassword.value() , this.storeInputUsername.value() , this.storeInputNote.value())
})

this.checkB.mousePressed (()=>{
    this.readTheThing("password")
    this.readTheThing("username")
    this.readTheThing("note")

    this.usernameE.html ("Your username is " + enteredUsername)
this.passwordE.html ("your password is " + enteredPassword)
this.noteE.html ("You note is " + enteredNote)

this.usernameE.position ()
})
    }
}