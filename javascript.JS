document.getElementById('sendButton').addEventListener('click', async () => {
  const userInput = document.getElementById('userInput').value;
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_API_KEY`
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: userInput,
      max_tokens: 150
    })
  });
  const data = await response.json();
  document.getElementById('messages').innerHTML += `<p>You: ${userInput}</p><p>Bot: ${data.choices[0].text}</p>`;
  document.getElementById('userInput').value = '';
});


