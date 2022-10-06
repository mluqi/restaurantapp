class cardItem extends HTMLElement{
    set card(card){
        this._card = card;
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>
          .content-item {
            margin: 32px auto auto;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 380px;
            border-radius: 20px;
            overflow: hidden;
          }
          
          .content-item-isi {
            padding: 16px;
          }
          
          .content-item-img {
            align-item: center;
            width: 100%;
            background-position: center;
            background-size: cover;
          }
          
          .content-item-title{
            margin-bottom: 10px;
          }

          .content-item-desc{
            font-size: 11px;
          }
          
          .city{
            margin-top: 6px;
          }
          
          .content-rating {
            padding: 4px;
            margin-top: 10px;
            background-color: #251B37;
            color: #FFECEF;
            border-radius: 20px;
            max-width: 40px;
            padding-top: 1px;
            font-size: 12px;
          }
          
          @media screen and (min-width: 620px) {    
            .content{
              grid-template-columns: 1fr 1fr;
            }
          
          }
          
          /* respoonsive ipad*/
          
          @media screen and (min-width: 920px) {
          
            .content{
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          
          /* desktop */
          
          @media screen and (min-width: 1200px) {
            .content{
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          
          </style>

        <div class="content">
          <article class="content-item">
            <img class="content-item-img" src="${this._card.pictureId}" alt="${this._card.name}" />
            <div class="content-item-isi">
              <h2 class="content-item-title">${this._card.name}</h2>
              <p class="content-item-desc">${this._card.description}</p>
              <h5 class="city">📍 ${this._card.city}</h5>
              <p class="content-rating">⭐ ${this._card.rating}</p>
            </div>
          </article>
        </div>
      `
    }
}

customElements.define("card-item", cardItem);