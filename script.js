new Vue({
  el: "#app",
  data: {
    vidaJogador: 100,
    vidaMonstro: 100,
    barraJogador: 100,
    barraMonstro: 100,
    apareceAcoes: false,
    apareceIniciar: true,
    apareceResultado: false,
    apareceDerrota: false,
    apareceVitoria: false,
    apareceEmpate: false,
    apareceLogs: false,
    danos: [],
  },
  computed: {
    barraJogadorEstilizada() {
      return `${this.barraJogador}%`;
    },
    barraMonstroEstilizada() {
      return `${this.barraMonstro}%`;
    },
  },
  methods: {
    iniciar() {
      this.vidaJogador = 100;
      this.vidaMonstro = 100;

      this.barraJogador = 100;
      this.barraMonstro = 100;

      this.danos = [];

      this.apareceAcoes = true;
      this.apareceIniciar = false;
      this.apareceResultado = false;
      this.apareceDerrota = false;
      this.apareceVitoria = false;
      this.apareceEmpate = false;
      this.apareceLogs = false;
    },
    desistir() {
      this.vidaJogador = 100;
      this.vidaMonstro = 100;

      this.barraJogador = 100;
      this.barraMonstro = 100;

      this.apareceAcoes = false;
      this.apareceIniciar = true;
      this.apareceLogs = false;
    },
    atacar() {
      const danoDeJogador = sortearDanoDeJogador();
      const danoDeMonstro = sortearDanoDeMonstro();

      this.apareceLogs = true;
      this.danos.push(danoDeJogador);
      this.danos.push(danoDeMonstro);

      const barraJogadorFuturo = this.barraJogador - danoDeMonstro;
      const barraMonstroFuturo = this.barraMonstro - danoDeJogador;

      if (barraJogadorFuturo < 0 && barraMonstroFuturo < 0) {
        this.barraJogador = 0;
        this.vidaJogador = 0;
        this.barraMonstro = 0;
        this.vidaMonstro = 0;

        this.apareceAcoes = false;
        this.apareceResultado = true;
        this.apareceEmpate = true;
        this.apareceIniciar = true;
      } else {
        if (barraJogadorFuturo > 0) {
          this.barraJogador = barraJogadorFuturo;
          this.vidaJogador = barraJogadorFuturo;
        } else {
          this.barraJogador = 0;
          this.vidaJogador = 0;

          this.apareceAcoes = false;
          this.apareceResultado = true;
          this.apareceDerrota = true;
          this.apareceIniciar = true;
        }

        if (barraMonstroFuturo > 0) {
          this.barraMonstro = barraMonstroFuturo;
          this.vidaMonstro = barraMonstroFuturo;
        } else {
          this.barraMonstro = 0;
          this.vidaMonstro = 0;

          this.apareceAcoes = false;
          this.apareceResultado = true;
          this.apareceVitoria = true;
          this.apareceIniciar = true;
        }
      }
    },
    atacarEspecial() {
      const danoDeJogador = sortearDanoEspecialDeJogador();
      const danoDeMonstro = sortearDanoDeMonstro();

      this.apareceLogs = true;
      this.danos.push(danoDeJogador);
      this.danos.push(danoDeMonstro);

      const barraJogadorFuturo = this.barraJogador - danoDeMonstro;
      const barraMonstroFuturo = this.barraMonstro - danoDeJogador;

      if (barraJogadorFuturo < 0 && barraMonstroFuturo < 0) {
        this.barraJogador = 0;
        this.vidaJogador = 0;
        this.barraMonstro = 0;
        this.vidaMonstro = 0;

        this.apareceAcoes = false;
        this.apareceResultado = true;
        this.apareceEmpate = true;
        this.apareceIniciar = true;
      } else {
        if (barraJogadorFuturo > 0) {
          this.barraJogador = barraJogadorFuturo;
          this.vidaJogador = barraJogadorFuturo;
        } else {
          this.barraJogador = 0;
          this.vidaJogador = 0;

          this.apareceAcoes = false;
          this.apareceResultado = true;
          this.apareceDerrota = true;
          this.apareceIniciar = true;
        }

        if (barraMonstroFuturo > 0) {
          this.barraMonstro = barraMonstroFuturo;
          this.vidaMonstro = barraMonstroFuturo;
        } else {
          this.barraMonstro = 0;
          this.vidaMonstro = 0;

          this.apareceAcoes = false;
          this.apareceResultado = true;
          this.apareceVitoria = true;
          this.apareceIniciar = true;
        }
      }
    },
    curar() {
      const vida = sortearVida();
      const danoDeMonstro = sortearDanoDeMonstro();

      const barraJogadorFuturo = this.barraJogador - (danoDeMonstro - vida);

      if (barraJogadorFuturo > 100) {
        this.barraJogador = 100;
        this.vidaJogador = 100;
      } else if (barraJogadorFuturo > 0) {
        this.barraJogador = barraJogadorFuturo;
        this.vidaJogador = barraJogadorFuturo;
      } else {
        this.barraJogador = 0;
        this.vidaJogador = 0;

        this.apareceAcoes = false;
        this.apareceResultado = true;
        this.apareceDerrota = true;
        this.apareceIniciar = true;
      }
    },
  },
});

function sortearDanoDeJogador() {
  const min = 1;
  const max = 10;

  const dano = Math.floor(Math.random() * (max - min + 1) + min);
  return dano;
}

function sortearDanoDeMonstro() {
  const min = 5;
  const max = 12;

  const dano = Math.floor(Math.random() * (max - min + 1) + min);
  return dano;
}

function sortearDanoEspecialDeJogador() {
  const min = 7;
  const max = 12;

  const dano = Math.floor(Math.random() * (max - min + 1) + min);
  return dano;
}

function sortearVida() {
  const min = 5;
  const max = 12;

  const vida = Math.floor(Math.random() * (max - min + 1) + min);
  return vida;
}
