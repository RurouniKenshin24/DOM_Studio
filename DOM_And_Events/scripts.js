function init(){
	const missionAbortButton = document.getElementById("missionAbort");
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const rocket = document.getElementById("rocket");
    const flightStatus = document.getElementById("flightStatus");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');

    rocket.style.position = "absolute";
    rocket.style.left = "350px";
    rocket.style.bottom = "0px";


    takeoffButton.addEventListener("click",function(){
    	let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");

    	if (confirmation) {
    		flightStatus.innerHTML = "Shuttle in flight.";
    		shuttleBackground.style.backgroundColor = "blue";
            let movement = parseInt(rocket.style.bottom) + 10 + "px";
            rocket.style.bottom = movement;
    		spaceShuttleHeight.innerHTML = Number(10000);
    	}
    });

    landingButton.addEventListener("click",function(){
    	window.alert("The shuttle is landing. Landing gear engaged.");
    	flightStatus.innerHTML = "The shuttle has landed.";
    	shuttleBackground.style.backgroundColor = "green";
    	spaceShuttleHeight.innerHTML = 0;
    });

    missionAbortButton.addEventListener("click",function(){
    	let confirmation = window.confirm("Confirm that you want to abort the mission.");
    	
    	if (confirmation) {
    		flightStatus.innerHTML = "Mission aborted.";
    		shuttleBackground.style.backgroundColor = "green";
            rocket.style.bottom = 0;
    		spaceShuttleHeight.innerHTML = 0;
    	}
    });

    upButton.addEventListener("click",function(){
        let movement = parseInt(rocket.style.bottom) + 10 + "px";
        rocket.style.bottom = movement;
    	spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    });

    downButton.addEventListener("click",function(){
        let movement = parseInt(rocket.style.bottom) - 10 + "px";
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    });

    rightButton.addEventListener("click",function(){
        let movement = parseInt(rocket.style.left) + 10 + "px";
        rocket.style.left = movement;
    });

    leftButton.addEventListener("click",function(){
        let movement = parseInt(rocket.style.left) - 10 + "px";
        rocket.style.left = movement;
    });

};

window.addEventListener("load",init);