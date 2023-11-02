function switchMode() {
    let moon = document.getElementById ("moon");
      if(moon.className=="moon"){
        moon.className="sun";
        document.body.style.backgroundColor = "rgb(255, 255, 251)";
        document.body.style.color = "#121212";
      }
    else {
      moon.className ="moon";
      document.body.style.backgroundColor = "#001520";
      document.body.style.color = "#fcfcfc";
    }
  }
  