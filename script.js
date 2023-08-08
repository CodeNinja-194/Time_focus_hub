document.addEventListener("DOMContentLoaded", function () {
  // Select DOM Elements
  const time = document.getElementById("time");
  const greeting = document.getElementById("greeting");
  const nameInput = document.getElementById("name");
  const focusInput = document.getElementById("focus");

  // Options
  const showAmPm = true;

  // Show Time
  function showTime() {
    const today = new Date();
    let hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hour = hour % 12 || 12;

    // Update Time Display
    time.innerHTML = `${hour}<span>:</span>${addZero(
      min
    )}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ""}`;

    // Update time every second
    setTimeout(showTime, 1000);
  }

  // Add Leading Zero to Numbers < 10
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }

  // Set Background and Greeting
  function setBgGreet() {
    const hour = new Date().getHours();

    if (hour < 12) {
          document.body.style.backgroundImage =
            "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
      greeting.textContent = "Good Morning, ";
    } else if (hour < 18) {
      document.body.style.backgroundImage = "url('afternoon.jpg')";
      greeting.textContent = "Good Afternoon, ";
    } else {
      document.body.style.backgroundImage = "url('night.jpg')";
      greeting.textContent = "Good Evening, ";
      document.body.style.color = "white";
    }
  }

  // Get and Set User Name
  function getName() {
    const storedName = localStorage.getItem("name");
    if (storedName === null) {
      nameInput.textContent = "[Enter Name]";
    } else {
      nameInput.textContent = storedName;
    }
  }

  function setName() {
    const enteredName = nameInput.innerText.trim();

    if (enteredName === "") {
      nameInput.textContent = "[Enter Name]";
    } else {
      localStorage.setItem("name", enteredName);
    }
  }

  // Get and Set User Focus
  function getFocus() {
    const storedFocus = localStorage.getItem("focus");
    if (storedFocus === null) {
      focusInput.textContent = "[Enter Focus]";
    } else {
      focusInput.textContent = storedFocus;
    }
  }

  function setFocus() {
    const enteredFocus = focusInput.innerText.trim();

    if (enteredFocus === "") {
      focusInput.textContent = "[Enter Focus]";
    } else {
      localStorage.setItem("focus", enteredFocus);
    }
  }

  // Event Listeners for Name and Focus Input
  nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      setName();
      nameInput.blur();
    }
  });
  nameInput.addEventListener("blur", setName);

  focusInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      setFocus();
      focusInput.blur();
    }
  });
  focusInput.addEventListener("blur", setFocus);

  // Initialize the Page
  function initPage() {
    showTime();
    setBgGreet();
    getName();
    getFocus();
  }

  // Run Initialization
  initPage();
});
