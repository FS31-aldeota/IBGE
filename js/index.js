function listRegions(){
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then(response => response.json())
    .then(response => {
        response.map(regiao => {
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;
        })
    })
    .finally(() => {
        listStates();
    })
}
listRegions();

function listStates(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados`)
    .then(response => response.json())
    .then(response => {
        estados.innerHTML = '';
        response.map(estado => {
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
        })
    })
}