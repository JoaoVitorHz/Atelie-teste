//URL base da API
const BASE = 'https://api.teste-frontend.ateliedepropaganda.com.br/v1';
//Recebendo os itens a ser enviado
export async function useFetch (
    name:string, 
    email:string,
    tax_id:string,
    password:string,
    password_confirmation:string, 
    company:string, 
    segment:string 
    ){
    
    //Fazendo a requisição 
    let response = await fetch(`${BASE}/register`, {
        method: 'POST',
        body: JSON.stringify({
            name, email, tax_id, password, password_confirmation, company, segment
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let json = await response.json();

    if(json.message === "Registration saved successfully."){
        return json == true
    } else {
        return json == false;
    }
}
