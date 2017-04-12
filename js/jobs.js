var jobCount = 1;
var jobid = 1;
var intervalID = 0;
var xhr = null;
var record = null;


function trigger()
{
	intervalID = setInterval(loadJobs, 2000);
}

function loadJobs()
{
	xhr = new XMLHttpRequest();
	if(xhr)
	{
		xhr.onreadystatechange = stateChangeHandler;
		xhr.open("GET", "sendjobs.php?jobid=" + jobid, true);
		xhr.send(null);
		jobid += 1;
		if(jobid > 4)
		{
			clearInterval(intervalID);
		}
	}
	else
	{
		alert("Failed to initialize XHR");
	}
}

function stateChangeHandler()
{
	if(xhr.readyState == 4 && xhr.status == 200)
	{
		var data = xhr.responseText.substring(1, xhr.responseText.length - 1);
		//document.getElementById("container").appendChild(document.createTextNode(data));
		//console.log(data);
		record = JSON.parse(data);
		//document.getElementById("container").appendChild(document.createTextNode(record.job_title));
		putJobs();

	}
}

function putJobs()
{
	var container = document.getElementById("container");
	var newJob = document.createElement("div");
	newJob.className ="row";
	newJob.style = "padding: 0px";

	var newBorder = document.createElement("div");
	newBorder.className = "well well-lg col-md-12";
	newBorder.style = "margin: 10px";

	var newTitle = document.createElement("div");
	newTitle.className = "col-md-3";
	newTitle.style = "margin: 0px;padding: 0px";

	var jobTitle = document.createElement("h2");
	jobTitle.innerHTML = record.job_title;

	var jobSubTitle = document.createElement("h7");
	jobSubTitle.innerHTML = record.company_login;

	newTitle.appendChild(jobTitle);
	newTitle.appendChild(jobSubTitle);
	newBorder.appendChild(newTitle);

	var descriptionDiv = document.createElement("div");
	descriptionDiv.className = "col-md-7";
	descriptionDiv.style = "margin-top: 10px";

	var jobDesc = document.createElement("h4");
	jobDesc.style = "font-weight: bold";
	jobDesc.innerHTML = "Job Description";

	var jobSubDesc = document.createElement("h5");
	jobSubDesc.innerHTML = record.job_desc;

	descriptionDiv.appendChild(jobDesc);
	descriptionDiv.appendChild(jobSubDesc);

	var salaryDiv = document.createElement("div");
	salaryDiv.className = "col-md-4";
	salaryDiv.style = "padding: 0px;margin: 0px;";

	var salaryText = document.createElement("h4");
	salaryText.style = "font-weight: bold";
	salaryText.innerHTML = "Salary";

	var salaryVal = document.createElement("h5");
	salaryVal.innerHTML = "INR " + record.salary;

	salaryDiv.appendChild(salaryText);
	salaryDiv.appendChild(salaryVal);
	descriptionDiv.appendChild(salaryDiv);

	var joiningDiv = document.createElement("div");
	joiningDiv.className = "col-md-3";
	joiningDiv.style = "padding: 0px;margin: 0px;";

	var joiningText = document.createElement("h4");
	joiningText.style = "font-weight: bold";
	joiningText.innerHTML = "Joining Date";

	var joiningVal = document.createElement("h5");
	joiningVal.innerHTML = record.join_date;

	joiningDiv.appendChild(joiningText);
	joiningDiv.appendChild(joiningVal);
	descriptionDiv.appendChild(joiningDiv);

	newBorder.appendChild(descriptionDiv);

	var applyDiv = document.createElement("div");
	applyDiv.className = "col-md-2";
	applyDiv.style = "margin-top: 15px";

	var button = document.createElement("button");
	button.className = "btn btn-success";
	button.id = jobCount;
	button.style = "width: 100%;height: 10%";
	button.innerHTML = "Apply";
	button.innerHTML += "<span class = 'glyphicon glyphicon-send'></span>";
	button.onclick = function() {
			closeJob(this.id);
	};
	//button.setAttribute("onclick", closeJob(jobCount));
	
	applyDiv.appendChild(button);
	newBorder.appendChild(applyDiv);
	newJob.appendChild(newBorder);
	container.appendChild(newJob);
	
	jobCount++;
}

function closeJob(clicked_id){
	console.log("Closing Job : " + clicked_id);
	xhr = new XMLHttpRequest();
	if(xhr)
	{
		xhr.onreadystatechange = function(){
			console.log("Job Applied");
		};
		xhr.open("GET", "changeStatus.php?jobid=" +clicked_id, true);
		xhr.send(null);
	}
	else
	{
		alert("Failed to initialize XHR");
	}
		
}