let queue = [];

document.getElementById("patientForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let priority = parseInt(document.getElementById("priority").value);

    queue.push({
        name:name,
        priority:priority
    });

    queue.sort((a,b)=>b.priority-a.priority);

    displayQueue();

    document.getElementById("patientForm").reset();
});

function displayQueue(){

    let tbody = document.getElementById("queueBody");
    tbody.innerHTML="";

    queue.forEach((patient,index)=>{

        let row = document.createElement("tr");

        let priorityText="";
        let className="";

        if(patient.priority===4){
            priorityText="Critical";
            className="critical";
        }
        else if(patient.priority===3){
            priorityText="High";
            className="high";
        }
        else if(patient.priority===2){
            priorityText="Medium";
            className="medium";
        }
        else{
            priorityText="Low";
            className="low";
        }

        row.innerHTML=`
        <td>${index+1}</td>
        <td>${patient.name}</td>
        <td class="${className}">${priorityText}</td>
        `;

        tbody.appendChild(row);
    });
}