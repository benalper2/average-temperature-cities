let canvas = document.getElementById("canvas");
canvas.height = 1932; //window.innerHeight;
canvas.width = 2744; //window.innerWidth;
let ctx = canvas.getContext("2d");
ctx.lineWidth = 5;

let prevX = null;
let prevY = null;

let draw = false;

let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs);
clrs.forEach((clr) => {
  clr.addEventListener("click", () => {
    ctx.strokeStyle = clr.dataset.clr;
  });
});

// let clearBtn = document.querySelector(".clear");
// clearBtn.addEventListener("click", () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// });

let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
  let data = canvas.toDataURL("imag/png");
  let a = document.createElement("a");
  a.href = data;
  a.download = "sketch.png";
  a.click();
});

let stations = [
  ["King's Cross St Pancras", 1399, 740],
  ["Victoria", 1111, 1080],
  ["Oxford Circus", 1167, 900],
  ["London Bridge", 1547, 1066],
  ["Waterloo", 1282, 1158],
  ["Stratford", 2140, 679],
  ["Liverpool Street", 1568, 828],
  ["Paddington", 893, 777],
  ["Canary Wharf", 2008, 1113],
  ["Leicester Square", 1282, 973],
  ["Tottenham Court Road", 1274, 892],
  ["Green Park", 1120, 973],
  ["Euston", 1302, 13],
  ["Bond Street", 1096, 892],
  ["Piccadilly Circus", 1222, 973],
  ["Finsbury Park", 1594, 491],
];

let findBtn = document.querySelector(".find");
findBtn.addEventListener("click", () => {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  //ctx.translate(300, 300);
  //ctx.scale(2, 2);

  //window.scrollTo(document.body.scrollWidth, document.body.scrollHeight);
  window.scrollTo(1399 - window.innerWidth / 2, 740 - window.innerHeight / 2);
});

let searchBox = document.querySelector(".search");
searchBox.addEventListener("onkeyup", () => {});

function loadSearchData() {
  // Get the HTML element of the list
  let list = document.getElementById("list");
  // Add each data item as an <a> tag
  stations.forEach((station) => {
    let a = document.createElement("a");
    a.innerText = station[0];
    a.classList.add("listItem");
    a.onclick = () => {
      window.scrollTo(
        station[1] - window.innerWidth / 2,
        station[2] - window.innerHeight / 2
      );
      const circles = document.getElementsByClassName("circle");
      console.log(circles);
      for (let i = 0; i < circles.length; i++) {
        circles[i].style.left = station[1] + "px";
        circles[i].style.top = station[2] + "px";
        // circles[i].style.display = visible;
      }
    };
    /*add button*/
    list.appendChild(a);
  });
}

function search() {
  let listContainer = document.getElementById("list");
  let listItems = document.getElementsByClassName("listItem");
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let noResults = true;
  for (i = 0; i < listItems.length; i++) {
    if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
      listItems[i].style.display = "none";
      continue;
    } else {
      listItems[i].style.display = "flex";
      noResults = false;
    }
  }
  listContainer.style.display = noResults ? "none" : "block";
}

window.addEventListener("mousedown", (e) => (draw = true));
window.addEventListener("mouseup", (e) => (draw = false));

window.addEventListener("mousemove", function (e) {
  if (prevX == null || prevY == null || !draw) {
    prevX = e.clientX;
    prevY = e.clientY;
    return;
  }

  let mouseX = e.clientX;
  let mouseY = e.clientY;
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();

  prevX = e.clientX;
  prevY = e.clientY;
});

/*Add Image*/
const image = document.getElementById("source");

image.addEventListener("load", (e) => {
  ctx.drawImage(image, 0, 0);
});
