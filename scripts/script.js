function removeTransition(event) {
			if (event.propertyName !== "transform") return; //return ends FUNCTION - when in scope of if statement, it doesn't work 
			{
				this.classList.remove("playing");
			}
		}

		function playSound(event) {
			var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
			var key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
			var beats = document.querySelector('#beats');
			if (!audio) {
				return; //stop function from running if unlisted key is pressed
			}
			audio.currentTime = 0; //resets audio so we don't wait until it plays entirely
			audio.play();
			key.classList.add("playing");
		}


		var keys = Array.from(document.querySelectorAll(".key")); //Creates array from NodeList
		keys.forEach(key => key.addEventListener("transitionend", removeTransition));

		window.addEventListener("keydown", playSound);