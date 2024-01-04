function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnLimpar: document.querySelector('.botaoLimpar'),
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-numero')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('botaoLimpar')) {
                    this.limparDisplay();
                }

                if(el.classList.contains('botaoApagar')) {
                    this.apagaUm();
                }

                if(el.classList.contains('botaoIgual')) {
                    this.realizaConta();
                }
            }.bind(this));
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        },
        limparDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta inválida');
                return;
            }
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', function(e){
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            }.bind(this));
        },
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();