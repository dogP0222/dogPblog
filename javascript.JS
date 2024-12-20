<script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>
<script>
    const socket = io('http://localhost:3000');
    const form = document.querySelector('form');
    const input = document.querySelector('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = input.value;
        socket.emit('message', message); // サーバーに送信
        input.value = '';
    });

    socket.on('message', (msg) => {
        const div = document.createElement('div');
        div.textContent = msg;
        document.body.appendChild(div);
    });
</script>

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


