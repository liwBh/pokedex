import Swal from "sweetalert2";

export const SweetAlertSearch = () => {
  Swal.fire({
    position: "center",
    title: "Ingrese un nombre de pokémon",
    color: "#D31F2C",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const SweetAlertName = (name) => {
  Swal.fire({
    position: "center",
    title: `El nombre correcto del pokémon es ${name}`,
    color: "#5D6D7E",
    showConfirmButton: false,
    timer: 3000,
  });
};

export const SweetAlertAcierto = (name) => {
  Swal.fire({
    position: "center",
    title: `Correcto entrenador el pokémon es ${name}`,
    color: "#229954",
    showConfirmButton: false,
    timer: 3000,
  });
};

export const SweetAlertSuccess = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "La solicitud se realizó con éxito!",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const SweetAlertError = (message) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Ocurrió un error!",
    text: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const SweetAlertTimeOut = (name, intentos) => {
  const randomNumber = Math.floor(Math.random() * name.length);
  const randomChar = name[randomNumber];

  let maskedName = "";
  for (let i = 0; i < name.length; i++) {
    if (i < intentos + 1) {
      maskedName += name[i];
    } else if (name[i] === " ") {
      maskedName += " ";
    } else if (name[i] === randomChar) {
      maskedName += randomChar;
    } else {
      maskedName += " _ ";
    }
  }

  let timerInterval;
  Swal.fire({
    title: "Piensa un poco mas el nombre!",
    html:  `<h4>Pista #${intentos+1} &nbsp;&nbsp; <strong>${maskedName}</strong> ?</h4> <br/> <p>Esperando para nuevo intento <b></b></p> `,
    timer: 10000,
    timerProgressBar: true,
    showConfirmButton: false,
    showCancelButton: false, 
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      
      let i = 0;
      timerInterval = setInterval(() => {
        i++;
        b.textContent = i ;
      }, 1000);

    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  })
};
