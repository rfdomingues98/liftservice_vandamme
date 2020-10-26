const language = {
  pt: {
    "nav-home": "Inicio",
    "nav-about": "Sobre",
    "nav-contacts": "Contactos",
    "nav-language": "Idioma",
    "first-name-label": "Primeiro Nome",
    "last-name-label": "Último Nome",
    "email-label": "Email",
    "message-label": "Mensagem",
    "first-name-input": "Primeiro Nome",
    "last-name-input": "Último Nome",
    "email-input": "Email",
    "message-input": "Mensagem",
    "send-btn": "Enviar",
    "reset-btn": "Limpar",
  },
  "en-us": {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-contacts": "Contacts",
    "nav-language": "Language",
    "first-name-label": "First Name",
    "last-name-label": "Last Name",
    "email-label": "Email",
    "message-label": "Message",
    "first-name-input": "First Name",
    "last-name-input": "Last Name",
    "email-input": "Email",
    "message-input": "Message",
    "send-btn": "Send",
    "reset-btn": "Reset",
  },
};

let dataReload = document.querySelectorAll("[data-reload]");

if (window.location.search) {
  if (window.location.search.includes("lang=")) {
    let re = /(?<=lang=)(.*)($|(?=&))/g;
    let lang = window.location.search.match(re)[0].toLowerCase();
    lang = lang[lang.length - 1] == "&" ? lang.slice(0, lang.length - 1) : lang;

    let elementList = [];
    Object.keys(language[`${lang}`]).forEach((item) => {
      elementList.push(item);
    });

    elementList.forEach((item) => {
      let el = document.querySelectorAll(`[lang-text="${item}"]`);
      el.forEach((i) => {
        if (i instanceof HTMLInputElement)
          i.placeholder = language[`${lang}`][`${item}`];
        else i.textContent = language[`${lang}`][`${item}`];
      });
    });
  }
}

for (let i = 0; i < dataReload.length; i++) {
  dataReload[i].onclick = function () {
    location.reload(true);
  };
}
