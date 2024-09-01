document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);

    if (name && email && message) {
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);
        document.getElementById('contactForm').reset();
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
document.getElementById('scrollToEndButton').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: document.body.scrollHeight, 
        behavior: 'smooth' 
    });
});
