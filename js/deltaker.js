function deltaker() {
    mainContentDiv = document.getElementById('boxcontent');
    mainContentDiv.innerHTML = `
            <div id="tid-dato">
                <div id="tid"></div>
                <div id="dato"></div>
            </div>

<div id="StreamerWrapper">

    <div id="siste25text">Inne / Ute</div>
    <div id="siste25inn" class="borderline">
        <ul class="last" id="StreamerInn"></ul>
    </div>
    <div id="siste25ut" class="borderline">
        <ul class="last" id="StreamerUte"></ul>
    </div>
</div>
        
`
    document.getElementById('boxheader').innerHTML = "Deltaker";
}
