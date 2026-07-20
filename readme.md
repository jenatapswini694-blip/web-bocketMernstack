sylabus of your training:-

1.HTML (Structuring the website)
2.CSS(styling the web pages)
    -Bootstrap(ligh weight framework)
    -Tailwind (light weight framework )
3.Javascript (Buildng logic / function)
    -react js (library of JS)
    Next js (Framework of React JS)



Backend part ->

  4.Node JS
    - Express JS(framework)

    Database part->

    5.MongoDB
     -Mongoose
    
    API Integration & Security ->

6.restful API integration
7.Authentication & Authorization 

- HTML :-

- HTML stands for Hyper text markup Language .
-It is used for structuring the websites.
-HTML is a markup language because HTML contain the skeleton structure of a web page also it builds on tags so that why we tell them HTML is a markup language .
-all the HTML written through some tag lines.
- the main element /tag of HTML is <html>.

HEAD:-

-in head tag we have some tag like <title> & some meta elements .
-<title> tag contain our website title on the little bar .
-meta elements helps us to create responseive with screen size .
-we also attactched some external style sheet link in that head tag.

BODY :-
- Body contain all the page structure of a web page . 
-We can design & development all things in the body parts .

Heading:-

-heqding is amajor element in our HTML page.
- there are 6 types of header are there (h1-h6).
-<h1> is the bigger heading and <h6> is the smaller heading .

Paragraph :-

-paragraph play a major role in describe our data or information briefly.
it is denoted by a element <p>.

Break :-
- it is used to break the line and creating a new line .
-it is denoted by <p>.


Horizontal:

-it is used for creating a horizontal line.
-it is denoted by <hr>.
-it is also a single tag.

Image Tag:-

-When we put a image in our website we just need a <img> tag for put our image .
-<img> also is a sigle tag.
-In that <img> tag we have some elements to configure our image in a right direction so we need some attributes.
-attributes means it's an behaviour of an HTML element.
-in <img> tag we have some attributes like ,
  ->src(image source)
  ->alt(alternate of the image )
  ->height(image height)
  ->width(image width)


  HTML Formatting :-

  -to format our text in a proper way.
  - there are 10 types of formatting are present.

  1.<b> -> bold the text
  2.<i> -> italic the text
  3.<em> -> emphasized the text
  4.<small> -> smaller the text
  5.<ins> -> inserted the text
  6.<del> ->deleted the text
  7.<mark> -> marked the text
  8.<strong> -> stronger the text
  9.<sup> -> superscript the text
  10<sub> -> subscript the text 

 HTML Table:-

  -As we draw a normal table to maintain our data html data a table like structure .
  -<table>is a main of html table .
  -Inside html table we have 
    <tr> -> table row
    <td> -> table data 
    <th> -> table heading

ex.

 sl.no.  name        salary     
 1       srilipta    25000
 2       jinu        26000
 3       sudho       27000
 4       Tapu        24000

 HTML List :-

 - As our day to day when we store some data inside a proper format that w called as list ofa data.
 - Html also provide alist to store spome data inside it.
 - In html there are 2 types of list are there ....

   -1. unordered list 
   -2.ordered list

   1.unordred list-
- When we store that data in an un-organisd form that called our unordered list.
- it denoted by the symbol by <ul>.
- Inside <ul> tag we habe <li>. (<li>) is for list item.

   2.ordered list -
- When we store that data in a organised form that called ordered list.
- That denoted by <ol>.
- Inside <ol> tag we have <li> tag. (<li>)- for list item.

ex.

-my fav. skills are ->(UL)
   -HTML
   -CSS
   -JS

-my fav. hobbies are->(OL)
   1.read novels
   2.dancing
   3.singing

Block level element & inline element in HTML:-

->Block level element-

-a block llevel is  always stats on   new line , amd the browser automatically add some sapce before and after the element.
-a block level elemnt always takes up the full width available .

ex. <div>.<p>,<main>,<form>,<section>. etc.....

->Inline Element:-

An inline element does not strts on a new line .
-An inline elemtent only takes up as muh with as necessary.

ex <span>,<label>,<button>,<sup>,<sub> etc....

Form in HTML:-

-An HTML form is used to collect from some user input for the data storage purpose.
-<Form> is the main tag of the HTML form.
-Inside <form> we have lavel and input tag for take the user input.
-there are some input tags like ->

  1.<input type="text">
  2.<input type="button">
  3.<input type="checkbox">
  4.<input type="color">
  5.<input type="date">
  6.<input type="email">
  7.<input type="file">
  8.<input type="hidden">
  9.<input type="image">
  10.<input type="month">
  11.<input type="number">
  12.<input type="password">
  13.<input type="radio">
  14.<input type="range">
  15.<input type="search">
  16.<input type="submit">
  17.<input type="time">
  18.<input type="url">
  19.<input type="week">
  20.<input type="tel">

  semantic tag in HTML ->

-writing a semantic markup means understanding the hierarchy of your content and how both are mechanism will work on a web browser.
-most common semantic tag are...
  1.header
  2.main
  3.nav
  4.section
  5.article
  6.aside
  7.footer etc...
 
 CSS:-

-css stands for cascading style sheet.
-it is used for the designing and styling our web pages.
-CSS id not a programming language , it's a styling language .

Selector{
    properties: value;
}

ex.

h1{
    color:blue;
}

-in the above example h1 is the selector, color is the properties and red is the value of the properties.
-There are 3 types of CSS are present, like...
  1.inline CSS
  2.Internal CSS
  3.External CSs

1.inline CSS->
-We used inline css inside the tag name.
-inline css ave hihghed priority by compare with other types of CSS.
-We can put our styling by creating a "style" attributeinside the tag.

2.Internal CSS->
-We use internal css insi de <head> tag, by creating a <style> tag inside it.
-Internal css is used in many cases for small codebase.

3.External CSS->
- we used external css by creating by separate css file and link that file in our HTML page.
-we can link the external css by <link>tag.
- it is most popularly used because everyone wants to se the clean code so all files have to be separated.

Selectors in CSS:-

-we used css selectors for selecting an html element for the shake of designing.
- there are basically 5 types of selectors are there...

  1. Id selectors ->
   -it is a type of selector that used for unique design.
   -it is denoted by "#".

  2. Class selectors ->
   -it is a type of selector that used for similar design in multiple element.
   -it is denoted by ".".

  3. Group selectors ->
   -group selector is a type of selector  that used for designing more than one element by creating a group.
   -it is denoted by",".
  
  4. Universal selectors ->
  -- it ia a type of selector that used for designing whole html element in a single design.
  - it is denoted by "*".

  5. Element selectors ->
  -it is a selector that use for design single single element separatelly.

  
practice task:-

1- create a simple div with an "box".add some text content inside div.set its background color to "blue".
2-create 3 heading with h1,h2.h3. give them all a class "heading" an set color of heading to "red" 

properties in css->

  1.color:red/blue/green etc...
  2.background-color: red/green/blue etc...
  3.text-align:left/right/center...
  4.text-decoration:underline/ overline/line through
  5.font-weight:normal/bold/bolder/100/300/200...
  6.font-family :italic/scan-sarif/roboto/cursive/san-sari/monospace
  7.line-height:1/2/3/4/5 etc....
  8.text-transform:uppercase/lowercase/capitalize etc...

Box Model in CSS:-

-Box model is used for properly placed the element in the right direction.
- it measures all the size of that perticular element in place them.
- there are 5 types of box model are there 
  1.height
  2.width
  3.border(border-radius)
  4.margin(left,right,top,buttom)
  5.padding(left,right,top,bottom)

Display properties in CSS:-

-We used display property to showcase our element in a proper form to dispaly.
-thre are 4 types display property-
  1.display-inline ->
  -it takes only the space required by the element.

  2.display-block->
  -takes full space available in width.

  3.display-inline-block->
  -similar to display inline but difference is that we can apply padding over here.
  
  4.display-none->
  -to remove element from the document flow . (none-nothing).

Flex-box in CSS->

  -we can use css flex-box to create one dimensional designin a single page.
  -flex-box have some properties->
    1.display flex
    2.flex-direction:row/row-reverese/column/column-reverse
    3.justify-content:center/space-between/space even/space around
    4.align item:center/top/buttom
    5.flex-wrap:wrap/no-wrap

  Grid-Layout incss->

  - css grid lay  out is 2dimensional  layout system for the web.  
  - a grid is a collection of horizontal and vertical lines  creating a pattern against which we can line up our design element.
  -some imp. properties of grid layout ->

    1.display:grid
    2.grid:template-collumn:repeat(4,1fr)/100,200,300;
    3.grid-gap:20px/30px etc..
    4.grid auto rows: 100px,200px etc....

CSS units :-

-basically there are multiple units in css but we will discuss somde im.units ->
    1.px(pixel)-fixed

    2.%(percentage)-percentage is fully depends upon their parent element
     ex.
     rakesh - 100 -> 20% -> 20
     bikash-1000 -> 20% -> 200

    3. vh(viewport height) & vw (viewport width) -> it will increase or decrease their size as per the  screen size.

    4.vmax(viewport maximum) -> if the screnen size can be squized to a hone screen so our content can be small so it break that and create  a new line of content.

    5.em & rem(robot unit of css) -> we can handle all the tag by a root element/tag so that it would be feasible for our content.

html-semtic tags
css-animation(scale,skew,rotate,etc..),position property keyframes,position property

position property in css->

-the position property specify te type of positoning method used for an element.
-there are 5 types of properties are there.....

      1.Static ->default value , not change their value.
      2.Relative ->the element is positioned relative to it's normal position. 
      3.Absolute ->the element is positioned relative to its ancestors.
      4.Fixed ->the element is positioned relative to the browser window.
      5.Sticky ->the element is positioned based on the user scroll position.

Animation in css ->

-Animation (transition) :- to change the step of an object
-Transition enables you to defie the transition between 2 states of an element.
some important transition properties are ->
    1.transition-property-> property you want to transition(font-size,color,bg color)
    2.transition-duration->2s/3s/4s etc...
    3.transition -timing -funtction-> ease0in,ease-out/ease-in-out/linear/step(4)etc...
    4.transition-delsay->2s/3s/4s etc...;

-Transition shorthand(property name/duration/timing-function/delay)
   transition: font size 2s ease -in 5s;

Animation(Transform) ->
-it is used to apply 2d & 3d transformation to an element.
   1.Transform (rotate) ->
    - transform: rotate (45deg/90deg etc..)
    -rotate: 45deg
    -rotatex:45deg
    -rotatey: 45deg
    -rotatez: 45deg
   2.Transform(scale) ->

     - transform: scale(2/3 etc...)
     - transform: scale(1,2)
     - transform: scalex(0.5)
     -
   3.Transform(skew) -> 

     - transform: skew(45deg);
     - transform: skewx(45deg);
     - transform: skewy(45deg);
     - transform: skewz(45deg);  

Animation Keyframe ->

-it is a special css rule that difined in a different stages of an animation over the time.

syntax :-

@keyframe spinscale{
  0%{
       transform: rotate (0deg) scale (1);
  }
  50%{
       transform: rotate(180deg) scale(1.5);
  }
  100%{
       transform: rotate (560deg) scale(2);
  }
}

in keyframes the properties aree ->

 -animation-duration 
 -animation-timing-function
 -animation-delay
 -animation-iteration count
 -animation-direction
 
 NOTE :- @keyframe is the heart of css animation.



rest topic->

HTML- sematic tags
CSS-key-frames animations


JAVASCRIPT ->

-javascript used for creating logic and function of a web page.
-It is a highh level programming language,used in both client side (fronted)as well as server side (backend).
-it is comes from echma script so we see the latest version of javascript in terms of echma script.
-the latest version of javascript is ES16 .
-Node js is is the runtime environment of javascript.

Variable and javascript ->

-variable is a container to store some digital data inside it.
-In javascript there are 3 types variables are there -

  1.var ->
   - var is type of variable which is used for changing the variable in later stage.
   -var is used in folder browser so now in these days we will dont't use the most of the cases.
   -var does'nt used inside function.
   -it is a global scope.

  2.let ->
   -let is atype of variable which is also used for changing the variable value in later stage .
   -let is a block scope/function scope. so we have been used let most of  cases.
   -let used outside function .

  3.const(constant)
  
rules for creating the variable name -> 
 
-variable names are case sensative like "a" and "A" is different. 
only letter ,digits,underscore and special charaacter is allowed.
(Don't keep white space over here.)
-only letter,underscore or special charactter should be the 1st character only.
- reserved word cant't be a variable name.
ex. for, while,var,let,console etc...

datatypes of javascripts ->
-it is a attribute associated with a piece of data that tells a computer system how to interprete it's value.
in datatype we use "typeof" operator to know what type of datatype  you know.
-mainly in javascript there are 2 type of datatype are there ->
  1.primitive datatype->
     -in javascript there are 7 type of primitive datatype are there ->
     1.number -> it is a datatype those it contain somme numerical value.

     2.boolean -> in boolean datatype we got boolean value like true and false

     3.null -> nothing

     4.bigInt -> big integer value

     5.string -> sequence of character

     6.symbol -> in symbol we got 1 symbol of more than 1 value

     7.undefined -> the data is not defined
  
  2.non-primitive/reference datatype ->
    - it is a type of datatype which can hold multiple element  in a single frame .
    -there ere 3 type of datatype -
      1.array -> array is a collection if similiar type of data stored in contigious memory location.
                -array index starts from "0".
                ex. let arr = [23, 34,45,56,67,etc...]
      2.object -> it is reference datatype where we can store more than one element in a single frame.
              -mainly object are working on (key: value) pair.
              ex. 
               let hari = {
                "name" : "hari sir",
                "phone-no" : 1234556789,
                "address" : "bhubaneswar",
                "carrier" : "good"
               }

          -in the above example left hand side are the "key", right hand side are the "val

      3.function -> is a block of code that perform specific task.
                 - function reduced code complexity ,time and space complexity.

                 syntax :-


Function calling ->

my_shedule()
my_shedule()


operator on js ->

-operator are key features to do some task or operate some task .
-ex. A + B
-in the above example A & B are the operands & "+" sign is our operator.
-in javascript , there are 5 types of operators are there ->
    1.Arithmetic operator -> (+ , - , / , * , ++ )
    2.Assignment Operetor ->(-- , +- , -- , -+ , /- , %- , ++- )
    3.Comparision operator -> (-- , !-- ,--- , < , > , <- , >- )
    4.Logical operator -> Logical AND (&&) , Logical OR (||) , Logical NOT (!)
    5.Unary operator -> increment (++) , decrement (--)                      


Conditional Statement ->

-  to implements of condition in the code.
- there are 3 types of conditional statement are there...

   1.if-condition ->  if condition is true then statement is true.
       syntax :-  

   2.if-else condition -> if condition is true then statement is true otherwise false.
       syntax :-

       if(condition){
        statement
       } else{
        statement
       }

   3.if-elif condition -> it's check the condition multiple time where the condition is true its returns the statement.

      syntax ;-

      if (condition){
        statement
      } else if (condition){
        statement
      } else { //default condition
        statement
      }
   
   practice task->
   write a code which give grades to studens accordingg their scores.

   1.90-100
   2.80-89
   3.70-79
   4.60-69
   5.50-59
   6.0-49(fail)

Loops in Javascripts ->
loops are used to execute a piese of code again and again .
there are  5 types of loops are there ......

 1.for loop ->
   syntax :-
    
    for(initialization; condition; updation){
      statement
    }

    ex. we want to print "javascript" 5 times...

    for (let i=1 <= 5; i++){
      console.log("javascript")
    }

    working ->

    i= 1 -> javascript
    i= 2 -> javascript
    i= 3 -> javascript
    i= 4 -> javascript
    i= 5 -> javascript

 2.while loop ->
   syntax :-

   initialization;
   while(condition){
    statement
    updation
   }

 3.do-while loop ->

   syntax :-

   initialization
   do{
    statement;
    updation;
   }while(condition)


 4.for-in loop -> it iteration on string and array
 5.for-of loop -> it iteration on objects.

 Strings in javascript ->basically strung is a seqwuence of charecter usded to represent text.
 - create a string -> let str = "web bocket"
 - we calculate the string length -> str.length prope .
 -we calculate the string index -> str[0],str[1],str[2] etc.....

 strng literals ->

 - it's a way to have embedded expression in string.
 -it's denoted by  

 string interpolation ->
-to create  string by doing substition of placeholder.
-ex. -> string text ${expression} string text.

escape symbol in sytring ->

  1.\n -> new line 
  2.\t -> new tab

  string methods :-

  1.str.toUppercase()
  2.str.toLowercase()
  3.str.trim()
  4.str.slice(start,(end-1))
  5.str1.contact(str2)
  6.str.replace(oldval, newval)
  7.str.replaceAll(oldval,newval)
  8.str.charAt(inx)

  Array in javascript ->

  - array is a collection of items.
  - Ex. - let arr = ["iron man" , "bat man , "spyder man"]
  -array index starts from "0".
  -indexing of array -> arr[0] , arr[1] etc...

  Looping over an array ->

  -loop -> iteration
  -syntax -> for (i =0 ; i< arr.lenght(); i++){
    statement
  } 

  methoda of array ->

  1.push() -> add an element to end of an array
  2.pop() -> remove from the end of the array
  3.tostring() -> covert array to string
  4.concat() -> add or more array / join multiple array
  5.unshift() -> remove an element to the start of an array
  6.shift() -> remove an element to the start of an array
  7.slice()-> return a piece of the array
  8.spice() -> change original array (add,remove,replace)

  practice task->
1. for a given array with marks of students -> [78,90,54,32,98,25,70]. find the avaerage marks of the students.
2. foe a given array with price of 5 items -> .all items have an offer of 10% off them.change the array to store finalprice after applying offer.


function in javascript ->

- it is a bloclk of coide that perfornm a specific task , can be invoked or called whenever we need.

  ex. (in-build function)

1.console.log("hello") -> in this code .log() is a function
2."abc".toUppercase() -> in this code.toUppercase() is a function
3.[1,2,3].push(4) -> in this code .push() is a function 

-there are 2 types function in a javascript ..
1. n0rmal function -> 2 types....
           (1)type A function = 

              //function creation ->

           syntax:- function function_Name(){
                     //do some task
                    }

            (2)type B function = 
           
              //function creation ->

             syntax :- function_Name(parameter_1,parameter_2)

2.arrow function ->
-it is a compact way of writing a function.
-it uses map() function to retrieve the backend data , filtrr() function for filterise our data etc ...
  
              //function creation ->

              const function_Name = (param_1,param_2) =>{
                 // to do some task
        
          //function calling ->
            
             function_Name(arg_1.arg_2)

             normal function -> 
               function sum(a+b){
                return a+b;
               }
              
              sum(2,3)

              arrow function ->
              
              const sum += (a,b)=>{
              return a+b;
              }
              sum(2,3)


1. create a function using the "function" keyword that takes a string as a arguement & return the number of vowels in that string.(TCS).

Map Method/function in javascript ->

- create a new array with result of some operation, the value it's callback return are used to form a new array . Noramally new array by calling the function in every array element.
- map does'nt change the original array.
-it doesn't execute the function for empty array.

-syntax:-

   arr.map(callbackFunction(value,index,array))

Filter Method/function in js->
-create a new array of that gives true for a condition/filteration.
-ex. all even array in the given digits.


let newArr = arr.filter((val) => {
  return val % 2 === 0 ;
})

For Each loop in array :
 syntax:-
    arr.forEach(callback function)

  -callbackFunction -> it is a finction to execute for each element in the array.
  -callbackFunction is a function that passed as an arguement of another function.

Advance js ->

1.DOM
2.EVENT & HANDLING
3.SYNC & ASYNC CODE(promise,then,catch,async & await)
4.API handling

# DOM in javascript ->
-DOM stands for document object model.
-when a web page is loaded, the browser created a document object model of that page.
-The HTML dom model is constructed as a tree like structure.

Windows -> document -> HTML -> HEAD -> meta tags & title
                            -> body -> h1,h2,img etc....


why we use DOM in javascript ->
-javascript can change all the HTML element in the page.
-Javascript can create , delete or edit any HTML page directlly through DOM.
-javascript can also access css styling directly.

Window object->

-the window object represents an open window in a browser.
-it is a browser objectnnand it automatically created by  browser.
-it also a global object with lots of properties & methods.


DOM Manipulation->

1.selecting with ID -> (prompt )-> document.getElementById("myID")

2.selecting with class -> (prompt) -> document.getElementByClassName("myClass")

3.selecting with Tag -> (prompt) -> document.getElementByTagName("p")

4.Query Selector ->

   -document.querySelector("id/class/tag)
   -document.querySelectAll("id/class/tag)

5.Attribute ->

   -getAttribute(attr) -> to get the attribute value
   -setAttribute(attr,value) -> to set the attribute  value

6.Insert Element ->

  -node.append = adds at the end of the node(inside)

   -node.prepend = add at the start of the node (inside)

   -node.after = adds after the node (outside)

   -node.before = adds beforev the node (outside)

7.Delete Element ->

  node.remove(ele) -> remove the node .


event in javascript ->

-the change between the state of an objectis known as event.
-some famous event are 
  1.mouse event ->( click, doubleclick (dblclick), onMouseover)
  2.keyboard event -> (keypress,keyUp,keyDown)
  3.form event -> (submit)
  4.print event ....


Event Handling  ->

-syntax ->  node.event = () =>{
                 // handle here
            }


Event Object ->

-it ia special object that has details about the event.
-all event handler have access to the event objects properties and methods .

- syntax ->
        node.event = (e) => {
             // handle here
        }

-in method you can get -> e.target , e.type etc....             


practice task ->

Q.create a toggle buttopn that changes the screen to dark mode when clicked and light mode when clicked and light mode when click again. 





Asynchronous - 
-Due to 


-Due to synchronous programming , sometimes imp. instruction get blocked 
-asynchronous code execution allows to execute next instruction immidiately and doesn't block the flow.



ex.
console.log("one")
console.log("two")
setTimeout(() =>{
  console.log("three")
},4000) // 4000 ms = 4s
console.log("four")
console.log("five")

output -> one,two,three,four,five, three


callback in js ->

- a callback function which passed as an arguument of another function.

callback hell ->


-it's a nested callback stacked below one after another forming a pyramid structure.
-this style of programming becomes difficult to understand and manage.

promise in js->
-it is a solution of callbackk hell.
-syntax :- 

let promise = new promise ((resolve,reject) => {
  //statement
}) 

- a javascript promise object can be ->>
   1. pending = the result is undefined
   2. the result is a value (fulfiled)
   3. reject = the result is an error

-promise.then((res)=>{
  //statement
})

-promise.catch((err)=>{
  //statement
})

async & await in js =>
-asynnc function myFunc(){
  //statement
}
NOTE=> await pauses the execution of its sorrounding async function until yhe promise is fulfiled .

API handling/fetch API ->

- the fetch API provides an interface for fetching data .
- it uses request & response object
-the Fetch ( methods) is used to fetch a data .
-syntax=>
   let demo = fetch(URL)

   Status code of Node js-

   - 200 - ok
   - 201 -  created
   - 202 - accepted
   - 300 - multiple choice
   - 302- found
   - 400- bad request
   - 402- payment required
   - 404- not found
   - 406- not accept
   - 408- request timeout
   - 500- internal server error
   - 504- gateway timeout

React JS->
 it is a frontend js library.
 - react was develop by fcebook by softerengineer jorden walk.
 - eract is also knowen as react js or ReactJs.
 - basically react is a tool for building UI component.


 Package.json-> uses=>
              -all installation are stored in json.
              -manages project dependacies.
              -enable one-command installation(elimnate heavy files sharing, restores environments instantly ).
              - define project metadata
              
 packagelog.json ->              


 NPX- 
 - npx stands for Node Package Execute.
 - purpose-> it is a npm package runner bundled automatically with npm.
 - function-> it allowes you to run and execute js package directly from the npm,without needing to install them permanently.
 - storage-> it downlode the package to a temporary cache memory,
             execute the command and clear it uo writr after.

 

 NPM:-

 - it stands for  Node Package Manager
 - purpose-> it is the diffult package manager for the node js.
 - function-> it instal,update,and delete js package and dependencies for projrct.
 - storage-> it save package permanently either locally inside our project "node module" folder or globally on our system.


 Racte js History:-

 - latest version of react js is 19.2.7
 - initial release to the public was in july 2013.
 - react js fist introduce or used in 2011 for facebook newfeed feature.
 - initially react gained lost of hate for the mix of js + html  but in later stage or now these days 45% of software developer   used react js as the core library for softwarw developement.
 - "jsx" is the extension of react js.
 - jsx stands for  "javascript XML"  means (javascript + html)

------------------------------------------------------------------------------------------------------------------

- when you are installing react it will have multiple way to install and setup but there are 2 common way that we are using react js is:-
1. CRA(creat-react-app)
2. vite(fastest way to install react js)



File structure of react js folder:-
 
 1. readme.md ->
  -  we will use readme.md for writr some description or out line of our projrct.

 2. package.json-> 
  - it will keep script, version details or dependancy of our projrct.

3. package.lock.json->
 - it basically store dependancy of package.json file.

4. .gitignore->
    - files and folder ignored by git tracking..

5. src(source folder)->
 - it is the main source folder where we can create file and write code in it

6. public:-
 - it is used to take our website logo that show publically and we can store image and vdo in that public folder by creating separate separate folder

7.

About.js                                 contact.js                         App.js                            index.js                   index.HTML
--------                               --------------                     -----------                          -----------              -----------
import React from React           import React from React               import react from Ract                document root.......       (div id=
function About(){                 function contact (){                  import about from'About.js'            root.render()               'root')
  return......                        return.....                       import cintact from'contact_js'         <react>                    <div>
}                                    }                                                                           <app>
export default About               export default contact                 function APP()                         <react>{                                                                             <div> <About>                            
                                                                               <demo>                                                  
                                                                               <div>                                                    
                                                                              } 
                                                                           export default APP
                                                                            
RAFCE -> React Arrow Functional Component Expression
RFCE  -> REact functional Component Expression

