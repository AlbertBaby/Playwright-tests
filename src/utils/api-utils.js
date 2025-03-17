export async function loginToApi(apiUrl, username, password) {
    const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  
    const token = await response.json();
    return token;
  }