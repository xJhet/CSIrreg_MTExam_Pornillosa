function manageStudentEnrollment() {
  const dsaStudents = [];
  const webDevStudents = [];

  while (true) {
    const subjectChoice = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) WebDev\n(C) Exit").toUpperCase();

    if (subjectChoice === 'C') {
      alert(`DSA Students: ${dsaStudents.join(", ")}`);
      alert(`WebDev Students: ${webDevStudents.join(", ")}`);
      break;
    }

    let currentSubject;
    if (subjectChoice === 'A') {
      currentSubject = dsaStudents;
    } else if (subjectChoice === 'B') {
      currentSubject = webDevStudents;
    } else {
      alert("Invalid choice. Please select A, B, or C.");
      continue;
    }

    while (true) {
      const operationChoice = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();

      if (operationChoice === 'D') {
        alert(`DSA Students: ${dsaStudents.join(", ")}`);
        alert(`WebDev Students: ${webDevStudents.join(", ")}`);
        return;
      }

      if (operationChoice === 'A') {
        const studentName = prompt("Enter the name of the student to enroll:");
        currentSubject.push(studentName);
        alert(`${studentName} has been enrolled in ${subjectChoice === 'A' ? 'DSA' : 'WebDev'}.`);
      } else if (operationChoice === 'B') {
        if (currentSubject.length === 0) {
          alert("No students are currently enrolled in this subject.");
        } else {
          alert(`Currently enrolled students: ${currentSubject.join(", ")}`);
          const studentName = prompt("Enter the name of the student to unenroll:");
          const index = currentSubject.indexOf(studentName);
          if (index !== -1) {
            currentSubject.splice(index, 1);
            alert(`${studentName} has been unenrolled from ${subjectChoice === 'A' ? 'DSA' : 'WebDev'}.`);
          } else {
            alert(`${studentName} is not enrolled in this subject.`);
          }
        }
      } else if (operationChoice === 'C') {
        break;
      } else {
        alert("Invalid choice. Please select A, B, C, or D.");
      }
    }
  }
}

manageStudentEnrollment();

