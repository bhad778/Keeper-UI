import getEnvVars from "../environment";
const { apiUrl } = getEnvVars();

const EmployeeService = {
  getEmployer: (payload) => {
    return fetch(`${apiUrl}/getEmployer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};

export default EmployeeService;
