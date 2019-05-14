function home() {
    mainContentDiv = document.getElementById('boxcontent');
    mainContentDiv.innerHTML = `
       
            <div id="tid-dato">
                <div id="tid"></div>
                <div id="dato"></div>
            </div>
            <div id="graphWrapper">
                <div id="graphTotal"><canvas id="Total-chart" style="height:10vh; width:20vw"></canvas></div>

                <div id="graphDeltaker">
                    <canvas id="Deltaker-chart" style="height:20vh; width:20vw"></canvas>
                </div>
                <div id="graphStreamere"><canvas id="Streamer-chart" style="height:20vh; width:20vw"></canvas></div>
                <div id="graphUtstillere"><canvas id="Utstiller-chart" style="height:20vh; width:20vw"></canvas></div>
                <div id="graphCrew"><canvas id="Crew-chart" style="height:20vh; width:20vw"></canvas></div>

                <div id="siste25Wrapper">

                    <div id="siste25text">Siste 25 Inn / Ut</div>
                    <div id="siste25inn">
                        <ul class="last" id="siste25Inne"></ul>
                    </div>
                    <div id="siste25ut"></div>
                    <ul class="last" id="siste25Ute"></ul>

                </div>



            </div>
        
`
    document.getElementById('boxheader').innerHTML = "Home";
}
