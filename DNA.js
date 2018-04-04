//arrays of
var Teachers=Array();
var Rooms=Array();
var Subjects=Array();
var Blocks=Array();


function teacher(name,pref,topics){ //Object teacher
if (topics === undefined) {
          alert("undefinido");
    }
  this.name = name;
  this.pref = pref;
  this.topic=topics;
  this.getInfo= function () {
        return this.name + ' '+ this.topic +' '+ this.pref + '.';
    }
  
}

//example of creating objects

/*var topics=['math', 'science', 'physics'];
var topics2=['arts', 'science', 'music'];
var teacher1 = new teacher("aberto gonzales","night",topics);
var teacher2 = new teacher("gildardo rigoberto", "afternoon", topics2);
Teachers.push(teacher1, teacher2);

document.getElementById("demo").innerHTML = (Teachers[0].name);
document.getElementById("demo").innerHTML = (teacher1.getInfo());
*/

function room(num, place, access, type, cap){ //Object room
  this.num=num;
  this.place=place;
  this.access=access;
  this.type= type;
  this.cap=cap;
}

function subject(name,students,need){ // object subject
  this.name=name;
  this.students=students;
  this.need=need;
  this.doubleBlock;
}

function block(subjectName,teacherName,roomNum,roomPlace, hour, day){ // object block
  this.subjectName=subjectName;
  this.teacherName=teacherName;
  this.roomNum=roomNum;
  this.roomPlace=roomPlace;
  this.hour = hour;
  this.day=day;
}

function dayGenerator(){ //Generate a random day of the week
  var week=["monday","tuesday", "wednesday", "thursday", "friday", "saturday"];
  var rday= Math.floor(Math.random() * week.length);
  return week[rday];
}

function hourGenerator(){
  var rhour = Math.floor((Math.random() * 14)+6);
  if (rhour%2===1){
    rhour++;
  }
  return rhour;
}

function blockCreate(){ //fills block with random possibilities
  var rteacher= Math.floor(Math.random() * Teachers.length); //random array position
  var posTeacher = Teachers[rteacher].name; //get the name of the winner
  
  var rRoom= Math.floor(Math.random() * Rooms.length); //random array position
  var posRoom = Rooms[rRoom].num; //get the number of the winner
  var posPlace = Rooms[rRoom].place; //get the place of the winner
  
  var rSubject= Math.floor(Math.random() * Subjects.length); //random array position
  var posSubject = Subjects[rSubject].name; //get the name of the winner
  
  var day=dayGenerator();
  var hour=hourGenerator();
  
  var newBlock =new block(posSubject,posTeacher,posRoom,posPlace,hour,day);
  Blocks.push(newBlock);
  
  //document.getElementById("last_block").innerHTML = "equis";
  
}
function dayToCoord(day){
  switch(day){
    case 'monday':
      return 1;
    case 'tuesday':
      return 2;
    case 'wednesday':
      return 3;
    case 'thursday':
      return 4;
    case 'friday':
      return 5;
    case 'saturday':
      return 6;
    default:
     return null;
  }
}


var topics=['math', 'science', 'physics'];
var topics2=['arts', 'science', 'music'];
var topics3=['database','filler','another'];
var teacher1 = new teacher("aberto gonzales","night",topics);
var teacher2 = new teacher("gildardo rigoberto", "afternoon", topics2);
var teacher3 = new teacher("gumersindo alvarez","morning",topics3);
Teachers.push(teacher1, teacher2,teacher3);

var room1 = new room (101,13,"yes","lab",40);
var room2 = new room (206,7,"no","room",22);
var room3 = new room (108,7,"yes","room",45);
var room4 = new room (402,9,"no","room",28);
Rooms.push(room1, room2, room3,room4);

var subj1 = new subject("Learning to fly",5,"lab");
var subj2 = new subject("Cuisine 2",12,"kitchen");
var subj3 = new subject("Filler", "25","room");
var subj4 = new subject("Database", "3","room");
Subjects.push(subj1,subj2,subj3,subj4);


blockCreate();
blockCreate();
blockCreate();
blockCreate();
blockCreate();
blockCreate();
blockCreate();
blockCreate();
blockCreate();
blockCreate();
blockCreate();
blockCreate();
blockCreate();
function fillTable(){
  for (i=0; i<Blocks.length;i++){
    var dayName=Blocks[i].day;
    var y= dayToCoord(dayName);
    var x=(((Blocks[i].hour)-6)/2)+1;
    var coord = x.toString() + y.toString();
    document.getElementById(coord).innerHTML = Blocks[i].subjectName + '<br>' + Blocks[i].teacherName + '<br>' + Blocks[i].roomPlace + "-" + Blocks[i].roomNum;
  }

}

//How to fill a timetable ex.
/*function myFunction() {
	var mate = ['2323','kjfhks3','hdidh'];
    var rand = Math.floor((Math.random() * mate.length));
    document.getElementById("demo").innerHTML = 'El resultado es: <b>' + mate[rand] + '</b><br><i> N&uacute;mero aleatorio generado fue: <b>' +rand+'</b></i>';
    var y = Math.floor((Math.random() * 6)+1);
    var x = Math.floor((Math.random() * 3)+1);
    var coord = x.toString() + y.toString();
    document.getElementById(coord).innerHTML = mate[rand];
}*/