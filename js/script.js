/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22
*/

let nome = prompt('Qual è il tuo nome?');
let cognome = prompt('Qual è il tuo cognome?');
let colore = prompt('Qual è il tuo colore preferuti?');
let password = nome+cognome+colore+22;
document.getElementById('password').innerHTML = password;