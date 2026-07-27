const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("name").value;
  const ageInput = document.getElementById("age").value;
  const gradeInput = document.getElementById("grade").value;

  const age = Number(ageInput);
  const grade = Number(gradeInput);

  const outName = document.getElementById("outName");
  const outAge = document.getElementById("outAge");
  const outGrade = document.getElementById("outGrade");
  const outStatus = document.getElementById("outStatus");

  outName.textContent = nameInput;

  outAge.textContent = age;
  outGrade.textContent = grade;

  if (grade < 0 || grade > 100 || gradeInput === "") {
    outStatus.textContent = "Invalid Grade";
    outStatus.className = "status-invalid";
    outGrade.textContent = "--";
  } else if (grade >= 90 && grade <= 100) {
    outStatus.textContent = "Excellent ⭐⭐⭐";
    outStatus.className = "status-excellent";
  } else if (grade >= 75 && grade < 90) {
    outStatus.textContent = "Very Good ⭐⭐";
    outStatus.className = "status-verygood";
  } else if (grade >= 50 && grade < 75) {
    outStatus.textContent = "Pass ⭐";
    outStatus.className = "status-pass";
  } else {
    outStatus.textContent = "Fail ❌";
    outStatus.className = "status-fail";
  }

  outStatus.style.fontSize = "22px";
});
