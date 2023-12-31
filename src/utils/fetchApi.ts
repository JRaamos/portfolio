export const fetchApirepoGithub = async (url: string, token: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};
