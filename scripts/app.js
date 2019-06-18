function enviarMensagem() {
    var form = document.querySelector('#contact-form');
    var objeto = {
        nome : form.elements.form_name.value,
        email : form.elements.form_email.value, 
        telefone : form.elements.form_phone.value, 
        mensagem : form.elements.form_message.value
    }
    localStorage.setItem("formContato", JSON.stringify(objeto));
    alert('O formulário foi salvo com sucesso no Local Storage!')
}