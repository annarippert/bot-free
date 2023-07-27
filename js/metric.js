const metricTemplate = document.createElement("template");

metricTemplate.innerHTML=`
<style>
.card{
    background-color:#FAFAFA;
    width:260px;
    margin:5%;
    border-radius:5px;
    outline: 3px solid #ECF1FE;
    padding:0% 5% 2% 5%;
    
}
#top-row, #middle-row{
    display:flex;
    align-items:center;
    margin-bottom:-5%;
}

#top-row{
    justify-content: space-between;
    
}

#image{
    width:55px;
    height:55px;
    margin-right:0px;
    margin-left: auto;
}

#percentage{
    background-color: #EEF9F6;
    color: #00B374;
    border-radius:5px;
    padding:2%;
    margin-right:30%;
    margin-left:5%;
    font-size:12px;
}

h1{
    font-size:31px;
    font-weight:lighter;
}

#more{
    width:16px;
    height:16px;
}

#date{
    color:#9BA6BC;
    font-size:12px;
}

#title{
    font-size:14px;
}

</style>
<div class="card">
    <div id="top-row">
        <h5 id="title"></h5>
        <img id="more" src="./assets/icons/more.png" alt="more">
    </div>
    <div id="middle-row">
        <h1 id="number"></h1>
        <p id="percentage"></p>
        <img id="image" src="" />
    </div>
    <p id="date"></p>
</div>
`

class MetricCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(metricTemplate.content.cloneNode(true));
    }

    connectedCallback(){
        this.shadowRoot.getElementById("title").textContent = this.getAttribute("title");
        this.shadowRoot.getElementById("number").textContent = this.getAttribute("number");
        this.shadowRoot.getElementById("percentage").textContent = this.getAttribute("percentage");
        this.shadowRoot.getElementById("image").src = this.getAttribute("image");
        this.shadowRoot.getElementById("date").textContent = this.getAttribute("date");
    }
}

customElements.define("metric-card", MetricCard);