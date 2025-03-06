export const count_vocals = (str) => {
 //INSERISCI QUI IL TUO CODICE
     let mappa = new Map();


    let vocali = ['a', 'e', 'i', 'o', 'u'];


    


    str.split('').forEach(carattere => {


        if(vocali.includes(carattere) ){


            mappa.set(carattere, (mappa.get(carattere)|| 0) + 1);             


        }       


    });    


    return mappa
}

