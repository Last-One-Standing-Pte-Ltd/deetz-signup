export const createUser = async (data) => {
  const url = "https://asia-east2-deetz-95c0f.cloudfunctions.net/createUser";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  return json;
};


export const sendMailFunction = async (data) => {
  const url = "https://asia-east2-deetz-95c0f.cloudfunctions.net/sendVerificationMail";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  return json;
};
