let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    {
      section: "001",
      enrolled: 30,
      instructor: "Prof. Smith"
    },
    {
      section: "002",
      enrolled: 25,
      instructor: "Prof. Johnson"
    }
  ]
};

function setCourseName(course) {
  const courseName = document.getElementById("courseName");
  courseName.textContent = `${course.code} – ${course.title}`;
}

function renderSections(course) {
  const tableBody = document.querySelector("#sections tbody");

  course.sections.forEach(section => {
    let row = document.createElement("tr");

    let sectionCell = document.createElement("td");
    sectionCell.textContent = section.section;

    let enrolledCell = document.createElement("td");
    enrolledCell.textContent = section.enrolled;

    let instructorCell = document.createElement("td");
    instructorCell.textContent = section.instructor;

    row.appendChild(sectionCell);
    row.appendChild(enrolledCell);
    row.appendChild(instructorCell);

    tableBody.appendChild(row);
  });
}

// Call the functions
setCourseName(aCourse);
renderSections(aCourse);
