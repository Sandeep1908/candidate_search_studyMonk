// Sample candidate data
const candidates = [
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", role: "Data Analyst" },
    { name: "Mike Johnson", location: "Chicago", role: "Project Manager" },
    { name: "Emily Brown", location: "Los Angeles", role: "UX Designer" },
  ];
  
  // Function to search candidates based on location and job role
  function searchCandidates() {
    const location = document.getElementById("location").value;
    const role = document.getElementById("role").value;
    const filteredCandidates = candidates.filter(candidate =>
      candidate.location.toLowerCase().includes(location.toLowerCase()) &&
      candidate.role.toLowerCase().includes(role.toLowerCase())
    );
  
    displayCandidates(filteredCandidates);
  }
  
  // Function to display the list of candidates
  function displayCandidates(candidates) {
    const candidatesBody = document.getElementById("candidates-body");
    candidatesBody.innerHTML = "";
  
    candidates.forEach(candidate => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${candidate.name}</td>
        <td>${candidate.location}</td>
        <td>${candidate.role}</td>
      `;
      candidatesBody.appendChild(row);
    });
  }
  