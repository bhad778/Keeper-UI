const JobsService = {
  getJobs: (payload) => {
    return fetch('https://example.com/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },

  addJob: (payload) => {
    return fetch(
      'https://mzl4y00fba.execute-api.us-east-1.amazonaws.com/dev/addJob',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },
};

export default JobsService;
