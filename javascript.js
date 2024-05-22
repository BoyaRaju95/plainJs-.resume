

document.body.style.backgroundColor = "#454443";

var rootElement = document.createElement('div');
rootElement.className = "root";


var mainDiv = document.createElement('div');
mainDiv.className = "setName";

var nameEmail = document.createElement('div');
nameEmail.style.className;
nameEmail.style.paddingTop = "5%";
mainDiv.appendChild(nameEmail);


var nameCreate = document.createElement('p');
nameCreate.className = "name";
nameCreate.innerHTML = "B Raju";
nameCreate.style.fontSize = "30px";
nameCreate.style.fontWeight = "bold";
nameCreate.style.textAlign = "center";
nameCreate.style.paddingBottom = "30px"

var emailCreate = document.createElement('span');
emailCreate.innerHTML = "<b>Email: </b>rboya142@gmail.com";
emailCreate.style.fontSize = "20px";
emailCreate.style.paddingRight = "22px";
emailCreate.style.float = "right";

var numCreate = document.createElement('span');
numCreate.innerHTML = "<b>Phone: </b>+91 95155XXX48";
numCreate.style.fontSize = "20px";
numCreate.style.paddingLeft = "22px";



nameEmail.appendChild(nameCreate);
nameEmail.appendChild(numCreate);
nameEmail.appendChild(emailCreate);

var hrLine = document.createElement('hr');
hrLine.style.color = "#160eed";
hrLine.style.width = "95%"
hrLine.style.marginTop = "20px";
hrLine.style.marginLeft = "22px";

mainDiv.appendChild(hrLine);

var careeObject = document.createElement('h2');
careeObject.innerHTML = "Career Objective :";
careeObject.style.paddingLeft = "10px";
careeObject.style.backgroundColor = "#c0c2c4";
careeObject.style.width = "95%";
careeObject.style.marginLeft = "22px";
careeObject.style.position = "relative";
careeObject.style.top = "30px";


mainDiv.appendChild(careeObject);


var careerPhara = document.createElement('p');
careerPhara.style.width = "95%";
careerPhara.style.paddingTop = "40px"
careerPhara.className = "firstll";

careerPhara.innerHTML = "To work in a highly competitive environment with a perfect challenge by contributing the best for the growth of the Organization while ensuring growth in personal career.";

mainDiv.appendChild(careerPhara);



var academicDetails = document.createElement('h2');
academicDetails.innerHTML = "Academics :";
academicDetails.style.backgroundColor = "#c0c2c4";
academicDetails.style.width = "95%";
academicDetails.style.marginLeft = "22px";
academicDetails.style.marginTop = "20px";
academicDetails.style.paddingLeft = "10px";


mainDiv.appendChild(academicDetails);



var acadimic = document.createElement('div');



const data = [{
    "Course": "B.com (CA)",
    "Institution": "Sri krishnadevaraya university",
    "Duration": "2016-2019",
    "Percentage": 63.3
},
{
    "Course": "INTERMEDIATE(CEC)",
    "Institution": "Sri vivekananda Junior College",
    "Duration": "2014-2016",
    "Percentage": 5.3
},
{
    "Course": "SSC",
    "Institution": "DR Radhakrishana MPL high School, Rayadurg",
    "Duration": "2014",
    "Percentage": 63
}
]


var table = "<table><thead><tr><th>Course</th><th>Institution</th><th>Duration</th><th>Percentage</th></tr></thead><tbody>";
for (var i = 0; i < data.length; i++) {
    table += "<tr><td>" + data[i].Course + "</td><td>" + data[i].Institution + "</td><td>" + data[i].Duration + "</td><td>" + data[i].Percentage + "</td></tr>";

}
table += "</tbody></table>";
acadimic.innerHTML = table;


mainDiv.appendChild(acadimic);







var skillsDiv = document.createElement('div');

var skill = document.createElement('h2');
skill.innerHTML = "Skills :";
skill.style.backgroundColor = "#c0c2c4";
skill.style.width = "95%";
skill.style.marginLeft = "22px";
skill.style.marginTop = "20px";
skill.style.paddingLeft = "10px";
skillsDiv.appendChild(skill);
mainDiv.appendChild(skillsDiv);

var languages = document.createElement('span');
languages.innerHTML = "programming Languages";
languages.style.fontWeight = "bolder";
languages.style.fontSize = "20px";
languages.style.paddingLeft = "20px";
languages.style.position = "relative";
languages.style.top = "20px"
skillsDiv.appendChild(languages);


var ulList = document.createElement('ul');
ulList.style.paddingLeft = "60px";
ulList.style.paddingTop = "30px"
ulList.style.fontSize = "20px"

var listOfItems = document.createElement('li');
listOfItems.innerHTML = "C Language";
listOfItems.style.paddingBottom = "10px";

ulList.appendChild(listOfItems);
var listOfItems1 = document.createElement('li');
listOfItems1.innerHTML = "C++ Language";
ulList.appendChild(listOfItems1);
skillsDiv.appendChild(ulList);


var frontTec = document.createElement('span');

frontTec.innerHTML = "FrontEnd Technologies";
frontTec.style.fontWeight = "bolder";
frontTec.style.fontSize = "20px"
frontTec.style.paddingLeft = "20px";
frontTec.style.position = "relative";
frontTec.style.top = "20px";

skillsDiv.appendChild(frontTec);



var ulList1 = document.createElement('ul');
ulList1.style.paddingLeft = "60px";
ulList1.style.paddingTop = "30px";
ulList1.style.fontSize = "20px";
skillsDiv.appendChild(ulList1);



var frontTech = document.createElement('li');
frontTech.innerHTML = "HTML";
ulList1.appendChild(frontTech);

var frontTech1 = document.createElement('li');
frontTech1.innerHTML = "CSS";
ulList1.appendChild(frontTech1);



var frontTech2 = document.createElement('li');
frontTech2.innerHTML = "Javascript";
ulList1.appendChild(frontTech2);


var frontTech3 = document.createElement('li');
frontTech3.innerHTML = "Bootstrap";
ulList1.appendChild(frontTech3);



var databases = document.createElement('span');
databases.innerHTML = "Databases";
databases.style.fontWeight = "bolder";
databases.style.fontSize = "20px"
databases.style.paddingLeft = "20px";
databases.style.position = "relative";
databases.style.top = "20px";

skillsDiv.appendChild(databases);


var listdata = document.createElement('ul');
listdata.style.paddingLeft = "60px";
listdata.style.paddingTop = "30px";
listdata.style.fontSize = "20px";
skillsDiv.appendChild(listdata);


var mySql = document.createElement('li');
mySql.innerHTML = "MySQl";
listdata.appendChild(mySql)

var mongDb = document.createElement('li');
mongDb.innerHTML = "MongoDB";
listdata.appendChild(mongDb);



var declartin = document.createElement('h2');
declartin.innerHTML = "Declaration :";
declartin.style.width = "95%";
declartin.style.backgroundColor = "#c0c2c4";
declartin.style.marginLeft = "22px";
declartin.style.marginTop = "10px";
declartin.style.paddingLeft = "10px";
mainDiv.appendChild(declartin);


var decphara = document.createElement('p');
decphara.innerHTML = "I here by declaring that all the details furnished by me is correct to the best of my knowledge and belief."

decphara.style.width = "95%";
decphara.style.paddingTop = "20px"
decphara.className = "firstLi";


mainDiv.appendChild(decphara);










































document.body.appendChild(rootElement);
document.body.appendChild(mainDiv);




console.log(rootElement, mainDiv, hrLine);


console.log(table);




