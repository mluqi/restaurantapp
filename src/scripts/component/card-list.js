import "./card-item.js";

class cardList extends HTMLElement {
    set cards (cards){
        this._cards = cards.restaurants;
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>
        #container{
          display: grid;
          grid-template-areas: 'myArea myArea myArea';
          text-align: left;
        }
        .post {
            width: 100%;
            margin: 60px auto;
            text-align: center;
          }
          
        .post-label {
          text-align: center;
          font-weight: lighter;
        }
        </style>
        <div class="post">
          <h2 class="post-label">Daftar Restaurant</h2>
        </div>
        <section id="container">
        </section>
        `
        this._cards.forEach(card => {
          const cardItemElement = document.createElement('card-item');
          const containerElement = document.getElementById('container');
       
          cardItemElement.card = card;
          this.appendChild(cardItemElement);

          containerElement.appendChild(cardItemElement);
          document.getElementById("container").appendChild(cardItemElement)
        });
    }
}

customElements.define("card-list", cardList);