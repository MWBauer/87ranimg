var pictures = ["CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO"];
//pick a random image from the pictures array and displays by crating an img tag and appending the src attributes to the filename
document.write("<img src=\"" + "Images/fig08_07/" + pictures[Math.floor(Math.random() * 7)] + ".gif\" />");

/*const arr = [
  "Images\fig08_07\CPE.gif",
  "Images\fig08_07\EPT.gif",
  "Images\fig08_07\GPP.gif",
  "Images\fig08_07\GUI.gif",
  "Images\fig08_07\PERF.gif",
  "Images\fig08_07\PORT.gif",
  "Images\fig08_07\SEO.gif"
];

let oImg = document.createElement("img");
oImg.setAttribute('src', arr[Math.floor(Math.random()*7)]);
document.body.appendChild(oImg)*/
