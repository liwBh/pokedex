import { Howl, Howler } from "howler";
import soundButton from "./button.mp3";
import soundRadio from "./radio.mp3";
import soundIntro from "./intro.mp3";
import soundContact from "./contact.mp3";
import soundWhatIs from "./whatIs.mp3";
import soundButton2 from "./button-2.mp3";
import soundButton3 from "./button-3.mp3";
import soundAciert from "./acierto.mp3";
import soundFail from "./fail.mp3";
import soundMeme from "./pokemon-its-pikachu.mp3";

//debloqear howler en el navegador
Howler.autoUnlock = false;

//interuptor
let isPlaying = false;

export const sonidoBoton = () => {
  //inicializar sonido
  const sound = new Howl({
    src: [soundButton],
    html5: true,
  });

  //reproducir sonido
  sound.play();
};

export const sonidoBoton2 = () => {
  //inicializar sonido
  const sound = new Howl({
    src: [soundButton2],
    html5: true,
  });

  //reproducir sonido
  sound.play();
};
export const sonidoBoton3 = () => {
  //inicializar sonido
  const sound = new Howl({
    src: [soundButton3],
    html5: true,
  });

  //reproducir sonido
  sound.play();
};

export const sonidoRadio = () => {
  //inicializar sonido
  const sound = new Howl({
    src: [soundRadio],
    html5: true,
  });

  //reproducir sonido
  sound.play();
};

export const sonidoIntro = () => {
  //inicializar sonido
  const sound = new Howl({
    src: [soundIntro],
    html5: true,
  });

  if (!isPlaying) {
    //bloquear interuptor
    isPlaying = true;

    //reproducir sonido
    sound.play();

    //resteo de interuptor
    sound.on("end", function () {
      Howler.stop();
      isPlaying = false;
    });
  } else {
    //deterner el sonido
    Howler.stop();
    //reseteo de interuptor
    isPlaying = false;
  }
};

export const sonidoContacto = () => {
  //inicializar sonido
  const sound = new Howl({
    src: [soundContact],
    html5: true,
  });

  if (!isPlaying) {
    //bloquear interuptor
    isPlaying = true;

    //reproducir sonido
    sound.play();

    //resteo de interuptor
    sound.on("end", function () {
      Howler.stop();
      isPlaying = false;
    });
  } else {
    //deterner el sonido
    Howler.stop();
    //reseteo de interuptor
    isPlaying = false;
  }
};

export const sonidoQuienEs = () => {
  //inicializar sonido
  const sound = new Howl({
    src: [soundWhatIs],
    html5: true,
  });

  if (!isPlaying) {
    //bloquear interuptor
    isPlaying = true;

    //reproducir sonido
    sound.play();

    //resteo de interuptor
    sound.on("end", function () {
      Howler.stop();
      isPlaying = false;
    });
  } else {
    //deterner el sonido
    Howler.stop();
    //reseteo de interuptor
    isPlaying = false;
  }
};

export const sonidoAcierto = () => {
  //inicializar sonido
  const sound = new Howl({
    src: [soundAciert],
    html5: true,
  });

  if (!isPlaying) {
    //bloquear interuptor
    isPlaying = true;

    //reproducir sonido
    sound.play();

    //resteo de interuptor
    sound.on("end", function () {
      Howler.stop();
      isPlaying = false;
    });
  } else {
    //deterner el sonido
    Howler.stop();
    //reseteo de interuptor
    isPlaying = false;
  }
};

export const sonidoFail = () => {
  //inicializar sonido
  const sound = new Howl({
    src: [soundFail],
    html5: true,
  });

  if (!isPlaying) {
    //bloquear interuptor
    isPlaying = true;

    //reproducir sonido
    sound.play();

    //resteo de interuptor
    sound.on("end", function () {
      Howler.stop();
      isPlaying = false;
    });
  } else {
    //deterner el sonido
    Howler.stop();
    //reseteo de interuptor
    isPlaying = false;
  }
};

export const sonidoMeme = () => {
  //inicializar sonido
  const sound = new Howl({
    src: [soundMeme],
    html5: true,
  });

  if (!isPlaying) {
    //bloquear interuptor
    isPlaying = true;

    //reproducir sonido
    sound.play();

    //resteo de interuptor
    sound.on("end", function () {
      Howler.stop();
      isPlaying = false;
    });
  } else {
    //deterner el sonido
    Howler.stop();
    //reseteo de interuptor
    isPlaying = false;
  }
};
