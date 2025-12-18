 let form = document.querySelector(".form");
let list = document.querySelector(".list");

form.addEventListener("submit", studentData);

function studentData(e) {
  e.preventDefault();

  let name = document.querySelector(".name").value.trim();

  let marks = [
    Number(document.querySelector(".m1").value),
    Number(document.querySelector(".m2").value),
    Number(document.querySelector(".m3").value),
    Number(document.querySelector(".m4").value),
    Number(document.querySelector(".m5").value),
  ];

  let total = marks.reduce((a, b) => a + b, 0);
  let average = total / marks.length;
  let grade = getGrade(average);

  let li = document.createElement("li");
  li.innerHTML = `
    <h4>${name}</h4>
    <h4>${marks.join(", ")}</h4>
    <h4>${total}</h4>
    <h4>${average.toFixed(2)}</h4>
    <h4>${grade}</h4>
  `;

  list.appendChild(li);
  form.reset();
}

function getGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "Fail";
}

